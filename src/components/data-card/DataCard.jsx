import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TagButton from "../button/TagButton";
import CustomAvatar from "../avatar/CustomAvatar";

const Item = styled(Card)(({ theme }) => ({
	...theme.typography.body2,
	color: theme.palette.text.secondary,
	borderRadius: "14px",
	p: 1,
}));

const DataCard = ({
	bg,
	img,
	topic,
	user,
	avatar,
	link,
	postLink,
	postDate,
	readTime,
	profileLink,
	postTitle,
	postDes,
	theme,
}) => {
	console.log(profileLink, link, postLink);

	return (
		<Item className="transition transition-single">
			<CardMedia sx={{ p: "7px", height: "100%", objectFit: "cover" }}>
				<img style={{ borderRadius: "10px" }} width="100%" src={img} alt="tree" />
			</CardMedia>
			<CardContent sx={{ px: "24px", pb: "24px" }}>
				<TagButton topic={topic} link={link} bg={bg} />
				<Typography sx={{ mt: "20px", mb: "15px", lineHeight: "28px" }} fontSize="1.25rem">
					<Link to={postLink} style={{ textDecoration: "none", color: "#000000" }}>
						{postTitle}
					</Link>
				</Typography>
				<Typography sx={{ mb: "18px", color: "#718096" }} fontSize="1rem">
					{postDes}
				</Typography>
				<CustomAvatar
					user={user}
					avatar={avatar}
					postDate={postDate}
					readTime={readTime}
					theme={theme}
					profileLink={profileLink}
				/>
			</CardContent>
		</Item>
	);
};

export default DataCard;
