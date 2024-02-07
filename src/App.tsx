import "./App.css"
import { useState } from "react"
import Button from "./components/Button"

type User = {
	_id: string
	username: string
	age: number
}

function App() {
	const [user, setUser] = useState<User | null>(null)

	const names = ["Bob", "John", "Alice"] as const
	names[0] = "bob"
	return (
		<>
			<Button />
		</>
	)
}

export default App
