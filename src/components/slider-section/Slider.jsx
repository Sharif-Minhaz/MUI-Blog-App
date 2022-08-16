import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Paper, IconButton } from "@mui/material";
import SliderItem from "./SliderItem";
import { ArrowBackIosRounded, ArrowForwardIosRounded } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	color: theme.palette.text.secondary,
	height: 400,
	borderRadius: "14px",
	position: "relative",
}));

const IconBtn = styled(IconButton)(({ theme }) => ({
	height: "45px",
	width: "45px",
	backgroundColor: "#edf2f7",
	transition: "all 0.3s",
	"&:hover": {
		backgroundColor: "#6058e3",
		"& .MuiSvgIcon-root": {
			color: "white",
		},
	},
}));

const Slider = () => {
	const [indicator, setIndicator] = useState(0);

	const handlePrev = () => {
		setIndicator((prev) => {
			return prev >= 1 ? prev - 1 : 2;
		});
	};

	const handleNext = () => {
		setIndicator((prev) => {
			return prev <= 1 ? prev + 1 : 0;
		});
	};

	const handleIndicator = (sliderNo) => {
		setIndicator(sliderNo);
	};

	return (
		<Item elevation={0}>
			<div className="controllers">
				<span
					onClick={() => handleIndicator(0)}
					className={indicator === 0 ? "active" : ""}
				></span>
				<span
					onClick={() => handleIndicator(1)}
					className={indicator === 1 ? "active" : ""}
				></span>
				<span
					onClick={() => handleIndicator(2)}
					className={indicator === 2 ? "active" : ""}
				></span>
			</div>
			<div className="slider-icons">
				<IconBtn aria-label="previous" color="primary" onClick={handlePrev}>
					<ArrowBackIosRounded sx={{ color: "#A0AEC0" }} />
				</IconBtn>
				<IconBtn aria-label="next" color="primary" onClick={handleNext}>
					<ArrowForwardIosRounded sx={{ color: "#A0AEC0" }} />
				</IconBtn>
			</div>
			{indicator === 0 ? (
				<SliderItem
					bgImage="https://flexiblog-agency.netlify.app/static/8fd7dfc3732294b833b47a9d2434c231/5a52b/image.webp"
					title="Online shopping data drives offline revenue growth of 410%"
					user="John Doe"
					avatar="https://mui.com/static/images/avatar/2.jpg"
					postDate="April 16, 2022"
					readTime="1 min"
					link="/our-team"
				/>
			) : indicator === 1 ? (
				<SliderItem
					bgImage="https://flexiblog-agency.netlify.app/static/90a14b9d2337e448de6a033b1c83c93b/5a52b/image.webp"
					title="Markdown Language Sample Blog Post Styling"
					user="Jane Doe"
					avatar="https://mui.com/static/images/avatar/3.jpg"
					postDate="Jan 05, 2022"
					readTime="1 min"
					link="/our-team"
				/>
			) : (
				<SliderItem
					bgImage="https://flexiblog-agency.netlify.app/static/c6d67d65b0f0ea9d83e2f7891da251cb/5a52b/image.webp"
					title="The Rise Of Programmatic Outdoor What Advertisers Need To Know"
					user="Mrs. Doe"
					avatar="https://mui.com/static/images/avatar/4.jpg"
					postDate="April 10, 2022"
					readTime="2 min"
					link="/our-team"
				/>
			)}
		</Item>
	);
};

export default Slider;
