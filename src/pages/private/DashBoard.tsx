import { getAuth, signOut } from 'firebase/auth';
import { SideNav } from "../../navigation";

export const DashBoard = () => {

  const auth = getAuth();

  return (
    <section>
      <div>
        <SideNav />
        <h1>DashBoard</h1>
        <button onClick={() => signOut(auth)}>Log out</button>
      </div>
    </section>
  )
}
