import { Label } from "@radix-ui/react-dropdown-menu"
import { ReactNode } from "react";
type FieldWrapperProps = {
        label:string;
        children: ReactNode
}
export const FieldWrapper = ({label, children}: FieldWrapperProps) => {
        return(
              <div className="flex flex-col gap-2">
                      <Label>{label}</Label>
                      {children}
              </div>  
        )
}