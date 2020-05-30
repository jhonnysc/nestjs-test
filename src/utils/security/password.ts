import { InvalidPassword } from '@app/utils/exceptions';

const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

export function throwIfIsInvalidPassword(password: string) {
  if (!password.match(passwordRegex)) throw new InvalidPassword();
}
