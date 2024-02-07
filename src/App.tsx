import "./App.css"
import Button from "./components/Button"

function App() {
	return (
		<>
			<Button
				backgroundColor={"green"}
				textColor="blue"
				pillShape={true}
				padding={[15, 20, "px", 56]}
			/>
		</>
	)
}

export default App
