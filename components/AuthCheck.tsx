import { signIn, useSession } from "next-auth/react";
import React from "react";

const AuthCheck = (props: any) => {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    return (
      <span>
        You are not Authenticated!
        <a
          className="underline text-blue-500 "
          onClick={() => signIn("github")}
        >
          SignIn
        </a>
      </span>
    );
  } else {
    return props.children;
  }
};

export default AuthCheck;
