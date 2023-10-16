import React, { useEffect, useState } from "react";

import { useUserStore } from "../context/UserStore";

import "./TablesStyles.css";

// Importar componente para mostrar el rol del usuario
import Role from "../components/Role";
import LoadingTable from "../components/LoadingTable";

function UserTable() {
	const [isLoading, setIsLoading] = useState(true);

	const { users, getAllUsers } = useUserStore();

	useEffect(() => {
		getAllUsers().then(() => setIsLoading(false));
	}, [getAllUsers]);

	return (
		<div className="table-admin-1">
			<div className="table-admin-2">
				<div className="table-admin-3">
					<table className="table table-hover table-striped m-0">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Nombre</th>
								<th scope="col">Puntos</th>
								<th scope="col">Rol</th>
							</tr>
						</thead>
						<tbody>
							{isLoading === true ? (
								<LoadingTable colSpan="4" rowSpan="3" />
							) : (
								users.map((user, index) => (
									<tr key={index}>
										<th scope="row">{user.id_user}</th>
										<td>{user.username}</td>
										<td>{user.password}</td>
										<td>
											{user.role === 1 ? <Role role="admin" /> : <Role />}
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default UserTable;
