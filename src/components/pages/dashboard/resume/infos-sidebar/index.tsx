import Link from "next/link";
import  Logo  from "@/assets/logo.svg";
import { AIGenerationDropdown } from "./ai-generation-dropdown";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { BasicInfoSection } from "./sections/basic-info";
import { SummarySection } from "./sections/summary";
import { MultiplesSections } from "./sections/multiples";
export  const InfosSidebar = () => {
        return(
                <aside className="w-full h-full p-6 overflow-y-auto">
                        <div className="w-full flex items-center justify-between">
                                <Link href="/dashbord/resume">
                                        <Logo></Logo>
                                </Link>
                                <AIGenerationDropdown/>
                        </div>
                        <Separator className="my-5"/>
                        <BasicInfoSection/>
                        <Separator className="my-5"/>
                        <SummarySection/>
                        <MultiplesSections/>
                </aside>
        );
}