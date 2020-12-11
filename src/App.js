import "./App.css"
import { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./Routes"
import Layout from "./hoc/Layout"
import ThemeContext from "./context/theme-context"

function App() {
	// Etape 2 - Création des propriétés dont a besoin le contexte
	const [theme, setTheme] = useState("light")
	// Création de mon objet contexte:
	const themeContextValues = {
		theme: theme,
		switchTheme: setTheme,
	}
	// Fin de l'étape 2

	return (
		<Router>
			{/* Etape 3: Rendre mon contexte disponible à mon application */}
			<ThemeContext.Provider value={themeContextValues} >
				<Layout>
					<Routes />
				</Layout>
			</ThemeContext.Provider>
		</Router>
	)
}

export default App
