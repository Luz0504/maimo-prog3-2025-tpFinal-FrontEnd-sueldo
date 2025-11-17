"use client";

import { useForumContext } from "@/context/ForumContext";
import Link from "next/link";

const HomeContainer = () => {
  const { forums, loading, error } = useForumContext();

  if (loading) return <p>Cargando foros...</p>;
  if (error) return <p>Error cargando foros</p>;

  return (
    <div>
      <h1>Foros</h1>

      {forums.map((forum) => (
        <div key={forum._id}>
          <Link href={`forums/${forum._id}`}>
          <h2>{forum.name}</h2>
          <p>{forum.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeContainer;
