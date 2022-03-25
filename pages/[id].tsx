import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState } from "react";
import { Note } from "../lib/types";

const EdotNote = ({ note }: { note: Note }) => {
  const [newNote, setNewNote] = useState({
    title: note.title,
    content: note.content,
    tags: note.tags,
  });
  const { title, content, tags } = newNote;
  const handleChange = (e: any) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/api/note/${note.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    });
    console.log(await res.json());
  };
  return (
    <form
      className="w-full flex flex-col gap-y-2 items-center justify-center max-w-2xl"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full p-2.5 rounded-md border border-gray-300 dark:border-[#1a1a1a]"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        className="w-full p-2.5 rounded-md border border-gray-300 dark:border-[#1a1a1a]"
        name="content"
        value={content}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EdotNote;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/note/${params?.id}`);
  const data = await res.json();

  return {
    props: {
      note: data.note,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();
  return {
    paths: data.map((e: Note) => {
      return { params: { id: e.id } };
    }),
    fallback: false,
  };
};
