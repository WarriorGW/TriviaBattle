// Importar cosas de react
import { useEffect } from "react";

// Importar dependencias de librerias externas
import { Routes, Route, HashRouter, NavLink } from "react-router-dom";

// Importar rutas
import { publicRoutes } from "./routes/public.routes.js";
import { reqLogInRoutes } from "./routes/reqLogIn.routes.js";
import { privateRoutes } from "./routes/private.routes.js";

// Impportar layout para el body
import BodyLayout from "./layout/BodyLayout";

// Importar componentes desde la carpta de components
import ButtonNav from "./components/ButtonNav";

// Importar estilos
import "./App.css";

// Importar links a todas las paginas
import Links from "./Links.js";

// Importar componente para proteger rutas privadas
import RequireAdmin from "./userValidation/RequireAdmin.js";
import RequireLogin from "./userValidation/RequireLogIn.js";

// Importar store de Zustand
import useAuthStore from "./context/AuthStore";

// Importar logo de la trivia
import logo from "./assets/home/tricia-remade-icon.svg";

function App() {
	const localToken = localStorage.getItem("authToken");
	const localUsername = localStorage.getItem("authUsername");
	const localRole = localStorage.getItem("authRole");
	const localImg = localStorage.getItem("authImg");
	const localId = localStorage.getItem("authId");
	const authLogin = useAuthStore((state) => state.authLogin);
	useEffect(() => {
		if (localToken) {
			// Establecer la autenticación si se encuentra un token en localStorage

			authLogin(localUsername, localToken, localRole, localImg, localId);

			console.log(localUsername, localRole, localImg, localId);
		}
	}, [localToken, authLogin, localRole, localUsername, localImg, localId]);

	return (
		<HashRouter>
			{/* Navegador que tiene todos los links existentes */}
			<nav className="border-and-shadow">
				<NavLink to="/">
					<img width="38" height="38" src={logo} alt="Logo" />
					Home
				</NavLink>
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
				{/* Public routes */}
				{publicRoutes.map((route, index) => (
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
				{/* reqLogIn routes */}
				{reqLogInRoutes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						element={
							// Utiliza RequireLogin para proteger las rutas reqLogIn
							<BodyLayout bgColor={route.bgColor}>
								<RequireLogin>
									<route.component />
								</RequireLogin>
							</BodyLayout>
						}
						exact={route.exact}
					/>
				))}
				{/* Private routes */}
				{privateRoutes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						element={
							// Utiliza RequireAdmin para proteger las rutas privadas
							<BodyLayout bgColor={route.bgColor}>
								<RequireAdmin allowedRoles={["admin"]}>
									<route.component />
								</RequireAdmin>
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
