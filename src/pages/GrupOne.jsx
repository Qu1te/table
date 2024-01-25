import React, { useState } from "react";
import Header from "../components/Header";
import groupData from "./Data";
import "./Main.css"
const GrupOne = () => {
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
		<div className="GrupOneConteiner">
			<Header/>
			<div className="GrupOneContent">
				<div className="Grup">
					<button className={`Grup-9-111 ${openOneGrup ? "open" : ""}`} 
					onClick={taggleOneGrup}>9-111</button>
					<button className={`Grup-9-111g ${openTwoGrup ? "open" : ""}`} 
					onClick={taggleTwoGrup}>9-111г</button>
					<button className={`Grup-9-113 ${openThreeGrup ? "open" : ""}`}
					 onClick={taggleThreeGrup}>9-113</button>
				</div>
			{openOneGrup&&(
				<div>
					<p>1</p>
				</div>
			)}

			{openTwoGrup&&(
				<div>
					<p>2</p>
				</div>
			)}

			{openThreeGrup&&(
				<div>
					<p>3</p>
				</div>
			)}

			</div>
		</div>
	)
}

export default GrupOne;