export default function TodoList() {
  const tasks = ["Study", "Eat", "Sleep", "Walk", " Read", "Relax"]

  return (
    <>
      <h1>Todo List</h1>
      <h2>Your tasks today</h2>
      {tasks.map((task, index) => {
        return (
          <p key={index}>{task}</p>
        )
      })}
    </>
  )
}