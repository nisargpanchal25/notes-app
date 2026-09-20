function MobileNav() {
  return (
    <div className="border-b border-gray-200 bg-white lg:hidden">
      <div className="flex gap-2 overflow-x-auto p-3">
        <button className="shrink-0 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white">
          All Notes
        </button>

        <button className="shrink-0 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
          📌 Pinned
        </button>

        <button className="shrink-0 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
          React
        </button>

        <button className="shrink-0 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
          JavaScript
        </button>

        <button className="shrink-0 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
          Personal
        </button>

        <button className="shrink-0 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
          Work
        </button>
      </div>
    </div>
  )
}

export default MobileNav