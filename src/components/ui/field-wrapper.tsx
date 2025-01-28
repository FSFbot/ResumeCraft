import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-dropdown-menu"
import { ReactNode } from "react";
import { FieldError } from "react-hook-form";
type FieldWrapperProps = {
        label:string;
        children: ReactNode;
        className?: string;
        error?: FieldError 
}
export const FieldWrapper = ({label,className ,children}: FieldWrapperProps) => {
        return(
              <div className= {cn("flex flex-col gap-2", className)}>
                      <Label>{label}</Label>
                      {children}
              </div>  
        )
}