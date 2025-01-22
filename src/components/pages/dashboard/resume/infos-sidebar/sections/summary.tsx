import { ScrollText } from "lucide-react";
import { SectionTile } from "../section-title";
import { Controller, useFormContext } from "react-hook-form";
import { text } from "stream/consumers";
import { Editor } from "@/components/ui/editor";


export const SummarySection = () => {
        const { control } = useFormContext();
        return (
                <div>
                        <SectionTile title="Resumo" icon={ScrollText} />
                        <Controller
                                control={control}
                                name="content.summary"
                                render={({ field }) => (
                                        <Editor {...field}/>
                                )}
                        />

                </div>
        );
}