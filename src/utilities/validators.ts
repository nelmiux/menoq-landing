import { numberWithThousandSeparator, stringToNumber } from './formatter';

const requiredWithMessage = (message: string) => (value: string | number) =>
  (!value || !value.toString().trim().length) && message;

const required = (value: string | number) => requiredWithMessage('This field is required')(value);

const range = (value: string | number) => (min: number, max: number, message?: string) => {
  let v = typeof value === 'string' ? stringToNumber(value) : value;
  v = Number.isNaN(v) ? 0 : v;
  return (
    (v < min || v > max) &&
    (message || `Enter a value between ${numberWithThousandSeparator(min)} and ${numberWithThousandSeparator(max)}`)
  );
};

export type Validator = {
  required: string | boolean;
  range: (min: number, max: number, message?: string) => string | boolean;
};

export const validators = (value: string | number): Validator => ({
  required: required(value),
  range: range(value),
});
