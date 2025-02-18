import { useState } from "react";
import "./ThemeToggle.css"


export default function ThemeToggle() {
  const [ theme, setTheme ] = useState("light-theme")
  const [ text, setText ] = useState("This is light theme")

  const handleClick = () => {
    setTheme(() => (theme == "light-theme") ? "dark-theme" : "light-theme" )
    setText(() => (text == "This is light theme") ? "This is dark theme" : "This is light theme")
  }

  return (
    <>
      <div className={theme}>
          <h1>{text}</h1>
          <button onClick={handleClick} >Switch button</button>
      </div>
      
    </>
  )

}