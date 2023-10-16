import React from "react";

function LoadingTable(props) {
	return (
		<tr>
			<td
				colSpan={props.colSpan}
				rowSpan={props.rowSpan}
				className="text-center"
			>
				<div className="spinner-border text-primary" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</td>
		</tr>
	);
}

export default LoadingTable;
