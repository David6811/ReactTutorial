
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FAQ from './components/FAQ';
import { useState } from "react";


function App() {
  const [childValue, setChildValue] = useState('Home');

  const handleChildValueChange = (value) => {
    setChildValue(value);
  };

  return (
    <div>
      <Container fluid>
        <Row >
          <Col lg="3" xl="2" xxl="2" className="d-none d-lg-block" style={{ marginLeft: '-15px' }}>
            <Navbar onValueChange={handleChildValueChange}/>
          </Col>
          <Col lg="9" xl="10" xxl="10" >
            {childValue === 'Home' && <Home />}
            {childValue === 'FAQ' && <FAQ />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
