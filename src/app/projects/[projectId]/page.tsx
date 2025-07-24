interface Props {
  params: Promise<{
    projectId: string;
  }>;
}

const page = async ({ params }: Props) => {
  const { projectId } = await params;
  return (
    <div>
      <h1>Project Id: {projectId}</h1>
    </div>
  );
};

export default page;
