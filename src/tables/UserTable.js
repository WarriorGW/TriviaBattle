import React, { useEffect } from "react";

import { useUserStore } from "../context/UserStore";

function UserTable() {
	const { users, getAllUsers } = useUserStore();

	useEffect(() => {
		getAllUsers();
	}, [getAllUsers]);

	return (
		<table class="table-dark">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Username</th>
					<th scope="col">Password</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, index) => (
					<tr key={index}>
						<th scope="row">{user.id_user}</th>
						<td>{user.username}</td>
						<td>{user.password}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default UserTable;
