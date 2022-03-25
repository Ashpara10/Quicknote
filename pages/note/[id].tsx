import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { Note } from "../../lib/types";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

type NoteProps = {
  note: Note;
};

const Note = ({ note, content }: any) => {
  console.log(note);
  return (
    <div className="w-full my-8 px-2 flex flex-col items-center justify-center">
      <Head>
        <title>QuickNote - {note.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="p-2 max-w-2xl flex flex-col gap-y-2 items-center justify-center">
        <div className="w-full flex items-center justify-start  my-2">
          <span className="flex gap-x-2 items-center justify-center">
            <a className="text-blue-500 hover:underline" href="/">
              Home
            </a>
            {" / "}
          </span>
        </div>
        <h1 className="text-3xl dark:text-gray-100 md:text-4xl font-bold">
          {note.title}
        </h1>
        <div className="w-full px-1 flex items-center justify-start">
          <MDXRemote {...content} />
        </div>
      </article>
    </div>
  );
};

export default Note;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/note/${params?.id}`);
  const data = await res.json();

  return {
    props: {
      note: data.note,
      content: await serialize(data.note.content),
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
