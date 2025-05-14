import { Divide } from "lucide-react";
import { Input } from "./index";
import { Component, ComponentProps } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FieldWrapper } from "../field-wrapper";

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
  conteinerClassName?: string;
};

export const InputField = ({ label, name,required,conteinerClassName ,...props }: InputFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules = {{required: required && "Campo obrigatório"}}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} className={conteinerClassName}>
          <Input {...props} {...field} />
          {fieldState.error && (
            <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
          )}
        </FieldWrapper>
      )}
    />
  );
};
