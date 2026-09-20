import { useState } from 'react'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import NotesList from './components/NotesList'
import NoteEditor from './components/NoteEditor'

const initialNotes = [
  {
    id: 1,
    title: 'React Custom Hooks',
    category: 'React',
    preview:
      'Custom hooks allow us to reuse stateful logic between components.',
    content:
      '# Custom Hooks\n\nCustom hooks allow us to reuse stateful logic between components.\n\n## Why use custom hooks?\n\n- Reuse logic\n- Keep components clean\n- Separate concerns',
    updatedAt: '10 min ago',
    isPinned: true,
  },
  {
    id: 2,
    title: 'JavaScript Array Methods',
    category: 'JavaScript',
    preview:
      'map, filter, reduce, find and some other useful array methods.',
    content:
      '# JavaScript Array Methods\n\nmap, filter, reduce and find are some of the most useful array methods.',
    updatedAt: '1 hour ago',
    isPinned: false,
  },
  {
    id: 3,
    title: 'Project Ideas',
    category: 'Personal',
    preview:
      'Build a weather app, expense tracker and notes application.',
    content:
      '# Project Ideas\n\nBuild a weather app, expense tracker and notes application.',
    updatedAt: 'Yesterday',
    isPinned: false,
  },
  {
    id: 4,
    title: 'React Performance',
    category: 'React',
    preview:
      'Understanding memoization, useMemo and useCallback.',
    content:
      '# React Performance\n\nUnderstanding memoization, useMemo and useCallback.',
    updatedAt: '2 days ago',
    isPinned: false,
  },
]

function App() {
  const [notes, setNotes] = useState(initialNotes)

  const [selectedNoteId, setSelectedNoteId] = useState(initialNotes[0].id)

  const selectedNote = notes.find(
    (note) => note.id === selectedNoteId
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <MobileNav />

      <div className="flex min-h-[calc(100vh-64px)]">
        <Sidebar />

        <main className="grid min-w-0 flex-1 grid-cols-1 lg:grid-cols-[minmax(320px,0.9fr)_minmax(450px,1.3fr)]">

          {/* Notes List */}
          <section className="min-w-0 border-r border-gray-200 p-4 sm:p-6">
            <div className="mx-auto max-w-xl">

              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    All Notes
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {notes.length} notes
                  </p>
                </div>

                <button className="text-sm text-gray-500 hover:text-gray-900 lg:hidden">
                  Filter
                </button>
              </div>

              <NotesList
                notes={notes}
                selectedNoteId={selectedNoteId}
                onSelectNote={setSelectedNoteId}
              />
            </div>
          </section>

          {/* Editor */}
          <div className="hidden min-w-0 lg:block">
            {selectedNote && (
              <NoteEditor
                key={selectedNote.id}
                note={selectedNote}
              />
            )}
          </div>

        </main>
      </div>
    </div>
  )
}

export default App




// That's going to become a problem because eventually:

// NotesList needs the notes
// NoteEditor needs the selected note
// Search needs the notes
// Categories need the notes
// Delete/update need the notes

// So the App component should own the main notes state.