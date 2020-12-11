import "./App.css"
import { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./Routes"
import Layout from "./hoc/Layout"

function App() {
	const [theme, setTheme] = useState("light")
	return (
		<Router>
			<Layout theme={theme} switchTheme={setTheme}>
				<Routes />
			</Layout>
		</Router>
	)
}

export default App
