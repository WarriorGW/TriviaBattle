import React from "react";
import "./css/WaitRoomStyle.css";

function WaitRoom() {
	return (
		<div className="container text-center">
			<h1 className="title-wait">El juego iniciara pronto</h1>
			<div class="loader mx-auto">
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
			</div>
		</div>
	);
}

export default WaitRoom;
