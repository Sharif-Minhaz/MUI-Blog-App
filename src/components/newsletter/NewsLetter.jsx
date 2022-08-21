import { Paper, Stack, styled, TextField, Typography } from "@mui/material";
import CustomButton from "../button/CustomButton";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	color: theme.palette.text.secondary,
	borderRadius: "14px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const newsLetterBody = {
	maxWidth: "435px",
	mx: "20px",
	my: "40px",
	justifyContent: "center",
	alignItems: "center",
	gap: "15px",
};

const NewsLetter = () => {
	return (
		<section style={{ marginTop: "120px", marginBottom: "120px", position: "relative" }}>
			<Item>
				<Stack sx={newsLetterBody}>
					<img
						className="paper-plan"
						src="https://res.cloudinary.com/hostingimagesservice/image/upload/v1661067096/paper-plan_b9cwoc.png"
						alt=""
					/>
					<Typography sx={{ color: "black", fontWeight: "bold" }} variant="h5">
						Subscribe to our newsletter!
					</Typography>
					<Typography sx={{ color: "#718096", mt: "2px", mb: "8px" }}>
						We'll send you the best of our blog just once a month. We promise.
					</Typography>
					<TextField
						placeholder="Enter email address"
						id="outlined-start-adornment"
						sx={{ width: "calc(100% - 130px )", backgroundColor: "#E2E8F0" }}
						size="small"
					/>
					<CustomButton text="Subscribe" link="/subscribe" />
				</Stack>
			</Item>
		</section>
	);
};

export default NewsLetter;
