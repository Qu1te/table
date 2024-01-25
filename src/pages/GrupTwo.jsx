import React, { useState } from "react";
import Header from "../components/Header";
import groupData from "./Data";
import "./Main.css"
const GrupTwo = () => {
	const [openOneGrup,setOpenOneGrup] = useState(false)
	const taggleOneGrup = () =>{
		setOpenOneGrup(!openOneGrup)
		setOpenTwoGrup(false);
    	setOpenThreeGrup(false);
	}

	const [openTwoGrup,setOpenTwoGrup] = useState(false)
	const taggleTwoGrup = () =>{
		setOpenTwoGrup(!openTwoGrup)
		setOpenOneGrup(false);
    	setOpenThreeGrup(false);
	}

	const [openThreeGrup,setOpenThreeGrup] = useState(false)
	const taggleThreeGrup = () =>{
		setOpenThreeGrup(!openThreeGrup)
		setOpenOneGrup(false);
    	setOpenTwoGrup(false);
	}


	return(
		<div className="GrupTwoConteiner">
			<Header/>
			<div className="GrupTwoContent">
				<div className="Grup">
					<button className={`Grup-9-121 ${openOneGrup ? "open" : ""}`} 
					onClick={taggleOneGrup}>9-121</button>
					<button className={`Grup-9-121g ${openTwoGrup ? "open" : ""}`} 
					onClick={taggleTwoGrup}>9-121г</button>
					<button className={`Grup-9-115 ${openThreeGrup ? "open" : ""}`}
					 onClick={taggleThreeGrup}>9-115</button>
				</div>
			{openOneGrup&&(
				<div>
					<p>4</p>
				</div>
			)}

			{openTwoGrup&&(
				<div>
					<p>5</p>
				</div>
			)}

			{openThreeGrup&&(
				<div>
					<p>6</p>
				</div>
			)}

			</div>
		</div>
	)
}

export default GrupTwo;