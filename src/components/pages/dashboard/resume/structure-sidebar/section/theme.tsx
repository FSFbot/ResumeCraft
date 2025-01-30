import { Palette } from "lucide-react"
import { SectionTitle } from "../../infos-sidebar/section-title"
import colors from "tailwindcss/colors"
import { Controller, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const keytoIgnore = [
        "current",
        "inherit",
        "currentColor",
        "transparent",
        "black",
        "white",
]
const colorsKeys = Object.keys(colors).filter((key)=> !keytoIgnore.includes(key)) as (keyof typeof colors)[];
export const ThemeSection = () => {
        const { control } = useFormContext<ResumeData>();
        return(
                <div>
                    <SectionTitle title="Tema" icon={Palette}/> 
                    <Controller
                        control={control}
                        name = "structure.colorTheme"
                        render={({field}) => (
                                <div className="grid grid-cols-7 gap-4 mt-4">
                                        {colorsKeys.map(colorsKey => {
                                                const isSeleted = field.value === colorsKey;
                                                return(
                                                        <Button
                                                        key={colorsKey}
                                                        variant="ghost"
                                                        className= {cn(
                                                                "w-7 h-7 p-1 rounded-full transition-all",
                                                                isSeleted && "ring-2 ring-foreground"
                                                        )}
                                                        onClick={() => field.onChange(colorsKey)}
                                                        >
                                                         <div
                                                                className="w-full h-full rounded-full"
                                                                style={{backgroundColor: colors[colorsKey][500]}}
                                                         />       

                                                        </Button>
                                                )
                                        })}
                                </div>
                        )}
                    />   
                </div>
        )
}