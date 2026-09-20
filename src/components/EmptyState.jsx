function EmptyState() {
    return (
        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-2xl">
                📝
            </div>

            <h2 className="mt-5 text-lg font-semibold text-gray-900">
                No notes yet
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                Create your first note and start organizing your
                thoughts.
            </p>

            <button className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
                + Create Note
            </button>
        </div>
    )
}

export default EmptyState