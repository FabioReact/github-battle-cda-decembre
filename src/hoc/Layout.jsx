//rafce
import NavBar from "../components/NavBar/NavBar"
import { useContext } from "react"
import ThemeContext from "../context/theme-context"
// Si vous souhaitez mettre un mode sombre grâce à tailwind, il faudra activer le "darkMode" dans le fichier tailwind.config.js

const Layout = ({ children }) => {
	// Etape 4: Utilisation de notre contexte
	const { theme } = useContext(ThemeContext)
	return (
		<div className={theme === "dark" ? "dark" : ""}>
			<div className="dark:bg-gray-900 dark:text-gray-300">
				<NavBar />
				{children}
				<footer>Mon Footer</footer>
			</div>
		</div>
	)
}

// Un HOC (High Order Component) est un Composant d'Ordre Supérieur - Cela signifie que cette fonction prendra en paramètre un composant, et retournera un nouveau composant qui aura une fonctionnalité en plus, ou du contenu en plus
// Cette seconde version sera davantage utile lorsque l'information n'est pas nécessaire à tout les composant de notre application, mais à uniquement certain composants
// Dans ce cas, le composant pourra être exporter avec withInfo(NomDuComposant)
const withLayout = (Composant) => {
	return (props) => (
		<div>
			<NavBar />
			<Composant {...props} />
			<footer>Mon Footer</footer>
		</div>
	)
}

export { withLayout }
export default Layout

