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

	return (
		<>
			<Button />
		</>
	)
}

export default App
