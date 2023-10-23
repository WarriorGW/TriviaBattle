import React from "react";

const Room = (props) => {
	return (
		<div className="container">
			<div className="d-flex my-3 my-sm-5 justify-content-center">
				<img
					className="img-trophy"
					alt="Trofeo Leaderbord"
					src={require("../assets/trophy.png")}
				/>
				<h1 className="title-worldscore my-auto">LEADER BOARD</h1>
				<img
					className="img-trophy"
					alt="Trofeo Leaderbord"
					src={require("../assets/trophy.png")}
				/>
			</div>
			<div className="card-worldscore-1 mb-3 mb-sm-5">
				<div className="card-worldscore-2">
					<div className="card-worldscore-3">
						<table className="table table-hover table-striped m-0">
							<thead>
								<tr>
									<th scope="col">Lugar</th>
									<th scope="col" className="w-25">
										Nombre
									</th>
									<th scope="col">Puntos</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>
										<img
											className="img-profile-worldscore"
											src={require(`../assets/profiles/${props.img}.png`)}
											alt="external-wolf-animal-faces-icongeek26-flat-icongeek26"
										/>
										{props.username}
									</td>
									<td>
										{props.score}/{props.totalScore}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Room;
