import { cn } from "@/lib/utils";
import { Label } from "./label"
type FieldWrapperProps = {
    label:string,
    children: React.ReactNode;
    className?: string;
}
export const FieldWrapper = ({label,className ,children}: FieldWrapperProps) => {
    return(
        <div className= {cn("flex flex-col gap-2", className)}>
            <Label>{label}</Label>
            {children}
        </div>
    )
}