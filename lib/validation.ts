/**
 * Form validation.
 *
 * Deliberately hand-written rather than pulled from a schema library: the rules
 * are few, they are the only place the site collects personal data, and they
 * should be readable without knowing a third-party API.
 */

export type Errors<T> = Partial<Record<keyof T, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function required(value: string, field: string): string | undefined {
  return value.trim().length === 0 ? `${field} is required.` : undefined;
}

export function maxLength(value: string, limit: number, field: string): string | undefined {
  return value.length > limit ? `${field} must be ${limit} characters or fewer.` : undefined;
}

export function minLength(value: string, limit: number, field: string): string | undefined {
  return value.trim().length > 0 && value.trim().length < limit
    ? `${field} must be at least ${limit} characters.`
    : undefined;
}

export function email(value: string): string | undefined {
  if (value.trim().length === 0) return "An email address is required.";
  return EMAIL.test(value.trim()) ? undefined : "Enter a valid email address.";
}

/** Returns the first error produced by the checks, if any. */
export function firstError(
  ...checks: readonly (string | undefined)[]
): string | undefined {
  return checks.find((check) => check !== undefined);
}

export function hasErrors<T>(errors: Errors<T>): boolean {
  return Object.values(errors).some((value) => value !== undefined);
}
