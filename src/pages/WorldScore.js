import React from "react";
import "./css/WorldScoreStyle.css";

// Importar lista de puntajes
import { leaderboard } from "../lists/WorldScore";

function WorldScore() {
	const assignMedal = (place) => {
		switch (place) {
			case 1:
				return require(`../assets/first-place.png`);
			case 2:
				return require(`../assets/second-place.png`);
			case 3:
				return require(`../assets/third-place.png`);
			default:
				return "";
		}
	};
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
								{leaderboard.map((user, index) => (
									<tr key={index}>
										<th scope="row">
											{user.place <= 3 ? (
												<img
													className="img-medals"
													src={assignMedal(user.place)}
													alt="M"
												/>
											) : (
												user.place
											)}
										</th>
										<td>
											<div>
												<div className="d-flex justify-content-start">
													<img
														className="img-profile-worldscore"
														src={require(`../assets/profiles/${user.profile}.png`)}
														alt="external-wolf-animal-faces-icongeek26-flat-icongeek26"
													/>
													<div className="align-self-center m-0">
														{user.name}
													</div>
												</div>
											</div>
										</td>
										<td>{user.points} pts.</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WorldScore;
