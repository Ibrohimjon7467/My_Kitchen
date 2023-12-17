import './index.css'
import App from './App'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { GlobalContextProvider } from './context/GlobalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalContextProvider>
        <App />
        <ToastContainer />
    </GlobalContextProvider>
)