"use client"

import Link from 'next/link'
import { LINKS } from '../constants'
import { usePathname } from 'next/navigation'

const Links = () => {

    const pathname = usePathname()

    return (
        <ul className="flex flex-row lg:flex-col gap-6 mt-5 uppercase p-4 relative z-10 justify-center lg:justify-start">
            {LINKS.map((link) => (
                <li key={link.name}>
                    <Link
                        href={link.pathname}
                        className="flex gap-4 items-center cursor-pointer"
                    >
                        <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border border-white
                            ${link.pathname === pathname ? "bg-light-blue text-marine-blue" : "text-white"}`} >

                            {link.order}
                        </span>
                        <p className="hidden lg:block">
                            <span className="text-pastel-blue text-sm">
                                {`step ${link.order}`}
                            </span>
                            <br />
                            <span className="text-white font-medium">
                                {link.name}
                            </span>
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Links