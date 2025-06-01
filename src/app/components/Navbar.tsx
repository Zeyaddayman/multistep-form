import Image from "next/image"
import Links from "./Links"

const Navbar = async () => {
    return (
        <nav className="relative w-full lg:w-[274] h-[172px] lg:h-[586] rounded-lg">
            <Image
                src={"/images/bg-sidebar-desktop.svg"}
                className="hidden lg:block"
                alt="sidebar background"
                fill
                priority
            />
            <Image
                src={"/images/bg-sidebar-mobile.svg"}
                className="lg:hidden object-cover"
                alt="sidebar background"
                fill
                priority
            />
            <Links />
        </nav>
    )
}

export default Navbar