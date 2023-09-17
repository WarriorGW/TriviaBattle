import "./App.css";
import { Routes, Route, HashRouter, Link } from "react-router-dom";

import AddQuestion from "./pages/AddQuestion";
import InGame from "./pages/InGame";
import JoinRoom from "./pages/JoinRoom";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import WorldScore from "./pages/WorldScore";

import BodyLayout from "./layout/BodyLayout";
import ButtonNav from "./components/ButtonNav";

function App() {
	return (
		<HashRouter>
			<nav className="border-and-shadow">
				<Link to="/">Home</Link>
				<Link to="/Juego">Juego</Link>
				<Link to="/Register">Register</Link>
				<Link to="/LogIn">LogIn</Link>
				<Link to="/WorldScore">WorldScore</Link>
				<Link to="/AddQuestion">AddQuestion</Link>
				<ButtonNav textInside="Unirse a sala" to="/JoinRoom" />
			</nav>
			<Routes>
				<Route
					path="/"
					element={
						<BodyLayout bgColor="#8630a5">
							<div className="container">
								<h1>Sala de home?</h1>
							</div>
						</BodyLayout>
					}
					exact
				/>
				<Route
					path="/JoinRoom"
					element={
						<BodyLayout bgColor="#8630a5">
							<JoinRoom />
						</BodyLayout>
					}
					exact
				/>
				<Route
					path="/Juego"
					element={
						<BodyLayout bgColor="#5f4b98">
							<InGame />
						</BodyLayout>
					}
				/>
				<Route
					path="/Register"
					element={
						<BodyLayout bgColor="#d86aff">
							<Register />
						</BodyLayout>
					}
				/>
				<Route
					path="/AddQuestion"
					element={
						<BodyLayout bgColor="#5f4b98">
							<AddQuestion />
						</BodyLayout>
					}
				/>
				<Route
					path="/LogIn"
					element={
						<BodyLayout bgColor="#d86aff">
							<LogIn />
						</BodyLayout>
					}
				/>
				<Route
					path="/WorldScore"
					element={
						<BodyLayout bgColor="#b037db">
							<WorldScore />
						</BodyLayout>
					}
				/>
			</Routes>
		</HashRouter>
	);
}

export default App;
