import React from "react"
import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="w-72 bg-blue-900 text-white">
      <nav>
        <h1 className="text-2xl text-white text-center my-4">ESC Admin</h1>
        <ul>
          <li className="text-center my-6">
            Members
          </li>
          <li className="text-center my-6 hover:bg-blue-600">
            <Link href="/admin/events">
              Events
            </Link>
          </li>
          <li className="text-center my-6">
            Resolutions
          </li>
          <li className="text-center my-6">
            Provincical Acts
          </li>
          <li className="text-center my-6">
            Financial Reports
          </li>
          <li className="text-center my-6">
            Accomplishment Report
          </li>
        </ul>
      </nav>
    </aside>
  )
}