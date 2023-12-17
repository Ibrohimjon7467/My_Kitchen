import { useRef } from 'react'
import { Link } from "react-router-dom"
import useSignup from "../hooks/useSignup"

function Signup() {

  const displayName = useRef()
  const email = useRef()
  const password = useRef()
  const form = useRef()

  const { signup, error, user } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(displayName.current.value, email.current.value, password.current.value)

    form.current.reset()
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 p-3 mt-5">
      <h2 className="text-2xl sm:text-3xl mb-7">Sign up</h2>
      <form className="form-control gap-5" ref={form} onSubmit={handleSubmit}>
        <label className="flex flex-col gap-3">
          <span>Name:</span>
          <input ref={displayName} type="text" className="input input-sm sm:input-md sm:text-sm text-xs input-bordered w-full max-w-xs" placeholder="Enter your name" />
        </label>
        <label className="flex flex-col gap-3">
          <span>Email:</span>
          <input ref={email} type="email" className="input input-sm sm:input-md sm:text-sm text-xs input-bordered w-full max-w-xs" placeholder="Enter your email" />
        </label>
        <label className="flex flex-col gap-3">
          <span>Password:</span>
          <input ref={password} type="password" className="input input-sm sm:input-md sm:text-sm text-xs input-bordered w-full max-w-xs" placeholder="Enter your password" />
        </label>
        <button className="btn btn-neutral btn-sm sm:btn-md">
          Sign up
        </button>
        <p className="text-[11px] sm:text-xs text-center">
          Do you have an account ? &nbsp;<Link className="text-slate-600 hover:underline" to="/login" >Log in</Link>
        </p>
      </form>
    </div>
  )
}

export default Signup