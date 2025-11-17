"use client";

import { useForumContext } from "@/context/ForumContext";
import { useEffect } from "react";

const ThreadsContainer = ({ id }) => {
  const { threads, posts, loading, error, getPostsByThread } =
    useForumContext();

  const thisThread = threads.find((thre) => thre._id === id);

  useEffect(() => {
    if (id) getPostsByThread(id);
  }, [id, getPostsByThread]);

  return (
    <section className="flex-col">
      {!loading && (
        <>
          <h1 className="text-3xl mb-5 text-center">
            {thisThread?.title ?? "Thread"}
          </h1>

          <div className="flex flex-col gap-4">
            {posts.map((pos) => (
              <div key={pos._id} className="p-3 border rounded">
                <p>{pos.content}</p>
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

export default ThreadsContainer;
