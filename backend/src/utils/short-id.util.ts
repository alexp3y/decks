import { customAlphabet } from 'nanoid';

// no dashes or underscores
const alphabet =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_';

const nanoid = customAlphabet(alphabet, 12);

export function shortId(): string {
  return nanoid();
}
