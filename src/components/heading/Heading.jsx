import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import TagButton from "../button/TagButton";

const headingStyles = {
	alignItems: "center",
	justifyContent: "space-between",
	pl: 4,
	position: "relative",
	"&::before": {
		content: "''",
		position: "absolute",
		height: "32px",
		width: "5px",
		backgroundColor: "#e2e8f0",
		left: 0,
		borderRadius: "50px",
	},
};

const Heading = ({ text, link }) => {
	return (
		<section>
			<Stack direction="row" sx={headingStyles} className="heading-divider">
				<Link to={link} className="heading-nav-link">
					{text}
				</Link>
				<TagButton link={link} topic="View More" bg="#e2e8f0" />
			</Stack>
		</section>
	);
};

export default Heading;
