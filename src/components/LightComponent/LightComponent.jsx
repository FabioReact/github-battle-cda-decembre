import { useState, useContext } from "react"
import ThemeContext from "../../context/theme-context"

const LightComponent = (props) => {
	// Etape 4 (Fin): j'importe le contexte auquel je souhaite avoir accès 
	const { theme, switchTheme } = useContext(ThemeContext)

	const [image, setImage] = useState("Torche")

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