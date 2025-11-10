import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function InputField({
  name,
  label,
  placeholder,
  register,
  type = "text",
  error,
  validation,
  disabled = false,
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={cn("form-input", {
          "opacity-50 cursor-not-allowed": disabled,
          "border-red-500 focus-visible:ring-red-500": error,
        })}
        {...register(name, validation)}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}

export default InputField;
