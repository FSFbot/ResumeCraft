import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { LogOut, SquareUser } from "lucide-react"
export const UserDropdown = () => {
        return (
                <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="w-full gap-2 justify-start px-2">
                                        <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>FF</AvatarFallback>
                                        </Avatar>
                                        <p>Felipe Freitas</p>
                                </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-[var(--radix-dropdaown-menu-trigger-width])">
                                <Link passHref href = "/dashbord/account">
                                <DropdownMenuItem className="gap-2">
                                        <SquareUser size={16}/> Acessar Conta
                                </DropdownMenuItem>
                                </Link>
                                <DropdownMenuItem className="gap-2">
                                        <LogOut size={16}/> Sair
                                </DropdownMenuItem>
                        </DropdownMenuContent>
                </DropdownMenu>
        )
}

