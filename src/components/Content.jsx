import React,{useState} from "react";
import { Link } from "react-router-dom";
const Content = () => {
	const [open,setOpen] = useState(false)

	const SelectGrupOpen = () => {
		setOpen(!open)
	}


	return(
		<main>
			<div className="Content">
				<div className="ContentConteiner">
						<button className={`SelectGrup ${open ? "open" : ""}`} 
						onClick={SelectGrupOpen}>Расписание групп</button>
				{open&& (
					<div className="openContent"> 
						<ul>
							<a href="/GrupOne"><li>1 группа</li></a>
							<a href="/GrupTwo"><li>2 группа</li></a>
						</ul>
					</div>
				)}
				</div>
			</div>
		</main>
	)
}

export default Content;