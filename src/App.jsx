import { useState } from "react"
import Navigation from "./components/Navigation.jsx"
import Loader from "./components/Loader.jsx"
import Output from "./components/Output.jsx"
import { apiRequest } from "./utils/request.js"

function App() {

	async function handleSubmit(e) {
		e.preventDefault()
		setResponse(null)
		setLoading(true)
		try {
			setResponse(
				await apiRequest(
					new FormData(e.target)
				)
			)
		} catch (e) {
			setResponse(e.toString())
		}
		setLoading(false)
	}
	const [loading, setLoading] = useState(false)
	const [response, setResponse] = useState(null)
	return (
		<>
			<Navigation onSubmit={handleSubmit} />
			<Loader loading={loading} />
			<Output data={response} />
		</>
	)
}

export default App
