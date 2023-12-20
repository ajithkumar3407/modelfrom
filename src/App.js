import './App.css';
import Header from './Header';
import AddTask from './Addtask';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tasklist from './Tasklist'
import MyVerticallyCenteredModal from './Model';

function App() {
  return (
    
<div>
<Container>

<Row className="justify-content-md-center">
  <Col  lg="6">
  <Header />
  <AddTask />
  <Tasklist/>
  <MyVerticallyCenteredModal/>
  
  </Col>
  </Row>
</Container>
</div>


  );
}

export default App;
