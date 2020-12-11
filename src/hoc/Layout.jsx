//rafce
import NavBar from "../components/NavBar/NavBar"

const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
			<footer>Mon Footer</footer>
		</>
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

