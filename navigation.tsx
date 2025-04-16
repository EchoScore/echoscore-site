"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <ul className="flex items-center gap-6">
        <li>
          <Link
            href="/developer"
            className="text-[#00F0FF] font-semibold hover:text-[#66FCF1] transition"
          >
            dev
          </Link>
        </li>
        <li>
          <Link
            href="/investor"
            className="text-[#00F0FF] font-semibold hover:text-[#66FCF1] transition"
          >
            invest
          </Link>
        </li>
      </ul>
    </nav>
  )
}
