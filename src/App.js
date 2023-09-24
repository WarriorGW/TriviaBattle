// Importar dependencias de librerias externas
import { Routes, Route, HashRouter, NavLink } from "react-router-dom";

// Importar rutas desde el archivo de routes
import { routes } from "./routes.js";

// Impportar layout para el body
import BodyLayout from "./layout/BodyLayout";

// Importar componentes desde la carpta de components
import ButtonNav from "./components/ButtonNav";

// Importar estilos
import "./App.css";

// Importar links
import Links from "./Links.js";

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
							<Links />
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
