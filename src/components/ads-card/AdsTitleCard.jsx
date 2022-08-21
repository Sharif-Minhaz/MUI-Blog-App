import { styled } from "@mui/material/styles";
import { Grid, Paper, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AccessTime } from "@mui/icons-material";
import TagButton from "../button/TagButton";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	color: theme.palette.text.secondary,
	borderRadius: "14px",
	width: "100% !important",
}));

const AdsTitleCard = ({ topic, title, author, profileLink, date, readTime, link, postLink }) => {
	return (
		<Item className="transition-single">
			<Grid container spacing={1}>
				<Grid
					item
					xs={12}
					className="sp-no-img divider"
					sx={{ py: "17px !important", pl: "25px !important", pr: "15px" }}
				>
					<TagButton topic={topic} bg="#e9d8fd" link={link} />
					<Link to={postLink} className="nav-link">
						<Typography sx={{ color: "gray" }} mb={1} mt={2}>
							{title}
						</Typography>
					</Link>
					<Typography
						sx={{ fontSize: "14px", display: "flex", justifyContent: "space-between" }}
					>
						<Link to={profileLink} className="nav-link author">
							{author}
						</Link>
						<Box component="span">
							{date} <AccessTime sx={{ fontSize: "18px", mb: "-3px" }} /> {readTime}
						</Box>
					</Typography>
				</Grid>
			</Grid>
		</Item>
	);
};

export default AdsTitleCard;
