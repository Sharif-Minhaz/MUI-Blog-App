import { Button } from "@mui/material";

const styles = {
	width: 160,
	pl: "1rem",
	pr: "1rem",
	pt: "0.5rem",
	pb: "0.5rem",
	borderRadius: "50px",
	backgroundColor: "#667eea",
	fontSize: "14px",
	lineHeight: "inherit",
	height: "50px",
	color: "white",
	fontWeight: "400",
	transition: "all 0.3s",
	"&:hover": {
		backgroundColor: "#718096",
	},
};

const CustomButton = ({ text, link }) => {
	return (
		<Button href={link} size="large" sx={styles}>
			{text}
		</Button>
	);
};

export default CustomButton;
