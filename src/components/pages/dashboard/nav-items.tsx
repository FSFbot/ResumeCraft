"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Ghost, Icon, Newspaper, SquareUser } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import path from "path"

export const NavItem = () => {
        const pathname = usePathname();
        const navItems = [
                {
                        label: "Curriculos",
                        icon: Newspaper,
                        path: "/dashboard/resumes"
                },
                {
                        label: "Configuraçoes de Conta",
                        Icon: SquareUser,
                        path: "/dashboard/account"
                }
        ]
        return (
                <nav className="w-full flex flex-col gap-2 px-2 py-4">
                        {navItems.map((item) => {
                                const isActive = pathname.startsWith(item.path)
                                return (
                                        <Link key={item.path} href={item.path}>
                                                <Button
                                                        variant="ghost"
                                                        className={cn("w-full gap-2 justify-start",
                                                                isActive && "bg-accent"
                                                        )

                                                        }

                                                >
                                                        {item.label}

                                                </Button>
                                        </Link>
                                )
                        })}
                </nav>
        )
}