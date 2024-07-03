import * as crypto from "crypto";

const algorithm = "aes-256-ecb";

const generateKey = function () {
  const bytes = crypto.randomBytes(8);
  return bytes.toString("hex");
};

const generateRandomString = function (length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";

  // Generate a buffer with random bytes
  const randomBytes = crypto.randomBytes(length);

  // Convert each byte to a character from the characters string
  for (let i = 0; i < length; i++) {
    const randomValue = randomBytes[i] % charactersLength;
    result += characters.charAt(randomValue);
  }
  return result;
};

const encrypt = function (text: string, keyString: string): string {
  const key = crypto.createHash("sha256").update(keyString).digest();
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, Buffer.alloc(0));
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

const decrypt = function (encrypted: string, keyString: string): string {
  const key = crypto.createHash("sha256").update(keyString).digest();
  const iv = crypto.randomBytes(16);
  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.alloc(0));
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

export { encrypt, decrypt, generateRandomString, generateKey };
