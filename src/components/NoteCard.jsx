function NoteCard({ note, isActive = false }) {
    return (
        <article
            className={`group cursor-pointer rounded-xl border bg-white p-4 transition-all ${isActive
                    ? 'border-gray-400 shadow-sm'
                    : 'border-gray-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm'
                }`}
        >
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <h3 className="truncate font-semibold text-gray-900">
                        {note.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                        {note.preview}
                    </p>
                </div>

                {note.isPinned && (
                    <span className="shrink-0 text-sm opacity-70 transition group-hover:opacity-100">
                        📌
                    </span>
                )}
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
                <span className="shrink-0 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                    {note.category}
                </span>

                <span className="truncate text-xs text-gray-400">
                    {note.updatedAt}
                </span>
            </div>
        </article>
    )
}

export default NoteCard