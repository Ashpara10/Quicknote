import React, { useState } from "react";

const Tags = ["General", "Tech", "Work", "Random", "Dev", "News", "Gaming"];

const NoteForm = () => {
  const [note, setNote] = useState({ title: "", content: "" });
  const [tag, setTag] = useState("");
  const { title, content } = note;

  const handleChange = (e: any) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(note, tag.split(" "));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center justify-center gap-y-2"
    >
      <input
        className="w-full p-2.5 border border-gray-200 rounded-md"
        name="title"
        placeholder="Create Title..."
        value={title}
        onChange={handleChange}
      />
      <textarea
        placeholder="Content goes here"
        className="w-full p-2.5 border border-gray-200 rounded-md"
        name="content"
        value={content}
        onChange={handleChange}
      />
      <div className="max-w-2xl flex flex-wrap gap-2">
        {Tags.map((e) => {
          return (
            <button
              type="button"
              value={tag}
              onClick={() => setTag(tag.concat(` ${e}`))}
              className="p-2.5 bg-gray-300"
            >
              {e}
            </button>
          );
        })}
      </div>
      <button type="submit" className="bg-blue-600 p-3 text-white rounded-md">
        Submit
      </button>
    </form>
  );
};

export default NoteForm;
