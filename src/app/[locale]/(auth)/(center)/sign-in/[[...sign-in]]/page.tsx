import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex items-center content-center justify-center h-screen">
      <SignIn
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