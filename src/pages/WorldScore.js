import React from "react";
import "./css/WorldScoreStyle.css";

function WorldScore() {
	return (
		<div className="container">
			<div className="d-flex my-5 justify-content-center">
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
			<div className="card-worldscore-1">
				<div className="card-worldscore-3">
					<div className="card-worldscore-2">
						<table className="table table-hover table-striped m-0">
							<thead>
								<tr className="table-warning">
									<th scope="col">Lugar</th>
									<th scope="col" className="w-25">
										Nombre
									</th>
									<th scope="col">Puntos</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">
										<img
											className="img-medals"
											src={require("../assets/first-place.png")}
											alt="Medalla Primer lugar"
										/>
									</th>
									<td>
										<div>
											<div className="d-flex justify-content-start">
												<img
													className="img-profile-worldscore"
													src={require("../assets/profiles/abeja.png")}
													alt="external-wolf-animal-faces-icongeek26-flat-icongeek26"
												/>
												Fernando
											</div>
										</div>
									</td>
									<td>1000 pts.</td>
								</tr>
								<tr className="table-warning">
									<th scope="row">
										<img
											className="img-medals"
											src={require("../assets/second-place.png")}
											alt="Medalla Segundo lugar"
										/>
									</th>
									<td>
										<div className="d-flex justify-content-start">
											<img
												className="img-profile-worldscore"
												src={require("../assets/profiles/woodpecker.png")}
												alt="external-rabbit-animal-faces-icongeek26-flat-icongeek26"
											/>
											Chino
										</div>
									</td>
									<td>1000 pts.</td>
								</tr>
								<tr>
									<th scope="row">
										{" "}
										<img
											className="img-medals"
											src={require("../assets/third-place.png")}
											alt="Medalla Tercer lugar"
										/>
									</th>
									<td>
										<div className="d-flex justify-content-start">
											<img
												className="img-profile-worldscore"
												src={require("../assets/profiles/angry-dog.png")}
												alt="external-dog-animal-faces-icongeek26-flat-icongeek26"
											/>
											SAI
										</div>
									</td>
									<td>800 pts.</td>
								</tr>
								<tr className="table-warning">
									<th scope="row">4</th>
									<td>
										<div className="d-flex justify-content-start">
											<img
												className="img-profile-worldscore"
												src={require("../assets/profiles/ballena.png")}
												alt="external-panda-animal-faces-icongeek26-flat-icongeek26"
											/>
											Johann
										</div>
									</td>
									<td>630 pts.</td>
								</tr>
								<tr>
									<th scope="row">5</th>
									<td>
										<div className="d-flex justify-content-start">
											<img
												className="img-profile-worldscore"
												src={require("../assets/profiles/cabeza-de-avestruz-en-la-arena.png")}
												alt="external-gorilla-animal-faces-icongeek26-flat-icongeek26"
											/>
											Paula
										</div>
									</td>
									<td>500 pts.</td>
								</tr>
								<tr className="table-warning">
									<th scope="row">6</th>
									<td>
										<div className="d-flex justify-content-start">
											<img
												className="img-profile-worldscore"
												src={require("../assets/profiles/capybara.png")}
												alt="external-cheetah-animal-faces-icongeek26-flat-icongeek26"
											/>
											Faby
										</div>
									</td>
									<td>400 pts.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WorldScore;
