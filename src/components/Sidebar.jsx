function Sidebar() {
    return (
        <aside className="hidden w-60 shrink-0 border-r border-gray-200 bg-white lg:block">
            <div className="sticky top-0 p-5">

                {/* Navigation */}
                <nav className="space-y-1">
                    <button className="flex w-full items-center justify-between rounded-lg bg-gray-100 px-3 py-2.5 text-sm font-medium text-gray-900">
                        <span className="flex items-center gap-3">
                            <span>📄</span>
                            All Notes
                        </span>

                        <span className="text-xs text-gray-500">12</span>
                    </button>

                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
                        <span>📌</span>
                        Pinned
                    </button>
                </nav>

                {/* Categories */}
                <div className="mt-8">
                    <div className="mb-3 flex items-center justify-between">
                        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                            Categories
                        </h2>

                        <button className="text-lg text-gray-400 hover:text-gray-900">
                            +
                        </button>
                    </div>

                    <div className="space-y-1">
                        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
                            <span className="h-2 w-2 rounded-full bg-blue-500" />
                            React
                            <span className="ml-auto text-xs text-gray-400">5</span>
                        </button>

                        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
                            <span className="h-2 w-2 rounded-full bg-yellow-500" />
                            JavaScript
                            <span className="ml-auto text-xs text-gray-400">3</span>
                        </button>

                        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
                            <span className="h-2 w-2 rounded-full bg-green-500" />
                            Personal
                            <span className="ml-auto text-xs text-gray-400">2</span>
                        </button>

                        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
                            <span className="h-2 w-2 rounded-full bg-purple-500" />
                            Work
                            <span className="ml-auto text-xs text-gray-400">2</span>
                        </button>
                    </div>
                </div>

            </div>
        </aside>
    )
}

export default Sidebar