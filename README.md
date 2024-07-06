# Burnotes

Это проект на [Next.js](https://nextjs.org/), демо доступно по адресу [burnotes.com](https://burnotes.com/) и в телеграм боте в качестве Telegram Mini App [@burnotes_bot](https://t.me/burnotes_bot).

С помощью данного web-приложения можно создавать секретные защищенные шифрованием записки, которые сохраняются в базу данных Redis. Шифрование происходит на клиенте и сервер отправляется только зашифрованная записка. После запроса записки по API записка удаляется. Также записка хранится ограниченное время.

## TODO:

- Тестирование
- GitLab CI & GitHub Actions
- docker-compose.yml для сборки и деплоя production
- Helm Chart для деплоя в кластер Kubernetes
- Подключить что-то типа trunk.io к среде разработки
- Разобраться с первым рендерингом после сборки приложения

## Сборка

### Автоматическая сборка и запуск

На данный момент сборка **production** среды полностью делегирована сервису [vercel.com](https://vercel.com/), поэтому в данной инструкции описана только сборка для разработки.

Следует использовать [VSCode](https://code.visualstudio.com/) и расширение [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) для запуска среды разработки. Для этого нужен предустановленный [Docker](https://www.docker.com/).

Это позволяет запустить среду изолированно и исключает воздействие устанавливаемых пакетов на вашу операционную систему.

- Установите [Docker](https://www.docker.com/)
- Установите [VSCode](https://code.visualstudio.com/)
- Установите плагин [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- Клонируйте проект [Burnotes](https://github.com/karpulix/burnotes)
- Откройте этот проект в VSCode

VSCode должен предложить открыть данный проект в контейнере - согласитесь.

Если этого не произошло, запустите **Command Palette**

- Для Mac: <kbd>⌘</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd>
- Для Win: ...чтототам... + <kbd>SHIFT</kbd> + <kbd>P</kbd>

введите и запустите команду:

```text
>Dev Containers: Rebuild Container
```

В процессе запуска будет выполнена сборка среды, установка необходимых зависимостей и запуск сервера приложения который будет доступен по адресу `http://localhost:3000`.

Сервер можно остановить командой <kbd>CTRL</kbd>+<kbd>C</kbd> в терминале.

Вы можете выйти из этой среды чтобы запустить проект локально. Выполните в **Command Palette**:

```text
>Dev Containers: Reopen Folder Locally
```

### Кастомизация среды VSCode

Вы можете добавить нужные расширения в эту среду отредактировав массив расширений в файле `.devcontainer/devcontainer.json`. По умолчанию будут установлены следующие расширения:

- unifiedjs.vscode-mdx - [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx) – поддержка языка MDX (Markdown + JS)
- esbenp.prettier-vscode - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - форматирование кода
- ms-azuretools.vscode-docker - [Docker for VSCode](ms-azuretools.vscode-docker) поддержка Docker
- cweijan.vscode-redis-client - [Redis](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-redis-client) - UI клиент базы данных Redis для VSCode. В Sidebar появится возможность подключиться к БД Redis и просматривать записи.
- bradlc.vscode-tailwindcss - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - подсветка синтаксиса препроцессора Tailwindcss.
- Gruntfuggly.todo-tree - [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) - предоставляет возможность просматривать добавленные в код TODO списком

### Ручная сборка и запуск

Для начала нужно установить зависимости (для разработки)

```bash
npm install --include=dev
```

В термиале VSCode вы можете остановить автоматически запущенный сервис и выполнять сборку/запуск самостоятельно используя команды:

- `npm run dev` - сборка и запуск приложения
- `npm run build` - сборка приложения
- `npm run lint` - запуск линтера

## Конфигурация (.env)

Для конфигурации используется файл `.env` который необходимо создать в корне проекта.

Отсутствие файла `.env` на данный момент не критично, т.к значения по умолчанию, определяемые программно, подходят для среды разработки.
Но рекомендуется создать файл `.env` в корне проекта, можно использовать `.env.example`. Он также валиден для запуска среды разработки.

| Env. Variable | Default val | Description                                       |
| ------------- | ----------- | ------------------------------------------------- |
| REDIS_HOST    | redis       | Адрес Redis                                       |
| REDIS_PORT    | 6379        | Порт Redis                                        |
| REDIS_PW      |             | Пароль Redis                                      |
| REDIS_EX      | 86400       | Значение хранения записки по умолчанию (1 день)   |
| REDIS_EX_INF  | `false`     | Если указано `true` записка хранится до прочтения |

## Локализация

Файлы локализации находятся в папке `src/lang`.
Все файлы локализации, кроме `ru.json`, сгенерированы Chat GPT и представляют собой машинный перевод файла `ru.json`.

## Возможные проблемы

### Первый запуск

Первый запуск требует какое-то время. Приложение не будет доступно по адресу пока не закончится рендеринг. Можно следить за процессом в терминале (○ Compiling / ...) При первом запуске приложение может некорректно отображаться в браузере. Просто перезагрузите страницу. Проблема повторится только при следующей сборке.

### Проблемы с контейнерами среды разработки

Обычно проблем никаких нет, но возникали сложности которые решались пересборкой контейнеров из VSCode.
Предварительно можно удалить контейнеры `docker` компной `docker rm <container_id>` а также директории:

- node_modules
- .next

## Дополнительно

Ниже представлен список ссылок на документацию основных продуктов которые используются в проекте:

- [Next.js Documentation](https://nextjs.org/docs) - фреймворк для [React](https://react.dev/)
- [Next.UI Documentation](https://nextui.org/docs/) - UI Kit
- [Next.js internationalization (i18n)](https://next-intl-docs.vercel.app/docs/getting-started) - Библиотека для локализации
- [@lottiefiles/dotlottie-react](https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-react/) - Библиотека для воспроизведения анимаций [Lottie](https://lottiefiles.com/free-animations/svg)
- [Zod](https://zod.dev/) - Библиотека валидации форм
- [redis](https://redis.io/) - База данных приложения

### Развертывание на Vercel

Самый простой способ развернуть это приложение в production - использовать [платформу Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) от создателей Next.js.

[Документацию по развертыванию Next.js](https://nextjs.org/docs/deployment).
