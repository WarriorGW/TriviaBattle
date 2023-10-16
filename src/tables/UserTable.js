import React, { useEffect } from "react";

import { useUserStore } from "../context/UserStore";

import "./TablesStyles.css";

function UserTable() {
	const { users, getAllUsers } = useUserStore();

	useEffect(() => {
		const fetch = async () => {
			await getAllUsers();
		};
		fetch();
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
							{users.map((user, index) => (
								<tr key={index}>
									<th scope="row">{user.id_user}</th>
									<td>{user.username}</td>
									<td>{user.password}</td>
									<td>{user.role === 1 ? "admin" : "usuario"}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default UserTable;
