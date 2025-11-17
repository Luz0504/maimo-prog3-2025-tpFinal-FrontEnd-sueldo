"use client";

import { useForumContext } from "@/context/ForumContext";
import Image from "next/image";

const UsersContainer = () => {
  const { users } = useForumContext();

  return (
    <div>

      {users.map((user) => (
        <div key={user._id}>
          <h2>{user.username}</h2>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/${user.avatar_url}`}
            height={500}
            width={500}
            alt={user.username}
          />
        </div>
      ))}
    </div>
  );
};

export default UsersContainer;
