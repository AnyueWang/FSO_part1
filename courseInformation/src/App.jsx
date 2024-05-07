const Header = (props) => {
  return (
    <h1>
      {props.course.name}
    </h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.num}
    </p>
  )
}

const Content = (props) => {
  const parts = props.course.parts
  return (<div>
    <Part name={parts[0].name} num={parts[0].exercises} />
    <Part name={parts[1].name} num={parts[1].exercises} />
    <Part name={parts[2].name} num={parts[2].exercises} />
  </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.course.parts.reduce((sum, each) => sum + each.exercises, 0)}
    </p>
  )
}

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
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App