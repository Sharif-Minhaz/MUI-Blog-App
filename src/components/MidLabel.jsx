import { Stack, Typography } from "@mui/material";
import CustomButton from "./button/CustomButton";

const labelStyles = {
	backgroundColor: "#2d3748",
	borderRadius: "12px",
	height: "136px",
};

const bgImageStyles = {
	backgroundImage:
		"url('https://flexiblog-agency.netlify.app/static/f0d7de4d2d5b30679e7dc2817b78dcf6/a6e79/banner.png')",
	backgroundRepeat: "no-repeat",
	flexBasis: "45%",
	alignItems: "flex-end",
	justifyContent: "center",
	pr: "33px",
};

const MidLabel = () => {
	return (
		<section>
			<Stack sx={labelStyles} direction="row" className="label-section">
				<Stack sx={{ p: "33px", flexBasis: "55%", justifyContent: "center", gap: "12px" }}>
					<Typography variant="h6" sx={{ color: "#d6bcfa", fontWeight: 400 }}>
						The latest IT market analysis report - May 2022
					</Typography>
					<Typography sx={{ color: "#a0aec0" }}>
						This month's analysis is a must see.
					</Typography>
				</Stack>
				<Stack sx={bgImageStyles} className="download-btn">
					<CustomButton text="Download Report" link="/report-download" />
				</Stack>
			</Stack>
		</section>
	);
};

export default MidLabel;
