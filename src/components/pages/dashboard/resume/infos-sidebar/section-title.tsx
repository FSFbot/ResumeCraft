import { LucideIcon } from "lucide-react";
type SectionTitleProps = {
        icon:LucideIcon;
        title:string;
}
export const SectionTile = ({icon: Icon,title}: SectionTitleProps) => {
        return(
                <div className="flex items-center gap-2">
                        <Icon size={18} className = "text-muted-foreground"/>
                        <h3 className="text-2xl font-title font-bold "></h3>
                </div>
        );
}