function handleFetchRequest() {
	const result =fetch("https://baconipsum.com/api/?type=meat-and-filler")
		.then(response => {
			return response.json()
		}).then(data => {
				console.log("resolved data", data)
		}
	)
		console.log(result)

}