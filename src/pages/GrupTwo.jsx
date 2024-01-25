import React, { useState } from "react";
import Header from "../components/Header";
import groupData from "./Data";
import "./Main.css"
const GrupTwo = () => {
	const [openOneGrup, setOpenOneGrup] = useState(false)
	const taggleOneGrup = () => {
		setOpenOneGrup(!openOneGrup)
		setOpenTwoGrup(false);
		setOpenThreeGrup(false);
	}

	const [openTwoGrup, setOpenTwoGrup] = useState(false)
	const taggleTwoGrup = () => {
		setOpenTwoGrup(!openTwoGrup)
		setOpenOneGrup(false);
		setOpenThreeGrup(false);
	}

	const [openThreeGrup, setOpenThreeGrup] = useState(false)
	const taggleThreeGrup = () => {
		setOpenThreeGrup(!openThreeGrup)
		setOpenOneGrup(false);
		setOpenTwoGrup(false);
	}


	return (
		<div className="GrupTwoConteiner">
			<Header />
			<div className="GrupTwoContent">
				<div className="Grup">
					<button className={`Grup-9-121 ${openOneGrup ? "open" : ""}`}
						onClick={taggleOneGrup}>9-121</button>
					<button className={`Grup-9-121g ${openTwoGrup ? "open" : ""}`}
						onClick={taggleTwoGrup}>9-121г</button>
					<button className={`Grup-9-115 ${openThreeGrup ? "open" : ""}`}
						onClick={taggleThreeGrup}>9-115</button>
				</div>
				{openOneGrup && (
					<div className="GrupOneTableOneConteiner">
					<table className="GrupOneTableOne">
						<thead>
							<tr>
							 	<th className="Clock">Время</th>
								<th className="week">Понедельник</th>
								<th className="week">Вторник</th>
								<th className="week">Среда</th>
								<th className="week">Четверг</th>
								<th className="week">Пятница</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>12:40</th>
								<th>Математика</th>
								<th>История</th>
								<th>Физра</th>
								<th>Самопознание</th>
								<th>История Казахстана</th>
							</tr>
							<tr>
								<th className="time">1:35</th>
								<th>Информатика</th>
								<th>Англ-яз</th>
								<th>Казаский</th>
								<th>Физика</th>
								<th>Математика</th>
							</tr>
							<tr>
								<th>2:20</th>
								<th>Химия</th>
								<th>Литература</th>
								<th>Русский</th>
								<th>Биология</th>
								<th>Русский</th>
							</tr>

						</tbody>
					</table>
				</div>
				)}

				{openTwoGrup && (
					<div className="GrupOneTableOneConteiner">
					<table className="GrupOneTableOne">
						<thead>
							<tr>
								 <th className="Clock">Время</th>
								<th className="week">Понедельник</th>
								<th className="week">Вторник</th>
								<th className="week">Среда</th>
								<th className="week">Четверг</th>
								<th className="week">Пятница</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>12:40</th>
								<th>История Казахстана</th>
								<th>Казаский</th>
								<th>Литература</th>
								<th>Математика</th>
								<th>Русский</th>
							</tr>
							<tr>
								<th className="time">1:35</th>
								<th>Казаский</th>
								<th>Русский</th>
								<th>Математика</th>
								<th>Информатика</th>
								<th>Биология</th>
							</tr>
							<tr>
								<th>2:20</th>
								<th>Русский</th>
								<th>Англ-яз</th>
								<th>Казаский</th>
								<th>История Казахстана</th>
								<th>Англ-яз</th>
							</tr>
						</tbody>
					</table>
				</div>
				)}

				{openThreeGrup && (
					<div className="GrupOneTableOneConteiner">
					<table className="GrupOneTableOne">
						<thead>
							<tr>
								 <th className="Clock">Время</th>
								<th className="week">Понедельник</th>
								<th className="week">Вторник</th>
								<th className="week">Среда</th>
								<th className="week">Четверг</th>
								<th className="week">Пятница</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>12:40</th>
								<th>История Казахстана</th>
								<th>Казаский</th>
								<th>Литература</th>
								<th>Математика</th>
								<th>Русский</th>
							</tr>
							<tr>
								<th className="time">1:35</th>
								<th>Математика</th>
								 <th>История Казахстана</th>
								 <th>Казахский</th>
								 <th>Литература</th>
								 <th>Русский</th>
							</tr>
							<tr>
								<th>2:20</th>
								<th>Англ-яз</th>
								 <th>Русский</th>
								 <th>Казахский</th>
								 <th>История Казахстана</th>
								 <th>Англ-яз</th>
							</tr>
						</tbody>
					</table>
				</div>
				)}

			</div>
		</div>
	)
}

export default GrupTwo;