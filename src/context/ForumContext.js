"use client";

import axios from "axios";
import {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from "react";

const ForumContext = createContext();

export const ForumContextProvider = ({ children }) => {
  const API = process.env.NEXT_PUBLIC_API_URL;

  const [forums, setForums] = useState([]);
  const [threads, setThreads] = useState([]);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //Foros
  const getAllForums = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await axios.get(`${API}/forums`);
      setForums(res.data.forums);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, [API]);

  //Threads por foro
  const getThreadsByForum = useCallback(
    async (forumId) => {
      setLoading(true);
      setError(false);
      setThreads([]);

      try {
        const res = await axios.get(`${API}/forums/${forumId}/threads`);
        setThreads(res.data.threads);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    },
    [API]
  );

  //Posts por thread
  const getPostsByThread = useCallback(
    async (threadId) => {
      setLoading(true);
      setError(false);
      setPosts([]);

      try {
        const res = await axios.get(`${API}/threads/${threadId}/posts`);
        setPosts(res.data.posts);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    },
    [API]
  );

  //Users
  const getAllUsers = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await axios.get(`${API}/users`);
      setUsers(res.data.users);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, [API]);

  const getUserID = useCallback((id) => {
  return users.find((u) => u._id === id);
}, [users]);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await getAllForums();
      await getAllUsers();
      setLoading(false);
    };

    init();
  }, [getAllForums, getAllUsers]);

  return (
    <ForumContext.Provider
      value={{
        forums,
        threads,
        posts,
        users,
        getUserID,
        loading,
        error,
        getAllForums,
        getThreadsByForum,
        getPostsByThread,
        getAllUsers,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};

export const useForumContext = () => {
  const context = useContext(ForumContext);
  if (!context) {
    throw new Error(
      "useForumContext debe usarse dentro de ForumContextProvider"
    );
  }
  return context;
};

export default ForumContext;
