import { styled } from "@mui/material/styles";
import { Grid, Paper, Stack, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { AccessTime } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	color: theme.palette.text.secondary,
	borderRadius: "14px",
}));

const adsButtonStyle = {
	backgroundColor: "#e9d8fd",
	color: "inherit",
	fontSize: "10px",
	fontWeight: "bold",
	borderRadius: "8px",
	pr: "11px",
	pl: "11px",
	"&:hover": {
		backgroundColor: "#718096 !important",
		color: "white",
	},
};

const AdsImgCard = ({ img, topic, title, author, date, readTime }) => {
	return (
		<Item>
			<Grid container spacing={1}>
				<Grid item xs={4} className="divider">
					<img className="card-img" src={img} alt="item-1" />
				</Grid>
				<Grid item xs={8} py={1}>
					<Button sx={adsButtonStyle} size="small">
						{topic}
					</Button>
					<Link to="/" className="nav-link">
						<Typography sx={{ color: "gray" }} mb={1} mt={2}>
							{title}
						</Typography>
					</Link>

					<Typography sx={{ fontSize: "14px" }}>
						<Link to="/" className="nav-link author">
							{author}
						</Link>{" "}
						{date} <AccessTime sx={{ fontSize: "18px", mb: "-3px" }} /> {readTime}
					</Typography>
				</Grid>
			</Grid>
		</Item>
	);
};

export default AdsImgCard;