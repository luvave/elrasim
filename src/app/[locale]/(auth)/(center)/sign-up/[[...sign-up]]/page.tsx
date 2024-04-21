import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center content-center justify-center h-screen">
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-white text-black hover:bg-slate-50 text-sm normal-case",
          },
        }}
      />
    </div>
  );
}