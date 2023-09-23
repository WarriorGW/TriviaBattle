// Importar dependencias de librerias externas
import { Routes, Route, HashRouter, Link } from "react-router-dom";

// Importar paginas desde la carpeta de pages
import AddQuestion from "./pages/AddQuestion";
import InGame from "./pages/InGame";
import JoinRoom from "./pages/JoinRoom";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import WaitRoom from "./pages/WaitRoom";
import WorldScore from "./pages/WorldScore";

// Impportar layout para el body
import BodyLayout from "./layout/BodyLayout";

// Importar componentes desde la carpta de components
import ButtonNav from "./components/ButtonNav";
import ChangeUsername from "./pages/ChangeUsername";

function App() {
	return (
		<HashRouter>
			{/* Navegador que tiene todos los links existentes */}
			<nav className="border-and-shadow">
				<Link to="/">Home</Link>
				<ButtonNav textInside="Unirse a sala" to="/JoinRoom" />
			</nav>
			{/* Aqui es donde se crean las rutas usando react-router-dom */}
			<Routes>
				<Route
					path="/"
					element={
						<BodyLayout bgColor="#8630a5">
							<div className="container">
								<h1>Sala de home?</h1>
								<Link to="/Juego">Juego</Link>
								<br />
								<Link to="/Register">Register</Link>
								<br />
								<Link to="/LogIn">LogIn</Link>
								<br />
								<Link to="/WorldScore">Puntaje Global</Link>
								<br />
								<Link to="/AddQuestion">Agregar pregunta</Link>
								<br />
								<Link to="/WaitRoom">Crear sala</Link>
								<br />
								<Link to="/ChangeUsername">Cambiar username</Link>
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
						<BodyLayout bgColor="#834798">
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
				<Route
					path="/WaitRoom"
					element={
						<BodyLayout bgColor="#b037db">
							<WaitRoom />
						</BodyLayout>
					}
				/>
				<Route
					path="/ChangeUsername"
					element={
						<BodyLayout bgColor="#b037db">
							<ChangeUsername />
						</BodyLayout>
					}
				/>
			</Routes>
		</HashRouter>
	);
}

export default App;
