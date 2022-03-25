import router from "next/router";
import React from "react";
import { Note } from "../lib/types";

type NoteProps = {
  note: Note;
};

const CardItem = ({ note }: NoteProps) => {
  return (
    <div className="max-w-md bg-white dark:bg-dark flex flex-col items-center justify-center px-5 py-3 rounded-md border border-gray-300 dark:border-[#212121] dark:hover:brightness-[1.2] hover:transition-all">
      <h2
        onClick={() => router.push("/note/[id]", `/note/${note.id}`)}
        className="text-xl font-bold whitespace-pre-wrap pb-2"
      >
        {note.title}
      </h2>
      <div className="w-full flex items-center justify-between gap-x-2 ">
        <span>{new Date(note.createdAt).toLocaleTimeString()}</span>
        <span className="flex items-center justify-center gap-x-3 ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="hover:text-gray-700 dark:hover:text-gray-100"
          >
            <path
              d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            onClick={() => router.push("/[noteid]", `/${note.id}`)}
            className="hover:text-gray-700  dark:hover:text-gray-100"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-label="Write"
          >
            <path
              d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
              fill="currentColor"
            ></path>
            <path
              d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
              stroke="currentColor"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CardItem;
