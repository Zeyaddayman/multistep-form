import Image from "next/image"
import Links from "./Links"

const Navbar = async () => {
    return (
        <nav className="relative w-full lg:w-[274] h-[172px] lg:h-[568] rounded-lg">
            <Image
                src={"/images/bg-sidebar-desktop.svg"}
                alt="sidebar background"
                className="hidden lg:block absolute"
                priority
                width={568}
                height={172}
            />
            <Image
                src={"/images/bg-sidebar-mobile.svg"}
                alt="sidebar background"
                className="lg:hidden object-cover"
                fill
                priority
            />
            <Links />
        </nav>
    )
}

export default Navbar