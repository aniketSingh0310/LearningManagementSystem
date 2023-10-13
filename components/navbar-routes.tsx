"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavbarRoute = () => {
    const pathname = usePathname();
    const router= useRouter();

    const isTeacherPage= pathname?.startsWith("/teacher");
    const isPlayerPage=pathname?.includes("/chapter");
    return ( 
        <div className="flex gap-x-2 justify-end ml-auto">
    { isTeacherPage || isPlayerPage ?(
        <Link href="/">
        <Button size="sm" variant="ghost">
            <LogOut className="w-4 h-4 mr-2"/>
            Log Out
        </Button>
        </Link>
        ):(
            <Link href="/teacher/courses">
            <Button size="sm" variant="ghost">Teacher Mode</Button>
            
            </Link>

    )
        
    }
        <UserButton afterSignOutUrl="/"/>
        </div>
     );
}
 
export default NavbarRoute;