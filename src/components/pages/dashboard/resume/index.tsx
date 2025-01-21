"use client"
import {
        ResizableHandle,
        ResizablePanel,
        ResizablePanelGroup,
} from "@/components/ui/resizable"
import { InfosSidebar } from "./infos-sidebar"
import { ResumeContent } from "./resume-content"
import { StructureSidebar } from "./structure-sidebar"
import { FormProvider, useForm } from "react-hook-form"
import { ResumeData } from "@/@types/types"

export const ResumePage = () => {
        const defaultValues: ResumeData = {
                content: {
                        image: {
                              url: "escreva aqui a url da sua foto",
                              visible: true  
                        },
                        infos: {
                                email: "",
                                fullName: "",
                                headline: "",
                                location: "",
                                phone: "",
                                website: ""
                        }
                }
        }
        const methods = useForm<ResumeData>({defaultValues});
        return (
                <main className="w-full h-screen overflow-hidden">
                        <FormProvider {...methods}>
                                <ResizablePanelGroup direction="horizontal" className="w-full h-full">
                                        <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
                                                <InfosSidebar />
                                        </ResizablePanel>
                                        <ResizableHandle withHandle />

                                        <ResizablePanel>
                                                <ResumeContent />
                                        </ResizablePanel>
                                        <ResizableHandle withHandle />

                                        <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
                                                <StructureSidebar />
                                        </ResizablePanel>
                                        <ResizableHandle />
                                </ResizablePanelGroup>
                        </FormProvider>

                </main>
        )
}