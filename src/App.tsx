import "./App.css"

function convertToCurrency(amount: number, currency: string): string {
	// ...
	return `${amount}${currency}`
}

convertToCurrency(5, "eur")
convertToCurrency(5, "$")

function App() {
	return <></>
}

export default App
