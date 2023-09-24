import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"

import DoAnything from "./DoAnything";
import Player from "./Player"

function App() {
  return (
    <Container className='py-3 col-8 vh-100 d-flex flex-column bg-light'>
      <Row>
        <h1 className="text-center">Laces</h1>
        <h6 className="text-center">The unofficial <a href="https://rollforshoes.com" title="Roll for Shoes official site">Roll for Shoes</a> companion app</h6>
      </Row>
      <Player />
      <main className="flex-fill text-center">This is where the list goes.</main>
      <DoAnything />
    </Container>
  )
}

export default App
