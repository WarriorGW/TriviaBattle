import { useLocation, Navigate } from "react-router-dom";
import useAuthStore from "../context/AuthStore";

const RequireLogin = ({ children }) => {
	const authUsername = useAuthStore((state) => state.authUsername);
	const authToken = useAuthStore((state) => state.authToken);

	const location = useLocation();

	if (!authUsername || !authToken) {
		// Redirigir al usuario a la página de inicio de sesión si no está autenticado
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	// Mostrar el contenido protegido si el usuario está autenticado y tiene permiso
	return <>{children}</>;
};

export default RequireLogin;
