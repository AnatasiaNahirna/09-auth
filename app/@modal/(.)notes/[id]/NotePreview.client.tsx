"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api/clientApi";
import css from "./NotePreview.module.css";
import Modal from "@/components/Modal/Modal";

export default function NotePreview() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) { return (<p>Loading, please wait...</p>) };
  if (isError) { return (<p>Something went wrong.</p>) };

  const formatDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const onClose = () => {
    router.back();
  };

  return (
    <Modal onClose={onClose} isOpen={true}>
      <div className={css.container}>
        {data && (
          <div className={css.item}>
            <div className={css.header}>
              <h2>{data.title}</h2>
            </div>
            <p className={css.content}>{data.content}</p>
            <p className={css.tag}>{data.tag}</p>
            <p className={css.date}>{formatDate(data.createdAt)}</p>
          </div>
        )}
      </div>
      <button onClick={onClose} type="button" className={css.backBtn}>
        Back
      </button>
    </Modal>
  );
}