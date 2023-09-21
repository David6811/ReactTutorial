
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Navbar  from './components/Navbar';

function App() {

  return (
    <div>
    <Container fluid>
      <Row >
        <Col lg="3" xl="2" xxl="2" className="d-none d-lg-block" style={{ marginLeft: '-15px' }}>
          <Navbar />
        </Col>
        <Col lg="9" xl="10" xxl="10" >
            Content
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default App;
