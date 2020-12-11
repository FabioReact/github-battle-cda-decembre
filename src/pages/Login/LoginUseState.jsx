import { useState } from "react"

const Login = () => {
	const [username, setUsername] = useState("toto")
	const [password, setPassword] = useState("secret")
	const [errorPassword, setErrorPassword] = useState("")

	const onSubmitHandler = e => {
		e.preventDefault()
		// Appels à une API pour me connecter
	}

	const onChangePassword = e => {
		setPassword(e.target.value)
		if (e.target.value.length < 5) {
			setErrorPassword("Mot de passe trop court")
		} else {
			setErrorPassword("")
		}
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
				value={username}
				onChange={e => setUsername(e.target.value)}
			/>
			<label className='block' htmlFor='password'>
				Password
			</label>
			<input
				type='password'
				id='password'
				value={password}
				onChange={onChangePassword}
			/>
			{<p>{errorPassword}</p>}
			<button>Login</button>
		</form>
	)
}

export default Login
