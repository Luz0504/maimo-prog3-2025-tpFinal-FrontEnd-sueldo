import ThreadsContainer from "@/app/components/ThreadsContainer";

const PageThread = async ({ params }) => {
  const { id } = await params;

  return <ThreadsContainer id={id} />;
};

export default PageThread;
