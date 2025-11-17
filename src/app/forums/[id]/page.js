import ForumContainer from "@/app/components/ForumContainer";

const PageForum = async ({ params }) => {
  const { id } = await params;

  return <ForumContainer id={id} />;
};

export default PageForum;
