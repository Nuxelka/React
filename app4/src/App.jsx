import Student from "./Student.jsx"

function App() {
  return(
    <>
      <div class="studentcatalog">
        <Student name = "SpongeBob" age={30} isStudent={true}/>
        <Student name = "Patric" age={31} isStudent={false}/>
        <Student name = "Squidward" age={35} isStudent={true}/>
        <Student name = "Sande" age={29} isStudent={true}/>
        <Student name = "Mr Crab" age={56} isStudent={false}/>
        <Student name = "Plankton" age={51} isStudent={false}/>
        <Student/>
      </div>
    </>
  )
}

export default App
