import { Palette } from "lucide-react"
import { SectionTitle } from "../../infos-sidebar/section-title"
import colors from "tailwindcss/colors"
import { Controller, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { use, useCallback, useEffect } from "react";

const keytoIgnore = [
        "current",
        "inherit",
        "currentColor",
        "transparent",
        "black",
        "white",
]
const colorsKeys = Object.keys(colors).filter((key) => !keytoIgnore.includes(key)) as (keyof typeof colors)[];
export const ThemeSection = () => {
        const { control, watch } = useFormContext<ResumeData>();

        const currentColortheme = watch("structure.colorTheme");

        const handleSetCssVariable = useCallback(() => {
                if (!currentColortheme) return;

                const colorKey = currentColortheme as keyof typeof colors
                document.documentElement.style.setProperty(
                        "--resume-primay",
                        colors[colorKey][500]
                )
        }, [currentColortheme])

        useEffect(() => {
                handleSetCssVariable();
        },[handleSetCssVariable])
        return (
                <div>
                        <SectionTitle title="Tema" icon={Palette} />
                        <Controller
                                control={control}
                                name="structure.colorTheme"
                                render={({ field }) => (
                                        <div className="grid grid-cols-7 gap-4 mt-4">
                                                {colorsKeys.map(colorsKey => {
                                                        const isSeleted = field.value === colorsKey;
                                                        return (
                                                                <Button
                                                                        key={colorsKey}
                                                                        variant="ghost"
                                                                        className={cn(
                                                                                "w-7 h-7 p-1 rounded-full transition-all",
                                                                                isSeleted && "ring-2 ring-foreground"
                                                                        )}
                                                                        onClick={() => field.onChange(colorsKey)}
                                                                >
                                                                        <div
                                                                                className="w-full h-full rounded-full"
                                                                                style={{ backgroundColor: colors[colorsKey][500] }}
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