import { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
// Avant
// import Popular from "./pages/Popular"
// import Battle from "./pages/Battle"
import Spinner from "./components/Spinner"

// Avec le lazy loading
const Popular = lazy(() => import('./pages/Popular'))
const Battle = lazy(() => import('./pages/Battle'))


const Routes = () => {
	return (
		<Suspense fallback={<Spinner />}>
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
		</Suspense>
	)
}

export default Routes