import { useReducer } from "react"

// Page Login utilisant useReducer à la place de useState
const initialState = {
	username: "",
	password: "secret",
	errorPassword: "",
}

// Un reduceur est un peu comme une recette de cuisine
// On prend plusieurs ingrédients (farine, oeuf, sucre, etc...) et cela les réduit à un seul élément (un gateau)
const reducer = (state, action) => {
	console.log(action)
	if (action.type === "CHANGE_PASSWORD") {
		return {
			...state,
			password: action.value,
		}
	} else if (action.type === "CHANGE_USERNAME") {
		return {
			...state,
			username: action.value,
		}
	}
	return state
}

const Login = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const onSubmitHandler = e => {
		e.preventDefault()
		// Appels à une API pour me connecter
	}

	const onChangePassword = e => {
		// setPassword(e.target.value)
		// Le paramètre de dispatch correspond au paramètre "action" de notre reducer
		dispatch({
			type: "CHANGE_PASSWORD",
			value: e.target.value,
		})
		if (e.target.value.length < 5) {
			// setErrorPassword("Mot de passe trop court")
		} else {
			// setErrorPassword("")
		}
	}

	const onChangeUsername = e => {
		dispatch({
			type: "CHANGE_USERNAME",
			value: e.target.value,
		})
	}

	return (
		<form onSubmit={onSubmitHandler}>
			<p>Login Page</p>
			<label className='block' htmlFor='username'>
				Username
			</label>
			<input
				type='text'
				id='username'
				value={state.username}
				onChange={onChangeUsername}
			/>
			<label className='block' htmlFor='password'>
				Password
			</label>
			<input
				type='text'
				id='password'
				value={state.password}
				onChange={onChangePassword}
			/>
			{<p>{state.errorPassword}</p>}
			<button>Login</button>
		</form>
	)
}

export default Login
