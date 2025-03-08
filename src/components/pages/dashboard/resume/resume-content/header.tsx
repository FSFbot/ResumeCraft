import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"
import { Copy, Download, Home, Link, Trash } from "lucide-react"

export const NavigationHeader = () => {
    return (
        <header className="absolute w-full left-0 top-0 z-10 p-2 bg-background border=b border-muted flex items-center justify-between gap-2">
            <div>
                <Tooltip content="Voltar ao Painel Principal">
                    <Link href="/dashboard/resume">
                        <Button
                            variant="secondary"
                            size="icon"
                            className="w-8 h-8 bg-transparent"
                        >
                            <Home size={18} />
                        </Button>
                    </Link>
                </Tooltip>
                <span className="text-muted-foreground">/</span>
                <p className="text-lg font-title font-bold ml-1">Titulo do Curriculo</p>
            </div>
            <div className="flex gap-1">
                <Tooltip content="Deletar Curriculo">
                    <Button variant="secondary"
                        className="w-8 h-8 bg-transparent"
                        size={"icon"}>

                    </Button>
                    <Trash size={18} />
                </Tooltip>
                <Tooltip content="Duplicar Curriculo">
                    <Button variant="secondary"
                        className="w-8 h-8 bg-transparent"
                        size={"icon"}>

                    </Button>
                    <Copy size={18} />
                </Tooltip>
                <Tooltip content="Baixar PDF">
                    <Button variant="secondary"
                        className="w-8 h-8 bg-transparent"
                        size={"icon"}>
                    </Button>
                    <Download size={18} />
                </Tooltip>
            </div>
        </header>
    )
}