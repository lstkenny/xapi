import Spinner from "react-bootstrap/Spinner"

export default function Loader({ loading }) {
	if (!loading) {
		return null
	}
	return (
		<div className="d-flex justify-content-center py-5">
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
	)
}