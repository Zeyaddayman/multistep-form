"use client"

import { LINKS } from '../constants'
import { usePathname, useRouter } from 'next/navigation'
import { ILink } from '../interfaces'

const Links = () => {

    const pathname = usePathname()
    const router = useRouter()

    const handleChange = (link: ILink) => {
        if (pathname === link.pathname) return

        router.push(link.pathname)
    }

    return (
        <ul className="flex flex-row md:flex-col gap-6 mt-5 uppercase p-4 relative z-10 justify-center md:justify-start">
            {LINKS.map((link) => (
                <li onClick={() => handleChange(link)} key={link.name} className="flex gap-4 items-center cursor-pointer">
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border border-white
                        ${link.pathname === pathname ? "bg-light-blue text-marine-blue" : "text-white"}`} >

                        {link.order}
                    </span>
                    <p className="hidden md:block">
                        <span className="text-pastel-blue text-sm">
                            {`step ${link.order}`}
                        </span>
                        <br />
                        <span className="text-white font-medium">
                            {link.name}
                        </span>
                    </p>
                </li>
            ))}
        </ul>
    )
}

export default Links