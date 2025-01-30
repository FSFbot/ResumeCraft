import { Separator } from "@/components/ui/separator"
import { TemplatesListSection } from "./section/templates-list"
import { LayoutSection } from "./section/layaout"
import { ThemeSection } from "./section/theme"
import { LanguageSection } from "./section/languages"

export const StructureSidebar = () => {
        return(
                <aside className="w-full h-full p-6 overflow-y-auto">
                        <TemplatesListSection/>
                        <Separator className="my-5 "/>
                        <LayoutSection/>
                        <Separator className="my-5 "/>
                        <ThemeSection/>
                        <Separator className="my-5 "/>
                        <LanguageSection/>

                </aside>
        )
}