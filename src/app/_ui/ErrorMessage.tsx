export default function ErrorMessage({
  message
}: {
  message: string
}) {
  return (
    <div
      className="p-4 bg-red-500 text-white font-bold text-center rounded"
    >
      <span>{message}</span>
    </div>
  );
}