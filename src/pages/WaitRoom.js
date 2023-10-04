import React from "react";
import "./css/WaitRoomStyle.css";

function WaitRoom() {
	return (
		<div className="container text-center">
			<h1 className="title-wait">El juego iniciara pronto</h1>
			<div className="loader mx-auto">
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
			</div>
		</div>
	);
}

export default WaitRoom;
