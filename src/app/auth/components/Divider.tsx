export function Divider() {
  return (
    <div className="flex items-center gap-4 my-6">
      <div className="flex-1 h-px bg-gray-200" />
      <span className=" text-sm">or</span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}