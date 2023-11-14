import './App.css';
import HelloWorld from './Components/HelloWorld';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';
import Frase from './Components/Frase';

function App() {

  const nome = "Alberto Roberto"; 

  return (
    <div className="App">
      <Frase></Frase>
      <Frase></Frase>
      <HelloWorld> </HelloWorld>
      <h1> Teste de CSS </h1>
      <SayMyName nome="Maria"></SayMyName>
      <SayMyName nome="Abner"></SayMyName>
      <SayMyName nome={nome}> </SayMyName>
      <Pessoa nome="Alisson" idade="40" profissão="Front-End" foto="https://via.placeholder.com/150"> </Pessoa>
    </div>
  ); 
}

export default App;
