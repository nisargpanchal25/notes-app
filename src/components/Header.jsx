import SearchBar from './SearchBar'

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900 text-base sm:h-10 sm:w-10 sm:text-lg">
            📝
          </div>

          <div>
            <h1 className="text-base font-bold text-gray-900 sm:text-lg">
              Notes
            </h1>

            <p className="hidden text-xs text-gray-500 sm:block">
              Organize your thoughts
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <SearchBar />

          <button
            className="flex h-9 items-center gap-2 rounded-lg bg-gray-900 px-3 text-sm font-medium text-white transition hover:bg-gray-800 sm:h-10 sm:px-4"
          >
            <span className="text-lg leading-none">+</span>

            <span className="hidden sm:inline">
              New Note
            </span>
          </button>
        </div>

      </div>
    </header>
  )
}

export default Header