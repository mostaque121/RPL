// components/Main.js or pages/index.js
'use client'
import { useSession } from 'next-auth/react';

export default function Main() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div>
        <p>Hi, {session.user.name}!</p>
        <p>Email: {session.user.email}</p>
      </div>
    );
  }

  return (
    <div>
      <p>Not signed in</p>
      {/* Optionally, you can add a sign-in button here */}
    </div>
  );
}
