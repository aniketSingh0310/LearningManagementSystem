import NavbarRoute from "@/components/navbar-routes";
import MobileSidebar from "./mobile-sidebar";


export const Navbar = () => {
    return (  
        <div className="p-4 border-b h-full items-center bg-white shadow-sm">
          <MobileSidebar/>
          <NavbarRoute/>
        </div>
    );
}
 
