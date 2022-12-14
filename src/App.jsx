import './App.css';
import Cta from './components/cta/Cta';
import GainMore from './components/gainMore/GainMore';
import GainMoreLeft from './components/gainMoreLeft/gainMoreLeft';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className='App container'>
      <Nav />
      <GainMore />
      <Cta />
      <GainMoreLeft />

      {/* <Title>React styled components</Title>
      <Btn onClick={() => console.count('clicked')}>Regular button</Btn>
      <Btn type='submit' sm>
        Small button
      </Btn>

      {/* large btn paveldi viska is button ir perrasom ka reikia  */}
      {/* <LargeBtn>Big button</LargeBtn>
      <Btn as={'a'} href='#about.html'>I am link button</Btn> */}
    </div>
  );
}

export default App;
