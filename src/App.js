import "./App.css";
import JoinForms from "./components/JoinForms";

function App() {
	return (
		<>
			<nav className="border-shadow">
				<p></p>
				<button className="border-shadow button-nav">Crear sala</button>
			</nav>

			<div className="container">
				<JoinForms />
			</div>
		</>
	);
}

export default App;
