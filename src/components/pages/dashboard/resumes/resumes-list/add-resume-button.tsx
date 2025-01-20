import { Plus } from "lucide-react"
import { ResumeCardButton } from "./resume-card"

export const AddResuemButton = () => {
        return(
                <ResumeCardButton
                        title="Criar novo curriculo"
                        description="Comece do zero"
                        icon= {<Plus size={50}/>}
                />
        )

}