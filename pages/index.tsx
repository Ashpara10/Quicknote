import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import CardItem from "../components/CardItem";
import { Note } from "../lib/types";
import { fetcher } from "../lib/utils";

const Home: NextPage = () => {
  const { data } = useSWR("/api/hello", fetcher);
  const { data: session, status } = useSession();

  if (!data) {
    return (
      <div className="w-full  flex flex-col items-center justify-center">
        <span>Loading...</span>
      </div>
    );
  }
  if (data.length === 0) {
    return <span>No Notes to Display</span>;
  }

  return (
    <div className="w-full py-5 px-2 flex flex-col items-center justify-center">
      <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 items-center justify-center ">
        {data.map((note: Note) => {
          return (
            <>
              <CardItem note={note} />
            </>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
