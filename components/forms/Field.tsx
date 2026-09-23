import type { ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const control =
  "w-full rounded-xs border bg-surface px-4 py-3 text-[0.9375rem] text-body " +
  "transition-colors placeholder:text-faint focus:outline-none " +
  "focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-burgundy";

const controlState = (invalid: boolean) =>
  invalid ? "border-burgundy" : "border-field hover:border-ink";

interface FieldShellProps {
  readonly id: string;
  readonly label: string;
  readonly hint?: string;
  readonly error?: string;
  readonly optional?: boolean;
  /** The word itself, so a translated form does not say "Optional" in English. */
  readonly optionalLabel?: string;
  readonly children: ReactNode;
  readonly className?: string;
}

export function FieldShell({
  id,
  label,
  hint,
  error,
  optional,
  optionalLabel = "Optional",
  children,
  className,
}: FieldShellProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="eyebrow flex items-baseline gap-2 text-muted">
        {label}
        {optional ? <span className="text-[0.5625rem] text-faint">{optionalLabel}</span> : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="text-micro leading-relaxed text-faint">
          {hint}
        </p>
      ) : null}
      {children}
      <p
        id={`${id}-error`}
        role={error ? "alert" : undefined}
        className={cn("text-micro text-burgundy", !error && "sr-only")}
      >
        {error ?? ""}
      </p>
    </div>
  );
}

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "id"> &
  Omit<FieldShellProps, "children">;

export function TextField({
  id,
  label,
  hint,
  error,
  optional,
  optionalLabel,
  className,
  ...input
}: TextFieldProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      hint={hint}
      error={error}
      optional={optional}
      optionalLabel={optionalLabel}
      className={className}
    >
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={cn(hint && `${id}-hint`, error && `${id}-error`) || undefined}
        className={cn(control, controlState(Boolean(error)))}
        {...input}
      />
    </FieldShell>
  );
}

type TextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className" | "id"> &
  Omit<FieldShellProps, "children">;

export function TextArea({
  id,
  label,
  hint,
  error,
  optional,
  optionalLabel,
  className,
  ...textarea
}: TextAreaProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      hint={hint}
      error={error}
      optional={optional}
      optionalLabel={optionalLabel}
      className={className}
    >
      <textarea
        id={id}
        rows={5}
        aria-invalid={error ? true : undefined}
        aria-describedby={cn(hint && `${id}-hint`, error && `${id}-error`) || undefined}
        className={cn(control, controlState(Boolean(error)), "resize-y")}
        {...textarea}
      />
    </FieldShell>
  );
}

/**
 * An option's stored value and its visible label, which are not the same
 * thing once the form exists in six languages: the value written to the
 * database is a language-independent id, the label is what this reader sees.
 */
export interface SelectOption {
  readonly value: string;
  readonly label: string;
}

type SelectFieldProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "className" | "id"> &
  Omit<FieldShellProps, "children"> & {
    readonly options: readonly SelectOption[];
    readonly placeholder?: string;
  };

export function SelectField({
  id,
  label,
  hint,
  error,
  optional,
  optionalLabel,
  className,
  options,
  placeholder = "Select…",
  ...select
}: SelectFieldProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      hint={hint}
      error={error}
      optional={optional}
      optionalLabel={optionalLabel}
      className={className}
    >
      <select
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={cn(hint && `${id}-hint`, error && `${id}-error`) || undefined}
        className={cn(
          control,
          controlState(Boolean(error)),
          // The native control is replaced with a chevron drawn in the palette.
          "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22 fill=%22none%22 stroke=%22%236A6963%22 stroke-width=%221.4%22><path d=%22M4 6.5l4 4 4-4%22/></svg>')] bg-[length:16px_16px] bg-[position:right_1rem_center] bg-no-repeat pr-11",
        )}
        {...select}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

interface CheckboxFieldProps {
  readonly id: string;
  readonly name: string;
  /** Omit both to leave the box uncontrolled, as a plain form submission wants. */
  readonly checked?: boolean;
  readonly onChange?: (checked: boolean) => void;
  readonly value?: string;
  readonly required?: boolean;
  readonly error?: string;
  readonly children: ReactNode;
}

export function CheckboxField({
  id,
  name,
  checked,
  onChange,
  value,
  required,
  error,
  children,
}: CheckboxFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-3">
        <input
          id={id}
          name={name}
          type="checkbox"
          value={value}
          required={required}
          {...(checked === undefined
            ? {}
            : { checked, onChange: (event) => onChange?.(event.target.checked) })}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "mt-0.5 size-4 shrink-0 appearance-none rounded-xs border bg-surface",
            "checked:border-ink checked:bg-ink",
            "checked:bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22 fill=%22none%22 stroke=%22%23F4F1E8%22 stroke-width=%222.2%22><path d=%22M3.5 8.5l3 3 6-7%22/></svg>')] checked:bg-center checked:bg-no-repeat",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy",
            error ? "border-burgundy" : "border-field",
          )}
        />
        <label htmlFor={id} className="text-[0.875rem] leading-relaxed text-body/90">
          {children}
        </label>
      </div>
      <p
        id={`${id}-error`}
        role={error ? "alert" : undefined}
        className={cn("text-micro text-burgundy", !error && "sr-only")}
      >
        {error ?? ""}
      </p>
    </div>
  );
}
