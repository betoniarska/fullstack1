const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    
    <div>
      <Header course={course}/>
      {course.parts.map((part, index) => (
        <Content key={index} part={part}/>
      ))}
      <Total parts={course.parts}/>
    </div>
    
  )
}

const Header = (props) => {

  return (
    <div>
     <h1>{props.course.name}</h1>
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

  const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);


  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  )
}



export default App