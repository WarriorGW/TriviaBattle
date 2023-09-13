import "./App.css";
import { Routes, Route, HashRouter, Link } from "react-router-dom";
// import JoinForms from "./components/JoinForms";
import UnirseSala from "./pages/UnirseSala";

import BodyLayout from "./layout/BodyLayout";
import ButtonNav from "./components/ButtonNav";

function App() {
	return (
		<HashRouter>
			<nav className="border-and-shadow">
				<Link to="/">Home</Link>
				<Link to="/ProgressChino">Progreso del gei</Link>
				<Link to="/Juego">Juego</Link>
				<ButtonNav textInside="Crear sala" />
			</nav>
			<Routes>
				<Route
					path="/"
					element={
						<BodyLayout backgroundColor="#8630a5">
							<div className="container">
								<h1>Sala de home?</h1>
							</div>
						</BodyLayout>
					}
					exact
				/>
				<Route
					path="/ProgressChino"
					element={
						<BodyLayout backgroundColor="#d86aff">
							<UnirseSala />
						</BodyLayout>
					}
					exact
				/>
				<Route
					path="/Juego"
					element={
						<BodyLayout backgroundColor="#5f4b98">
							<div className="container">
								<h1>Aqui estara el juego</h1>
							</div>
						</BodyLayout>
					}
				/>
			</Routes>
		</HashRouter>
	);
}

export default App;
