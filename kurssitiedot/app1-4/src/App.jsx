const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    
    <div>
      <Header course={course}/>

      {parts.map((part, index) => (
        <Content key={index} part={part}/>
      ))}

      <Total total={parts.reduce((sum, part) => sum + part.exercises, 0)}/>

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