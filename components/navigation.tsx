"use client"

import Link from "next/link"

export function Navigation() {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center border-b">
      <Link href="/" className="text-xl font-bold text-[#0087C7]">
        EchoScore
      </Link>
      <div className="space-x-4">
        <Link href="/developer" className="hover:underline">
          Developer
        </Link>
        <Link href="/investor" className="hover:underline">
          Investor
        </Link>
      </div>
    </nav>
  )
}
