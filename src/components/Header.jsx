import React from "react";
import Icon from "../img/Icon.png"
const Header = () => {
	return(
	<header>
		<div className="headerContainer">
			<div className="headerContent">
				<div className="icon">
					<a href="/">
						<img src={Icon} alt="dad"/>
					</a>
				</div>
			</div>
		</div>
	</header>
	)
}
export default Header;