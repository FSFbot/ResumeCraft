import { Input } from "../input";
type IconsInputProps = {
        value: string;
        onChange: (value: string) => void;
        placeholder?: string;
}
export const IconInput = ({value, onChange, placeholder}: IconsInputProps) => {
        return(
                <div className="flex items-center gap-2 ">
                        <div className="w-8 h-8 min-w-8 rounded-full bg-white p-1.5">
                                <img src={`https://cdn.simplesicons.org/${value}`} className="w-full h-full object-contain" />
                        </div>
                        <Input
                                value = {value}
                                onChange = {(e) => onChange(e.target.value)}
                                placeholder = {placeholder}
                        />
                </div>
        )
}