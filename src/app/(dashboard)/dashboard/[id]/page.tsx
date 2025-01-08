export default async function Dashboard({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // https://nextjs.org/docs/messages/sync-dynamic-apis
  return <div>대시보드 id : {id}</div>;
}
