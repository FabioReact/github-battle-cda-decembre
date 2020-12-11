import { createContext } from "react"
// Pour avoir accès à un contexte (que l'on peut voir comme un state partagé par plusieurs composant de notre application), il faut commencer par le créer:

// Etape 1: définition du contexte
const themeContext = createContext({
	theme: "light",
	switchTheme: () => {},
})
// Cette partie me sert à décrire à quoi va ressemble mon contexte, ce qu'il va contenir.

export default themeContext