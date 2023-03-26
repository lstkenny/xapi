export async function apiRequest(data) {
	/* request method */
	const options = {
		method: data.get("method") || "GET",
		cache: "no-cache",
		headers: {}
	}
	/* request payload */
	if (data.get("payload")) {
		options.headers["Content-Type"] = "application/json"
		options.body = data.get("payload")
	}
	/* authorization */
	if (data.get("bearer_token")) {
		options.headers["Authorization"] = `Bearer ${data.get("bearer_token")}`
	}
	if (data.get("basic_user")) {
		options.headers["Authorization"] = `Basic ${btoa(data.get("basic_user") + ":" + data.get("basic_password"))}`
	}
	const response = await fetch(data.get("url"), options)
	const contentType = response.headers.get("content-type")
	if (contentType && contentType.includes("application/json")) {
		return response.json()
	} else {
		return response.text()
	}
}