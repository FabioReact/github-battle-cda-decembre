import styles from "./instructionCard.module.css"

const InstructionCard = (props) => {
	return (
		<div className={styles.instructionCard}>
			<p>{props.instruction}</p>
			<div className="bg-gray-200 rounded inline-block">
				<img className="p-8" src={props.image} alt=""/>
			</div>
		</div>
	)
}

export default InstructionCard