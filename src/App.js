import './App.css'
import InstructionCard from "./components/InstructionCard/InstructionCard"
import LightComponent from "./components/LightComponent/LightComponent"

function App() {
  return (
    <div>
      <LightComponent light="on" />
      <p>Mon application</p>
      <InstructionCard instruction="Enter two Github users" image="user-group.png" />
      <InstructionCard instruction="Battle" image="battle.png" />
      <InstructionCard instruction="See the winner" image="trophy.png" />
    </div>
  );
}

// Les images se trouvent dans le dossier /public

export default App;
