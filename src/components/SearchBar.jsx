function SearchBar() {
  return (
    <div className="relative hidden sm:block">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </span>

      <input
        type="text"
        placeholder="Search notes..."
        className="h-10 w-48 rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-10 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-gray-400 focus:bg-white md:w-64"
      />

      <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded bg-white px-1.5 py-0.5 text-xs text-gray-400 shadow-sm">
        /
      </span>
    </div>
  )
}

export default SearchBar