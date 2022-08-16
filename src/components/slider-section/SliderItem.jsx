import { Stack, Box, Typography, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { AccessTime } from "@mui/icons-material";

const sliderStyle = {
	background: "linear-gradient( 120deg, #2d3748 0%, transparent 180% )",
	borderRadius: "14px",
	height: "100%",
	p: "70px 45px 136px 120px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
};

const sliderBg = {
	backgroundImage:
		'url("https://flexiblog-agency.netlify.app/static/8fd7dfc3732294b833b47a9d2434c231/5a52b/image.webp")',
	backgroundSize: "cover",
	backgroundPosition: "center",
	height: "100%",
	borderRadius: "14px",
};

const SliderItem = () => {
	return (
		<Link to="/our-team" className="rm-underline">
			<Stack sx={sliderBg}>
				<Box sx={sliderStyle}>
					<Typography
						align="left"
						variant="h4"
						fontWeight="bold"
						sx={{ color: "#ffffff", textShadow: "1px 1px 0px #2d3748" }}
					>
						Online shopping data drives offline revenue growth of 410%
					</Typography>
					<Box sx={{ display: "flex", gap: 2 }}>
						<Box>
							<Avatar
								alt="John Doe"
								src="https://mui.com/static/images/avatar/2.jpg"
								sx={{ width: 56, height: 56 }}
							/>
						</Box>
						<Stack>
							<Typography align="left" sx={{ color: "#e2e8f0", mb: "5px" }} fontWeight="bold">
								John Doe
							</Typography>
							<Typography align="left" sx={{ color: "#e2e8f0" }}>
								April 16, 2020 .{" "}
								<AccessTime sx={{ fontSize: "18px", mb: "-3px" }} /> 1 min
							</Typography>
						</Stack>
					</Box>
				</Box>
			</Stack>
		</Link>
	);
};

export default SliderItem;
