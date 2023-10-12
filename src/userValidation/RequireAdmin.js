import { useLocation, Navigate } from "react-router-dom";
import useAuthStore from "../context/AuthStore";

const RequireAdmin = ({ allowedRoles, children }) => {
	const authUsername = useAuthStore((state) => state.authUsername);
	const authToken = useAuthStore((state) => state.authToken);
	const authRole = useAuthStore((state) => state.authRole);

	const location = useLocation();

	if (!authUsername || !authToken) {
		// Redirigir al usuario a la página de inicio de sesión si no está autenticado
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	if (allowedRoles && allowedRoles.length > 0) {
		// Verificar los roles permitidos si se especifican
		let hasPermission = parseInt(authRole, 10) === 1 ? true : false;
		// let hasPermission = false;

		if (!hasPermission) {
			// Redirigir al usuario a la página de no autorizado si no tiene permiso
			return <Navigate to="/unauthorized" state={{ from: location }} replace />;
		}
	}

	// Mostrar el contenido protegido si el usuario está autenticado y tiene permiso
	return <>{children}</>;
};

export default RequireAdmin;
