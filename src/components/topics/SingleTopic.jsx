import * as React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	color: theme.palette.text.secondary,
	borderRadius: "14px",
	"&:hover": {
		boxShadow:
			"0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
		"& .css-1bvywtx-MuiStack-root": {
			"& .MuiSvgIcon-root": {
				color: "#718096",
			},
		},
	},
}));

export default function SingleTopic({ icon, title, link }) {
	return (
		<Link to={link} className="nav-link">
			<Item className="transition" elevation={1}>
				<Stack sx={{ p: 2, justifyContent: "center", alignItems: "center", gap: "13px" }}>
					{icon}
					<Typography variant="subtitle1" fontWeight={600}>
						{title}
					</Typography>
				</Stack>
			</Item>
		</Link>
	);
}
