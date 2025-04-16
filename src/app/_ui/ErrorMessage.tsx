export default function ErrorMessage({
  message
}: {
  message: string
}) {
  return (
    <div
      className="text-red-500 font-bold text-center"
    >
      <span className="break-words">{message}</span>
    </div>
  );
}