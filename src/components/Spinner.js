import loading from './loading.gif'

const Spinner = () => {
		return (
			<div className="text-center">
				<img className="my-2" src={loading} alt="loading gif" style={{ width: "2.92rem", height: "auto" }} />
			</div>
		)
	}

export default Spinner
