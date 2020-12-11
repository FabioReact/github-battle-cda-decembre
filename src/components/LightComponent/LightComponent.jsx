import { useState } from "react"

const LightComponent = (props) => {
	const { theme, switchTheme } = props

	const [image, setImage] = useState("Ampoule")

	const changeLight = () => {
		const nextValue = image === "Torche" ? "Ampoule" : "Torche"
		setImage(nextValue)
		switchTheme((theme) => {
			return (theme === "light" ? "dark" : "light")
		})
	}

	return (
		<div onClick={changeLight}>{image}</div>
	)
}

export default LightComponent