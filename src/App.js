import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import styled from 'styled-components';


function App() {
  return (
    <ContainerBody className="app">
      <Header />
      <SectionOne>
        <Navbar />
        <Body />
      </SectionOne>
      <SectionTwo>
        <Logo />
      </SectionTwo>
      <Footer />
    </ContainerBody>
  );
}

export default App;

const ContainerBody = styled.div`
  background-color: maroon;
  height: 100vh;
`;

const SectionOne = styled.div`
  display: flex;

`;

const SectionTwo = styled.div`
  height: 500px;
  width: 500px;
`;

const Logo = styled.div``;