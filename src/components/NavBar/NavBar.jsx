// rafce
// imp
import { NavLink } from "react-router-dom"
import LightComponent from '../LightComponent/LightComponent'

const NavBar = (props) => {
	const { theme, switchTheme } = props
	return (
		<nav>
			<ul className='flex'>
				<li className='pr-2 font-bold text-lg'>
					<NavLink to='/' activeClassName='text-red-700' exact>
						Popular
					</NavLink>
				</li>
				<li className='pr-2 font-bold text-lg'>
					<NavLink to='/battle' activeClassName='text-red-700'>
						Battle
					</NavLink>
				</li>
			</ul>
			<LightComponent theme={theme} switchTheme={switchTheme} />
		</nav>
	)
}

export default NavBar
