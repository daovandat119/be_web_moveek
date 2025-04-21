import * as bcrypt from 'bcryptjs';
const dayjs = require('dayjs');

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (
  rawPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(rawPassword, hashedPassword);
};

const generateUnique6DigitCode = (): string => {
  const generatedCodes = new Set<string>();
  let code;
  do {
    code = Math.random().toString(36).substr(2, 6).toUpperCase();
  } while (generatedCodes.has(code));

  generatedCodes.add(code);
  return code;
};

export const generateVerificationCode = (expireMinutes = 1) => {
  return {
    codeId: generateUnique6DigitCode(),
    codeExpired: dayjs().add(expireMinutes, 'minute').toDate(),
  };
};

export const isCodeExpired = (expiredAt: Date | null): boolean => {
  if (!expiredAt) return true;
  return dayjs().isAfter(expiredAt);
};

export function isCodeStillValid(expiredAt: Date | null): boolean {
  if (!expiredAt) return true;
  return dayjs().isBefore(expiredAt);
}
