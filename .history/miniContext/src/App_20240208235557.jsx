import UserContext from './context/UserContext'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'

function App() {
  return (
    <UserContextProvider>

    <h1>this is context api </h1>
    <Login/>
    <Prof
    </UserContextProvider>
  )
}

export default App
