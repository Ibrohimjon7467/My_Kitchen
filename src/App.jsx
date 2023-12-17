import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import MainLayout from "./layout/MainLayout"
import { auth } from "./firebase/firebaseConfig"
import { onAuthStateChanged } from "firebase/auth"
import { useGlobalContext } from "./hooks/useGlobalContext"

//pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Create from "./pages/Create"

// components
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  const { user, dispatch, isAuthChange } = useGlobalContext()
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute user={user}>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'create',
          element: <Create />
        }
      ],
    },
    {
      path: "login",
      element: <>{user ? <Navigate to="/" /> : <Login />}</>,
    },
    {
      path: "signup",
      element: <>{user ? <Navigate to="/" /> : <Signup />}</>,
    },
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: 'LOGIN', payload: user })
      dispatch({ type: "IS_AUTH_CHANGE" })
    })
  }, [])

  return <>{isAuthChange && <RouterProvider router={routes} />}</>
}

export default App
