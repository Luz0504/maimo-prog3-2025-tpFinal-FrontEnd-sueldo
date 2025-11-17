"use client";

import { useForumContext } from "@/context/ForumContext";
import { useEffect } from "react";
import Link from "next/link";

const ForumContainer = ({ id }) => {
  const { forums, threads, loading, error, getThreadsByForum } =
    useForumContext();

  const thisForum = forums.find((foru) => foru._id === id);

  useEffect(() => {
    if (id) {
      getThreadsByForum(id);
    }
  }, [id, getThreadsByForum]);

  return (
    <section className="flex-col">
      {!loading && thisForum && (
        <>
          <h1 className="text-3xl mb-5 text-center">{thisForum.name}</h1>
          <div className="flex flex-col">
            {threads.map((thread) => (
              <div key={thread._id}>
                <Link href={`/threads/${thread._id}`}>
                  <p> {thread.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}

      {loading && "Loading..."}
      {error && "Error al cargar"}
    </section>
  );
};

export default ForumContainer;
