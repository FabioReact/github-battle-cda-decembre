import { useState } from "react"

// Functional Component
const FormBattle = props => {
	const { number } = props
	/*useState est une fonction qui permet de créer un état (state) dans un functional component
	useState prend comme unique paramètre l'état initial voulu
	useState me retourne un tableau comprenant deux éléments
	le premier élément de mon tableau est la valeur actuelle de mon state
	le second élément de mon tableau est une fonction qui me permet de mettre à jour mon state
	*/
	/* const monState = useState("fabio")
	const inputValue = monState[0]
	const setInputValue = monState[1]
	const [inputValue, setInputValue] = monState */
	const [inputValue, setInputValue] = useState("")

	const onChangeInput = event => {
		setInputValue(event.target.value)
	}

	const onSubmitForm = event => {
		event.preventDefault()
		console.log("Formulaire soumis:", inputValue)
	}

	return (
		<form onSubmit={onSubmitForm}>
			<label htmlFor={`player${number}`}>Player {number}</label>
			<input
				value={inputValue}
				type='text'
				id={`player${number}`}
				onChange={onChangeInput}
			/>
			<button>Submit</button>
			{/* On peut utiliser une ternaire pour tester une condition */}
			{inputValue.length > 2 ? null : (
				<span
					style={{ fontSize: ".675rem", color: "red", display: "block" }}
				>
					Le champs joueur fait moins de 3 caractères
				</span>
			)}
		</form>
	)
}

export default FormBattle
