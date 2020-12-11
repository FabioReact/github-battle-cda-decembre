import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./Routes"
import Layout from "./hoc/Layout"

function App() {
	return (
		<Router>
			<Layout>
				<Routes />
			</Layout>
		</Router>

	)
}

export default App
