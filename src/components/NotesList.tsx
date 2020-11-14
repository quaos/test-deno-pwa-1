import { React, ReactFC } from "../deps/react.ts";

import { useServiceWorker } from "../context/service-worker.tsx";
import { Note } from "../models/Note.ts";
import { CacheUpdatedMessage, MessageTypes } from "../service-worker/messages.ts";

export interface NotesListProps {
}

export const NotesList: ReactFC<NotesListProps> = ({ }) => {
  const [notes, setNotes] = React.useState<Note[]>([]);

  async function dispatchReload() {
    const resp = await fetch("/api/notes.json", { });
    console.log("fetch() response:",resp);
    setNotes(await resp.json() as Note[])
  }

  React.useEffect(() => {
    dispatchReload().catch(console.error);

    // Cleanup
    return () => {
    }
  }, []);

  const { messagesDispatcher } = useServiceWorker();
  messagesDispatcher.on(MessageTypes.CacheUpdated, (evt: CacheUpdatedMessage) => {
    console.log("Got CacheUpdatedMessage event:", evt);
    // TODO: Refetch with debouncing
  });

  return (
    <div className="notes-list-container">
      <h1>Notes</h1>
      <ul className="note-list">
        {notes.map((note: Note) => (
          <NoteListItem key={`${note.id}`} note={note}></NoteListItem>
        ))}
      </ul>
    </div>
  )
};


export interface NoteListItemProps {
  note: Note,
}

export const NoteListItem: ReactFC<NoteListItemProps> = ({ note }) => {
  return (
    <li className="note-list-item">
      <div className="note-list-item-inner">
        <h2>{note.title}</h2>
        <p>{note.description}</p>
      </div>
    </li>
  )
};
