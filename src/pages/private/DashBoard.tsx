import { getAuth, signOut } from 'firebase/auth';

export const DashBoard = () => {

  const auth = getAuth();

  return (
    <section>
      <div>
        <h1>DashBoard</h1>
        <button onClick={() => signOut(auth)}>Log out</button>
      </div>
    </section>
  )
}
