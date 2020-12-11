import { useState, useEffect } from "react"
import SelectLanguage from "../../components/SelectLanguage"
import RepoCard from "../../components/RepoCard"
// import { withLayout } from "../../hoc/Layout"

const Popular = () => {
	const [repositories, setRepositories] = useState([])

	const getData = () => {
		fetch(
			"https://api.github.com/search/repositories?q=stars:%3E1+language:all&sort=starts&order=desc&type=Repositorie"
		)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setRepositories(data.items)
			})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			<SelectLanguage />
			<section className="flex flex-wrap">
				{repositories.map((repo, index) => (
					<RepoCard index={index + 1} key={repo.id} info={repo} />
				))}
			</section>
		</div>
	)
}

// export default withLayout(Popular)
export default Popular
