import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form>
      <p>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
      </p>
      <p>
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
      </p>
      <div>
        <button formAction={login}>Log in</button>
      </div>
      <div>
        <button formAction={signup}>
          Sign up
        </button>
      </div>
    </form>
  )
}