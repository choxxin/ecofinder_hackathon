import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import { Button } from "./ui/button";
export const Auth = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton>
          {/* <Button>Sign in</Button> */}
          sign in
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </div>
  );
};