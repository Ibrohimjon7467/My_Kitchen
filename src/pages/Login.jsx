import { useRef } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin'

function Login() {

  const email = useRef()
  const password = useRef()
  const form = useRef()

  const { user, login, error } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email.current.value, password.current.value)

    form.current.reset()
  }

  if (error) {
    toast.warning("Error in email or password")
  }

  return (
    <div className="w-full form-control items-center justify-center gap-3 p-3 mt-5">
      <h2 className="text-2xl sm:text-3xl mb-7">Log in</h2>
      <form onSubmit={handleSubmit} ref={form} className="flex flex-col gap-5">
        <label className="flex flex-col gap-3">
          <span>Email:</span>
          <input ref={email} type="email" className="input input-sm sm:input-md sm:text-sm text-xs input-bordered w-full max-w-xs" placeholder="Enter your email" />
        </label>
        <label className="flex flex-col gap-3">
          <span>Password:</span>
          <input ref={password} type="password" className="input input-sm sm:input-md sm:text-sm text-xs input-bordered w-full max-w-xs" placeholder="Enter your password" />
        </label>
        <button className="btn btn-neutral btn-sm sm:btn-md">
          Log in
        </button>
      </form>
      <p className="text-[11px] sm:text-xs text-center">
        If you don't have an account, please &nbsp;<Link className="text-slate-600 hover:underline" to="/signup" >Sign up</Link>
      </p>
    </div>
  )
}

export default Login