import { Link } from "react-router-dom";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const CustomAvatar = ({ user, avatar, postDate, readTime, theme, profileLink }) => {
	return (
		<Box sx={{ display: "flex", gap: 2 }}>
			<Box>
				<Link to={profileLink}>
					<Avatar alt={user} src={avatar} sx={{ width: 56, height: 56 }} />
				</Link>
			</Box>
			<Stack>
				<Typography
					align="left"
					sx={{ color: theme === "dark" ? "#718096" : "#e2e8f0", mb: "3px" }}
					fontSize="16px"
				>
					<Link to={profileLink} className="nav-link">
						{user}
					</Link>
				</Typography>
				<Typography
					fontSize="14px"
					align="left"
					sx={{ color: theme === "dark" ? "#a0aec0" : "#e2e8f0" }}
				>
					{postDate} . <AccessTime sx={{ fontSize: "18px", mb: "-3px" }} /> {readTime}
				</Typography>
			</Stack>
		</Box>
	);
};

export default CustomAvatar;
