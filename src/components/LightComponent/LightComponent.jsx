import { Component } from "react"

class LightComponent extends Component {

	state = {
		image: "Torche"
	}

	changeLight() {
		console.log(this)
		// this.state.image = "Ampoule" //INTERDIT!! On ne mute pas directement le state de react!
		const nextValue = this.state.image === "Torche" ? "Ampoule" : "Torche"
		this.setState({
			image: nextValue
		})
	}

	render() {
		console.log("Props:", this.props)
		console.log("State (état):", this.state)
		return (
			<div onClick={this.changeLight.bind(this)}>{this.state.image}</div>
		)
	}
}

export default LightComponent