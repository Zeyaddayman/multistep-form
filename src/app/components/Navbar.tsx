import Image from "next/image"
import Links from "./Links"

const Navbar = async () => {

    return (
        <nav className="relative w-full md:w-[274] h-[172px] md:h-[586] rounded-lg">
            <Image
                src={"/images/bg-sidebar-desktop.svg"}
                className="hidden md:block object-cover"
                alt="sidebar background"
                fill
            />
            <Image
                src={"/images/bg-sidebar-mobile.svg"}
                className="md:hidden object-cover"
                alt="sidebar background"
                fill
            />
            <Links />
        </nav>
    )
}

export default Navbar