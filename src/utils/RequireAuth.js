import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuthStore from "./useAuthStore";

const RequireAuth = ({ allowedRoles }) => {
	const auth = useAuthStore((state) => state.auth);
	const login = useAuthStore((state) => state.login);
	const location = useLocation();

	if (!auth) {
		// Redirigir al usuario a la página de inicio de sesión si no está autenticado
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	if (allowedRoles && allowedRoles.length > 0) {
		// Verificar los roles permitidos si se especifican
		const hasPermission = auth.roles.some((role) =>
			allowedRoles.includes(role)
		);

		if (!hasPermission) {
			// Redirigir al usuario a la página de no autorizado si no tiene permiso
			return <Navigate to="/unauthorized" state={{ from: location }} replace />;
		}
	}

	// Mostrar el contenido protegido si el usuario está autenticado y tiene permiso
	return <Outlet />;
};

export default RequireAuth;
