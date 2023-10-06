import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../context/AuthStore";

const RequireAuth = ({ allowedRoles }) => {
	const auth = useAuthStore((state) => state.auth);

	const location = useLocation();

	// const roles = ["Admin", "User"];

	console.log(auth);

	if (!auth) {
		// Redirigir al usuario a la página de inicio de sesión si no está autenticado
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	if (allowedRoles && allowedRoles.length > 0) {
		// Verificar los roles permitidos si se especifican
		let hasPermission = auth == "admin" ? true : false;

		if (!hasPermission) {
			// Redirigir al usuario a la página de no autorizado si no tiene permiso
			return <Navigate to="/unauthorized" state={{ from: location }} replace />;
		}
	}

	// Mostrar el contenido protegido si el usuario está autenticado y tiene permiso
	return <Outlet />;
};

export default RequireAuth;
