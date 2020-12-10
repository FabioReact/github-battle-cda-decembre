import { useState } from "react"

const SelectLanguage = () => {
	const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"]

	const [selectedLanguage, setSelectedLanguage] = useState("All")

	const selectCurrentLanguage = (language) => {
		console.log(`Tu as séléctionner ${language}`)
		setSelectedLanguage(language)
	}

	return (
		<ul className='flex justify-center'>
			{languages.map((language, index) => {
				let active = ""
				if (language === selectedLanguage) {
					active = "text-red-700"
				}
				// const active = language === selectedLanguage ? "text-red-700" : ""
				return (
					<li
						key={index}
						// Si language = selectedLanguage, alors je dois mettre ce li en rouge
						className={`p-2 font-bold text-lg cursor-default ${active}`}
						onClick={() => selectCurrentLanguage(language)}
					>
						{language}
					</li>
				)
			})}
		</ul>
	)
}

export default SelectLanguage
