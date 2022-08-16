import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, IconButton } from "@mui/material";
import SliderItem from "./SliderItem";
import { ArrowBackIosRounded, ArrowForwardIosRounded } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
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
	return (
		<Item elevation={0}>
			<div className="controllers">
				<span className="active"></span>
				<span></span>
				<span></span>
			</div>
			<div className="slider-icons">
				<IconBtn aria-label="previous" color="primary">
					<ArrowBackIosRounded sx={{ color: "#A0AEC0" }} />
				</IconBtn>
				<IconBtn aria-label="next" color="primary">
					<ArrowForwardIosRounded sx={{ color: "#A0AEC0" }} />
				</IconBtn>
			</div>
			<SliderItem />
		</Item>
	);
};

export default Slider;
