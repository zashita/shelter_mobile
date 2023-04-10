import { HttpException, HttpStatus } from '@nestjs/common';

interface ToNumberOptions {
  default?: number;
  min?: number;
  max?: number;
}

export function transformToNumberUtil(
  value: string,
  opts: ToNumberOptions = {},
): number {
  if (/[^0-9$.,]/g.test(value)) {
    throw new HttpException(
      `Value ${value} cannot be converted to number.`,
      HttpStatus.CONFLICT,
    );
  }

  let newValue: number = Number.parseFloat(value || String(opts.default));

  if (Number.isNaN(newValue)) {
    newValue = opts.default;
  }

  if (opts.min) {
    if (newValue < opts.min) {
      newValue = opts.min;
    }

    if (newValue > opts.max) {
      newValue = opts.max;
    }
  }

  return newValue;
}
