import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center content-center justify-center h-screen">
      <SignUp />
    </div>
  );
}