// Functional Component
const FormBattle = (props) => {
	const { number } = props
	return (
		<form>
			<label htmlFor={`player${number}`} >Player {number}</label>
			<input type="text" id={`player${number}`} />
			<button>Submit</button>
		</form>
	)
}

export default FormBattle