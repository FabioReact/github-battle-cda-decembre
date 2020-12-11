import InstructionCard from "../../components/InstructionCard/InstructionCard"
import FormBattle from "../../components/FormBattle/FormBattle"

const Battle = () => {
	return (
		<>
			<InstructionCard
				instruction='Enter two Github users'
				image='user-group.png'
			/>
			<InstructionCard instruction='Battle' image='battle.png' />
			<InstructionCard
				instruction='See the winner'
				image='trophy.png'
			/>
			<h2>Players</h2>
			<FormBattle number='One' />
			<FormBattle number='Two' />
		</>
	)
}

export default Battle