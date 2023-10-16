import React from "react";
import "./css/RoleStyle.css";

function Role(props) {
	return (
		<>
			{props.role === "admin" ? (
				<div className="admin-role">{props.role}</div>
			) : (
				<div className="user-role">usuario</div>
			)}
		</>
	);
}

export default Role;
