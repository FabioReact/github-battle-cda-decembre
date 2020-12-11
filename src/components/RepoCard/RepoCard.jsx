const RepoCard = (props) => {
	const { info, index } = props
	const { name, owner: {avatar_url}, forks, open_issues, stargazers_count } = info
	return (
		<div className="w-48 bg-gray-200 text-center m-5">
			<span className="text-3xl">#{index}</span>
			<img className="w-32 mx-auto py-3" src={avatar_url} alt={`Profile of repository ${name}`}/>
			<div>
				<em className="text-lg font-bold text-red-700">{name}</em>
				<ul className="py-2">
					<li>{name}</li>
					<li>{stargazers_count} stars</li>
					<li>{forks} forks</li>
					<li>{open_issues} open issues</li>
				</ul>
			</div>
		</div>
	)
}

export default RepoCard