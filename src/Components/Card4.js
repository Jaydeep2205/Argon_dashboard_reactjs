import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {CgMathPercent} from "react-icons/cg";
import "./Card.css";

const Card4= ()=> {
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
			PERFORMANCE
		</Typography>
         <div className="type">
		
		<Typography variant="h5" component="h2" className="card1">
			49.65%
		</Typography>
		<CgMathPercent className="icon4" />
		</div>
		</CardContent>
		
	</Card>
	</div>
);
}
export default Card4;