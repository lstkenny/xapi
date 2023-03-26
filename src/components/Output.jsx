import hljs from "highlight.js/lib/common"

export default function Output({ data }) {
	if (!data) {
		return null
	}
	let __html
	if (typeof data === "string") {
		__html = hljs.highlight(
			data,
			{ language: 'html' }
		).value
	} else {
		__html = hljs.highlight(
			JSON.stringify(data, null, 2), 
			{ language: 'json' }
		).value
	}
	return (
		<pre className="p-4">
			<code dangerouslySetInnerHTML={{ __html }}></code>
		</pre>
	)
}
