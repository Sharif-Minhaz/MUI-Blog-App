import React, { useState } from "react";

import {
	Box,
	Stack,
	InputAdornment,
	Drawer,
	List,
	Divider,
	Typography,
	TextField,
	IconButton,
} from "@mui/material";
import {
	Home,
	PermContactCalendar,
	Groups,
	Article,
	TipsAndUpdates,
	ManageHistory,
	MenuOpen,
	Search,
	AddToHomeScreen,
} from "@mui/icons-material";
import ItemOfList from "./ItemOfList";

export default function TemporaryDrawer({ className }) {
	const [state, setState] = useState({ right: false });

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.key === "Tab" || event.key === "Shift") {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
		>
			<Typography variant={"h6"} pt={2} pl={2}>
				Main Menu
			</Typography>
			<List onClick={toggleDrawer(anchor, false)}>
				<ItemOfList link="/" icon={<Home />} text="Home" />
				<ItemOfList link="/our-team" icon={<Groups />} text="Our Team" />
				<ItemOfList link="/contact" icon={<PermContactCalendar />} text="Contact" />
			</List>
			<Divider />
			<Typography variant={"h6"} pt={2} pl={2}>
				Topics
			</Typography>
			<List onClick={toggleDrawer(anchor, false)}>
				<ItemOfList link="/case-studies" icon={<Article />} text="Case Studies" />
				<ItemOfList link="/innovation" icon={<TipsAndUpdates />} text="Innovation" />
				<ItemOfList link="/management" icon={<ManageHistory />} text="Management" />
				<ItemOfList link="/advertising" icon={<AddToHomeScreen />} text="Advertising" />
			</List>
			<Stack sx={{ padding: 2 }} direction="row">
				<TextField
					placeholder="Discover article & more.."
					id="outlined-start-adornment"
					sx={{ width: "100%", backgroundColor: "#E2E8F0" }}
					size="small"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<Search />
							</InputAdornment>
						),
					}}
				/>
			</Stack>
		</Box>
	);

	return (
		<React.Fragment>
			<IconButton
				className={className}
				onClick={toggleDrawer("right", true)}
				aria-label="drawer"
			>
				<MenuOpen />
			</IconButton>
			<Drawer
				className={className}
				anchor={"right"}
				open={state["right"]}
				onClose={toggleDrawer("right", false)}
			>
				{list("right")}
			</Drawer>
		</React.Fragment>
	);
}
