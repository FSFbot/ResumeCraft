import { Plus } from "lucide-react"
import { ResumeCardButton } from "./resume-card"

export const  AddResumeButton = () => {
    return(
        <ResumeCardButton
          title="Criar Curriculo"
          description="Crie um curriculo do zero ou use um modelo"  
          icon={<Plus size={50}/>}
        />
    )
}