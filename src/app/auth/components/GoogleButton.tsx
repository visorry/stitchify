"use client";

export function GoogleButton() {
  return (
    <button
      className="w-full py-3  border-2 border-gray-200 rounded-full hover:bg-primary-foreground
                 transition-colors font-medium flex items-center justify-center gap-2"
    >
      <img src="/google.svg" alt="Google" className="w-5 h-5" />
      Continue with Google
    </button>
  );
}
