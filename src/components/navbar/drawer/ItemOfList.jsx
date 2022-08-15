import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

const ItemOfList = ({ link, icon, text }) => {
	return (
		<ListItem disablePadding>
			<ListItemButton>
				<ListItemIcon>{icon}</ListItemIcon>
				<NavLink className="nav-link" to={link}>
					<ListItemText primary={text} />
				</NavLink>
			</ListItemButton>
		</ListItem>
	);
};

export default ItemOfList;
