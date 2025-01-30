import { Columns3 } from "lucide-react";
import { SectionTitle } from "../../infos-sidebar/section-title";
import { useFieldArray, useFormContext } from "react-hook-form";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import { LayoutDragList } from "../structure-sidebar/layout-drag-list";

export const LayoutSection = () => {
        const { control } = useFormContext<ResumeData>();
        const {
                fields: mainFields,
                move: moveMainFields,
                insert: insertMainFields,
                remove: removeMainFields
        } = useFieldArray({
                control,
                name: "structure.layout.mainSections"
        })
        const {
                fields: sidebarFields,
                move: moveSideFields,
                insert: insertSideFields,
                remove: removeSideFields
        } = useFieldArray({
                control,
                name: "structure.layout.sidebarSections"
        })
        const onDragEnd = ({ source, destination }: DropResult) => {
                if (!destination) return;
                if (source.droppableId !== destination.droppableId) {
                        switch (destination.droppableId) {
                                case "mainFields":
                                        insertMainFields(destination.index, sidebarFields[source.index]);
                                        removeSideFields(source.index);
                                        break;
                                case "sidebarFields":
                                        insertSideFields(destination.index, mainFields[source.index]);
                                        removeMainFields(source.index);
                                        break;
                        }
                        return;
                }
        }
                return (
                        <>
                                <SectionTitle title="Estrutura" icon={Columns3} />
                                <DragDropContext onDragEnd={onDragEnd}>
                                        <div className="grid grid-cols-2 gap-4 mt-4">
                                                <Droppable droppableId="mainFields">
                                                        {(provide) => (
                                                                <div ref={provide.innerRef} {...provide.droppableProps}>
                                                                        <LayoutDragList title="Princiapal" fields={mainFields} />
                                                                        {provide.placeholder}
                                                                </div>
                                                        )}
                                                </Droppable>
                                                <Droppable droppableId="sidebarFields">
                                                        {(provide) => (
                                                                <div ref={provide.innerRef} {...provide.droppableProps}>
                                                                        <LayoutDragList title="Barra Lateral" fields={sidebarFields} />
                                                                        {provide.placeholder}
                                                                </div>
                                                        )}
                                                </Droppable>
                                        </div>
                                </DragDropContext>
                        </>
                )
 };