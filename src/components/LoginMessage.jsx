/* eslint-disable react/prop-types */

export default function LoginMessage({ isLoggedIn }) {
  return (
    <h2>{ (isLoggedIn) ? "Welcome back!" : "Please log in" }</h2>
  )
}