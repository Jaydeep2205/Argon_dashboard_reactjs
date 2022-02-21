import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {FaChartPie} from "react-icons/fa";
import "./Card.css";

const Card2= ()=> {
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
			NEW USERS
		</Typography>
		<div className="type">
		
		<Typography variant="h5" component="h2" className="card1">
			2,356
		</Typography>
		<FaChartPie className="icon2"/>
		</div>
		</CardContent>
		
	</Card>
	</div>
);
}
export default Card2;