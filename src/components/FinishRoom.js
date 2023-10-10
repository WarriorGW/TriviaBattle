import React from "react";
import "./css/FinishRoomStyle.css";

const results = [
	{ place: 1, name: "Player 1", score: 100, profile: "ciguena" },
	{ place: 2, name: "Player 2", score: 90, profile: "ciguena" },
	{ place: 3, name: "Player 3", score: 80, profile: "ciguena" },
	{ place: 4, name: "Player 4", score: 70, profile: "ciguena" },
	{ place: 5, name: "Player 5", score: 60, profile: "ciguena" },
	{ place: 6, name: "Player 6", score: 50, profile: "ciguena" },
];

const Room = () => {
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
								{results.map((user, index) => (
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
										<td>{user.score}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Room;
