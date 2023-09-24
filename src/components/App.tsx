import Container from "react-bootstrap/Container";
import Player from "./Player"
import DoAnything from "./DoAnything";

function App() {
  return (
    <Container fluid={'sm'} className='pt-5'>
      <h1 className="text-center">Laces</h1>
      <h6 className="text-center">The unofficial <a href="https://rollforshoes.com" title="Roll for Shoes official site">Roll for Shoes</a> companion app</h6>
      <Player name="Alex" />
      <DoAnything />
    </Container>
  )
}

export default App
