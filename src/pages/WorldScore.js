import React, { useEffect, useState } from "react";

// Importar funcion para asignar medallas
import assignMedal from "../utils/assignMedal";

// Importar el contexto
import { useScoreStore } from "../context/ScoresStore";

// Importar componente para poner cuando esta cargando la tabla
import LoadingTable from "../components/LoadingTable";

import "./css/WorldScoreStyle.css";

function WorldScore() {
	const { getAllScores, scores } = useScoreStore();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getAllScores().then(() => setIsLoading(false));
	}, [getAllScores]);

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
									<th scope="col">Totales</th>
									<th scope="col">Jugadas</th>
								</tr>
							</thead>
							<tbody>
								{isLoading === true ? (
									<LoadingTable colSpan="5" rowSpan="3" />
								) : (
									scores.map((user, index) => (
										<tr key={index}>
											<th scope="row">
												{index + 1 <= 3 ? (
													<img
														className="img-medals"
														src={assignMedal(index + 1)}
														alt="M"
													/>
												) : (
													index + 1
												)}
											</th>
											<td>
												<div>
													<div className="d-flex justify-content-start">
														<img
															className="img-profile-worldscore"
															src={require(`../assets/profiles/${user.img}.png`)}
															alt="external-wolf-animal-faces-icongeek26-flat-icongeek26"
														/>
														<div className="align-self-center m-0">
															{user.username}
														</div>
													</div>
												</div>
											</td>
											<td>{user.score}</td>
											<td>{user.total_score}</td>
											<td>{user.total_plays}</td>
										</tr>
									))
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WorldScore;
