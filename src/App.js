// Importar dependencias de librerias externas
import { Routes, Route, HashRouter, Link, NavLink } from "react-router-dom";

// Importar rutas desde el archivo de routes
import { routes } from "./routes.js";

// Impportar layout para el body
import BodyLayout from "./layout/BodyLayout";

// Importar componentes desde la carpta de components
import ButtonNav from "./components/ButtonNav";

// Importar estilos
import "./App.css";

function App() {
	return (
		<HashRouter>
			{/* Navegador que tiene todos los links existentes */}
			<nav className="border-and-shadow">
				<NavLink to="/">Home</NavLink>
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
								<br />
								<Link to="/TableQuestions">TableQuestions</Link>
							</div>
						</BodyLayout>
					}
					exact
				/>
				{routes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						element={
							<BodyLayout bgColor={route.bgColor}>
								<route.component />
							</BodyLayout>
						}
						exact={route.exact}
					/>
				))}
			</Routes>
		</HashRouter>
	);
}

export default App;
