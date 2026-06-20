import Card from "./components/Card"

function App() {
  return (
    <div className="container">
      <Card name={"Anubhav"} age={25} img='https://images.unsplash.com/photo-1747229521023-5f89d2749fa3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
      <Card name={"Aman"} age={35} img='https://images.unsplash.com/photo-1657886708649-eda40992a10f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
      <Card name={"Eternal"} age={78} img='https://images.unsplash.com/photo-1779126931857-f12866cf7049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
      <Card name={"Elon"} age={69} img='https://plus.unsplash.com/premium_photo-1709399200520-89f2f5d46dbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
    </div>
  )
}

export default App
