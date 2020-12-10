import './App.css'
import InstructionCard from "./components/InstructionCard/InstructionCard"
import LightComponent from "./components/LightComponent/LightComponent"
import FormBattle from "./components/FormBattle/FormBattle"
import SelectLanguage from "./components/SelectLanguage/"
import RepoCard from "./components/RepoCard"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

function App() {

  const getData = () => {
    fetch("https://api.github.com/search/repositories?q=stars:%3E1+language:&sort=starts&order=desc&type=Repositorie")
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <Router>
      <nav>
        <ul className="flex">
          <li className="pr-2 font-bold text-lg"><Link to="/">Popular</Link></li>
          <li className="pr-2 font-bold text-lg"><Link to="/battle">Battle</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/battle">
          <InstructionCard instruction="Enter two Github users" image="user-group.png" />
          <InstructionCard instruction="Battle" image="battle.png" />
          <InstructionCard instruction="See the winner" image="trophy.png" />
          <h2>Players</h2>
          <FormBattle number="One" />
          <FormBattle number="Two" />
        </Route>
        <Route path="/" exact>
          <div>
            <button onClick={getData}>Get Repositories</button>
            <LightComponent light="on" />
            {/* <h2 className="bg-blue-400">Instructions</h2> */}
            <SelectLanguage />
            <RepoCard />
          </div>
        </Route>
        <Route>
          <p>Page introuvable 404</p>
        </Route>
      </Switch>
    </Router>
  );
}

// Les images se trouvent dans le dossier /public

export default App;
