import { Component } from "react"

class LightComponent extends Component {

	constructor(props) {
		super(props)
		// this.changeLight = this.changeLight.bind(this)
		this.state = {
			image: "Torche"
		}
	}
	

	changeLight = () => {
		// this.state.image = "Ampoule" //INTERDIT!! On ne mute pas directement le state de react!
		const nextValue = this.state.image === "Torche" ? "Ampoule" : "Torche"
		this.setState({
			image: nextValue
		})
	}

	render() {
		return (
			<div onClick={this.changeLight}>{this.state.image}</div>
		)
	}
}

export default LightComponent