import NoteCard from './NoteCard'

function NotesList({ notes, selectedNoteId, onSelectNote }) {
    return (
        <div className="mt-6 space-y-3">
            {notes.map((note) => (
                <div
                    key={note.id}
                    onClick={() => onSelectNote(note.id)}
                    className="cursor-pointer"
                >
                    <NoteCard
                        note={note}
                        isActive={note.id === selectedNoteId}
                    />
                </div>
            ))}
        </div>
    )
}

export default NotesList




// Now NotesList receives everything through props:

// App
//  │
//  │ notes
//  │ selectedNoteId
//  │ onSelectNote
//  ↓
// NotesList