import Background from '../components/Background'
import LoginForm from '../components/LoginForm'

export default function Login() {
  return (
    // Outer container for login page
    <div className="w-full h-screen flex items-center bg-black bg-opacity-70">
      <LoginForm />
      <Background className="z-[-10] h-full bg-crowd" />
    </div>
  )
}
