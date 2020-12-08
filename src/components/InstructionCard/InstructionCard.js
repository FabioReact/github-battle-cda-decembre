import styles from "./instructionCard.module.css"

const InstructionCard = (props) => {
	return (
		<div className={styles.instructionCard}>
			<span>{props.instruction}</span>
			<div>
				<img src={props.image} alt=""/>
			</div>
		</div>
	)
}

export default InstructionCard