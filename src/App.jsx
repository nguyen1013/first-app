import Greeting from './components/Greeting'  
import ThemeToggle from './components/ThemeToggle'
import LoginMessage from './components/LoginMessage'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <h1>Hello World!</h1>
      <Greeting name="Nguyen" />
      <br></br>
      <ThemeToggle />
      <br></br>
      <LoginMessage isLoggedIn = {true} />
      <br></br>
      <TodoList />
    </>
  )
}

export default App
