import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {FaUsers} from "react-icons/fa";
import "./Card.css";	


const Card3= ()=> {
return (
	<div style={{}}>
	
	<Card
		style={{
		width: 300,
		marginLeft:"10px",
		backgroundColor: "White",
		}}
	>
		<CardContent>
		<Typography
			style={{ fontSize: 14 }}
			color="textSecondary"
			gutterBottom
		>
			SALES
		</Typography>
		<div className="type">
		
		<Typography variant="h5" component="h2" className="card1">
			924
		</Typography>
		<FaUsers className="icon3" />
		</div>
		</CardContent>
		
	</Card>
	</div>
);
}
export default Card3;