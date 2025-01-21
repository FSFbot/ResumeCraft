import {Controller, useFormContext} from "react-hook-form";
import {ComponentProps} from "react";
import {Input} from "./index";
import { FieldWrapper } from "../field-wrapper";


type InputFieldProps = ComponentProps<typeof Input> &  {
    label: string;
    name: string;
    constainerClassName?: string;
}
export const InputField = ({label, name,required,constainerClassName, ...props}:InputFieldProps) =>{
    const {control} = useFormContext();
    return(
        <Controller
            control={control}
            name={name}
            rules= {{
                required: required && "Campo obrigatório",
            }}
            render={({field, fieldState}) => (
                <FieldWrapper label={label} className={constainerClassName}>
                    <Input {...props} {...field}/>
                    {fieldState.error &&(
                        <p className="text-sm text-red-500">
                            {fieldState.error.message}
                        </p>
                    )}
                </FieldWrapper>
            )}
        />
    )
};