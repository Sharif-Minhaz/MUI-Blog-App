import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const viewMoreBtn = {
	color: "#3e3e3e",
	fontSize: "0.70rem",
	borderRadius: "7px",
	p: "5px 14px 5px 14px",
	lineHeight: "1.2rem",
	"&:hover": {
		backgroundColor: "#718096",
		color: "#ffffff",
	},
};

const TagButton = ({ link, topic, bg }) => {
	return (
		<Link to={link} style={{ textDecoration: "none" }}>
			<Button size="small" sx={{ ...viewMoreBtn, backgroundColor: bg }}>
				{topic}
			</Button>
		</Link>
	);
};

export default TagButton;
