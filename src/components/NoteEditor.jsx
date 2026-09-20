import { useEffect, useState } from 'react'

function NoteEditor({ note }) {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [content, setContent] = useState('')

    // Sync editor state whenever selected note changes
    useEffect(() => {
        if (!note) return

        setTitle(note.title)
        setCategory(note.category)
        setContent(note.content)
    }, [note])

    if (!note) {
        return (
            <div className="flex h-full min-h-[calc(100vh-64px)] items-center justify-center bg-white">
                <p className="text-sm text-gray-400">
                    Select a note to start editing
                </p>
            </div>
        )
    }

    return (
        <section className="flex h-full min-h-[calc(100vh-64px)] flex-col bg-white">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                        Editing Note
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                        {note.updatedAt}
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <button className="rounded-lg px-3 py-2 text-sm text-gray-500 transition hover:bg-gray-100 hover:text-gray-900">
                        Delete
                    </button>

                    <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
                        Save
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">

                {/* Title */}
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Note title..."
                    className="w-full border-none bg-transparent text-3xl font-bold text-gray-900 outline-none placeholder:text-gray-300"
                />

                {/* Category */}
                <div className="mt-4 flex items-center gap-3">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600 outline-none focus:border-gray-400"
                    >
                        <option>React</option>
                        <option>JavaScript</option>
                        <option>Personal</option>
                        <option>Work</option>
                    </select>

                    <span className="text-xs text-gray-400">
                        Markdown
                    </span>
                </div>

                <div className="my-6 border-t border-gray-100" />

                {/* Content */}
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Start writing your note..."
                    className="min-h-[420px] w-full resize-none border-none bg-transparent text-base leading-7 text-gray-700 outline-none placeholder:text-gray-300"
                />

            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 px-6 py-3">
                <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Markdown supported</span>

                    <span>
                        {content.length} characters
                    </span>
                </div>
            </div>

        </section>
    )
}

export default NoteEditor