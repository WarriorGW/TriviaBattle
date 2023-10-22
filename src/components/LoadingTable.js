import React from "react";

function LoadingTable(props) {
	return (
		<tr>
			<td
				colSpan={props.colSpan}
				rowSpan={props.rowSpan}
				className="text-center"
			>
				<div className="spinner-border text-primary" role="status"></div>
			</td>
		</tr>
	);
}

export default LoadingTable;
