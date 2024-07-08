import { FaEnvelope, FaLock } from 'react-icons/fa'
import Link from 'next/link'

export default function LoginForm() {
  const InputField = ({ label, type, name, placeholder, icon: Icon }) => (
    <div className="mb-4">
      <label className="block text-start text-sm font-semibold mb-2">
        {label}
      </label>
      <div className="bg-white p-1 border-2 border-gray-300 flex items-center">
        <Icon className="mx-2" />
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="outline-none text-sm flex-1"
        />
      </div>
    </div>
  )

  return (
    <div className="flex items-center justify-center w-full text-center">
      <div className="bg-white text-black rounded-2xl shadow-2xl shadow-slate-300 flex opacity-85">
        {/* Text on left of Login */}
        <div className="w-1/2 p-9 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold">Welcome Back!</h1>

          <p className="mt-14 font-semibold">
            Your favourite events are waiting.
            <br />
            Let's get you signed in first.
          </p>

          {/* "Don't have an account" link */}
          <p className="text-center mt-10">
            Don't have an account?{' '}
            <Link href={'/register'}>
              <span className="text-blue-400 underline hover:text-black font-semibold">
                {' '}
                Register
              </span>
            </Link>
          </p>
        </div>

        <div className="w-1/2 p-7">
          <h1 className="font-bold text-xl mb-8 mt-24">
            SIGN IN TO YOUR ACCOUNT
          </h1>
          <form>
            <InputField
              label="Email Address:"
              type="email"
              name="email"
              placeholder="you@example.com"
              icon={FaEnvelope}
            />
            <InputField
              label="Password:"
              type="password"
              name="password"
              placeholder="********"
              icon={FaLock}
            />
            <div className="flex justify-between items-center w-72 mb-5">
              <label className="flex items-center text-xs">
                <input type="checkbox" name="remember" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="font-semibold text-xs hover:text-gray-500">
                Forgot Password?
              </a>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-black border-2 border-black py-2 px-4 rounded-lg font-md hover:bg-black hover:text-white mt-5 mb-3 text-sm"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
