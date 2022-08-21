import { styled } from "@mui/material/styles";
import { Grid, Paper, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AccessTime } from "@mui/icons-material";
import TagButton from "../button/TagButton";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	color: theme.palette.text.secondary,
	borderRadius: "14px",
}));

const AdsImgCard = ({ img, topic, link, title, author, date, readTime, postLink }) => {
	return (
		<Item className="transition-single">
			<Grid container spacing={1} className="img-card-body">
				<Grid item xs={4} className="sp-img divider">
					<Box
						sx={{
							width: "100%",
							height: "100%",
							borderRadius: "14px",
							overflow: "hidden",
						}}
					>
						<img className="card-img" src={img} alt="item-1" />
					</Box>
				</Grid>
				<Grid item xs={8} py={1} className="text-section">
					{topic && link && <TagButton topic={topic} bg="#e9d8fd" link={link} />}
					<Link to={postLink} className="nav-link">
						{topic ? (
							<Typography sx={{ color: "gray" }} mb={1} mt={2}>
								{title}
							</Typography>
						) : (
							<Typography sx={{ color: "gray" }} mb={1}>
								{title}
							</Typography>
						)}
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
