//rafce
import NavBar from "../components/NavBar/NavBar"

const Layout = ({ children }) => {
	return (
		<div>
			<NavBar />
			{children}
			<footer>Mon Footer</footer>
		</div>
	)
}

// Un HOC (High Order Component) est un Composant d'Ordre Supérieur - Cela signifie que cette fonction prendra en paramètre un composant, et retournera un nouveau composant qui aura une fonctionnalité en plus, ou du contenu en plus
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

