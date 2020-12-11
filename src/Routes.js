import { Route, Switch } from "react-router-dom"
import Popular from "./pages/Popular"
import Battle from "./pages/Battle"

const Routes = () => {
	return (
		<Switch>
			<Route path='/battle'>
				<Battle />
			</Route>
			<Route path='/' exact>
				<Popular />
			</Route>
			<Route>
				<p>Page introuvable 404</p>
			</Route>
		</Switch>
	)
}

export default Routes