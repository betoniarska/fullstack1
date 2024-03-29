const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course}/>
      <Content part={part1}/>
      <Content part={part2}/>
      <Content part={part3}/>
      <Total total = {part1.exercises + part2.exercises + part3.exercises}/>
      
    </div>
  )
}

const Header = (props) => {

  return (
    <div>
     <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      
      <Part part={props.part.name} exercises={props.part.exercises}/>
      
    </div>

  )
}

const Part = (props) => {

  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {

  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

export default App