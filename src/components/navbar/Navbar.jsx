import { AppBar, Toolbar, Stack, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
	return (
		<div>
			<AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 1 }}>
				<Toolbar
					variant="inherit"
					sx={{
						width: 1076,
						margin: "auto",
						px: "0px !important",
						py: "30px",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Stack direction="row" sx={{ flexGrow: 1 }}>
						<img
							src="https://flexiblog-agency.netlify.app/static/e1abc27a01b56d93f5fcdff62c84fdd7/edeef/logo.webp"
							alt="logo"
						/>
					</Stack>
					<Stack sx={{ flexGrow: 1 }} direction="row">
						<TextField
							placeholder="Discover new article & more.."
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
					<Stack
						sx={{ flexGrow: 1, alignItems: "center", justifyContent: "flex-end" }}
						direction="row"
						spacing={3}
					>
						<NavLink className="nav-link" to="/">
							Home
						</NavLink>
						<NavLink className="nav-link" to="/our-team">
							Our Team
						</NavLink>
						<NavLink className="nav-link" to="/contact">
							Contact
						</NavLink>
						<ThemeSwitch />
					</Stack>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
