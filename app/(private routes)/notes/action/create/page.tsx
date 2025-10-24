import css from "./createNote.module.css"
import NoteForm from "@/components/NoteForm/NoteForm"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Note",
  description: "Create your own note",
  openGraph: {
    title: `Create Note`,
    description: "Create your own Note",
    url: `https://08-zustand-green-pi.vercel.app/notes/action/create`,
    images: [
      {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: "NoteHub",
        },
    ]
  }
};



export default function CreateNote() {

    return (
        <main className={css.main}>
        <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
	    <NoteForm />
        </div>
        </main>

    )
}