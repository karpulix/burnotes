// import { getRequestConfig } from "next-intl/server";

// export default getRequestConfig(async () => {
//   // Provide a static locale, fetch a user setting,
//   // read from `cookies()`, `headers()`, etc.
//   const locale = "en";

//   return {
//     locale,
//     messages: (await import(`@/lang/${locale}.json`)).default,
//   };
// });

// ------

// import {notFound} from 'next/navigation';
// import {getRequestConfig} from 'next-intl/server';
// import {locales} from '@/configs/locales';

// export default getRequestConfig(async ({locale}) => {
//   // Validate that the incoming `locale` parameter is valid
//   if (!locales.includes(locale as any)) notFound();

//   return {
//     messages: (
//       await (locale === 'en'
//         ? // When using Turbopack, this will enable HMR for `en`
//           import('@/lang/en.json')
//         : import(`@/lang/${locale}.json`))
//     ).default
//   };
// });

// ----

import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "./services/locale";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`@/lang/${locale}.json`)).default,
  };
});
