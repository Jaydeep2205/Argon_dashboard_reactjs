import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {FaChartBar} from "react-icons/fa";
import "./Card.css";

const Card1= ()=> {
return (
	<div style={{}}>
	
	<Card
		style={{
		width: 300,
		backgroundColor: "White",
		marginLeft:"10px",
		}}
	>
		<CardContent>
		<Typography
			style={{ fontSize: 14 }}
			color="textSecondary"
			gutterBottom
		>
			TRAFFIC
		</Typography>
        
		<div className="type">	
		
		<Typography variant="h5" component="h2" style={{ display:"flex"}} className="card1">
			350,897
		</Typography>
		<FaChartBar className="icon1"/>
		</div>
		</CardContent>
		
	</Card>
	</div>
);
}
export default Card1;