import styles from "./spinner.module.css"

const Spinner = () => {
	return (
		<div className={styles["lds-roller"]}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default Spinner
