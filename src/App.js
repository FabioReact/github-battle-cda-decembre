import './App.css'
import InstructionCard from "./components/InstructionCard/InstructionCard"
import LightComponent from "./components/LightComponent/LightComponent"
import FormBattle from "./components/FormBattle/FormBattle"

function App() {
  return (
    <div>
      <LightComponent light="on" />
      <h2>Instructions</h2>
      <InstructionCard instruction="Enter two Github users" image="user-group.png" />
      <InstructionCard instruction="Battle" image="battle.png" />
      <InstructionCard instruction="See the winner" image="trophy.png" />
      <h2>Players</h2>
      <FormBattle number="One" />
      <FormBattle number="Two" />
    </div>
  );
}

// Les images se trouvent dans le dossier /public

export default App;
