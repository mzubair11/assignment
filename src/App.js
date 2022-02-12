import { Container, Row } from "react-bootstrap";
import Tab from "./components/Tab";

function App() {
  return (
    <Container style={{ width: '50rem' }} className="justify-content-centre">
      <Row>
        <h1>Zubair Ahmed | 8105740065</h1>
        <Tab />
      </Row>
    </Container>
  );
}

export default App;
