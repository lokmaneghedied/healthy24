import { getAuth, signOut } from 'firebase/auth';

export const DashBoard = () => {

  const auth = getAuth();

  return (
    <section>
      <div>
        <h1>DashBoard</h1>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laudantium optio reprehenderit quos, aliquam voluptatum tempore debitis temporibus eaque illo unde quasi fuga quaerat magni soluta, vel corporis eveniet culpa?</h1>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laudantium optio reprehenderit quos, aliquam voluptatum tempore debitis temporibus eaque illo unde quasi fuga quaerat magni soluta, vel corporis eveniet culpa?</h1>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laudantium optio reprehenderit quos, aliquam voluptatum tempore debitis temporibus eaque illo unde quasi fuga quaerat magni soluta, vel corporis eveniet culpa?</h1>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laudantium optio reprehenderit quos, aliquam voluptatum tempore debitis temporibus eaque illo unde quasi fuga quaerat magni soluta, vel corporis eveniet culpa?</h1>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laudantium optio reprehenderit quos, aliquam voluptatum tempore debitis temporibus eaque illo unde quasi fuga quaerat magni soluta, vel corporis eveniet culpa?</h1>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laudantium optio reprehenderit quos, aliquam voluptatum tempore debitis temporibus eaque illo unde quasi fuga quaerat magni soluta, vel corporis eveniet culpa?</h1>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laudantium optio reprehenderit quos, aliquam voluptatum tempore debitis temporibus eaque illo unde quasi fuga quaerat magni soluta, vel corporis eveniet culpa?</h1>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laudantium optio reprehenderit quos, aliquam voluptatum tempore debitis temporibus eaque illo unde quasi fuga quaerat magni soluta, vel corporis eveniet culpa?</h1>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laudantium optio reprehenderit quos, aliquam voluptatum tempore debitis temporibus eaque illo unde quasi fuga quaerat magni soluta, vel corporis eveniet culpa?</h1>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laudantium optio reprehenderit quos, aliquam voluptatum tempore debitis temporibus eaque illo unde quasi fuga quaerat magni soluta, vel corporis eveniet culpa?</h1>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laudantium optio reprehenderit quos, aliquam voluptatum tempore debitis temporibus eaque illo unde quasi fuga quaerat magni soluta, vel corporis eveniet culpa?</h1>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laudantium optio reprehenderit quos, aliquam voluptatum tempore debitis temporibus eaque illo unde quasi fuga quaerat magni soluta, vel corporis eveniet culpa?</h1>
        <button onClick={() => signOut(auth)}>Log out</button>
      </div>
    </section>
  )
}
