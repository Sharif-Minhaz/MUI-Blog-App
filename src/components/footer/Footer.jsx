import { Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { GitHub, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
	return (
		<Paper sx={{ py: 6, display: "flex", alignItems: "center" }}>
			<section style={{ marginTop: "0px", marginBottom: "0px" }}>
				<Grid container>
					<Grid item xs={12} sm={6} md={3}>
						<Link to="/">
							<img
								src="https://flexiblog-agency.netlify.app/static/e1abc27a01b56d93f5fcdff62c84fdd7/edeef/logo.webp"
								alt=""
							/>
						</Link>
						<Typography sx={{ mt: "10px", mb: "20px" }}>
							© 2022, All Rights Reserved.
						</Typography>
						<Link to="/" className="nav-link">
							<Typography sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
								Powered By{" "}
								<img
									style={{ width: "20px" }}
									src="https://flexiblog-agency.netlify.app/favicon-32x32.png"
									alt=""
								/>{" "}
								<span style={{ display: "inline-block" }}>Gatesby</span>
							</Typography>
						</Link>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<ul className="footer-link">
							<li className="heading">Quick Links</li>
							<Link to="/" className="nav-link">
								<li>Advertise with Us</li>
							</Link>
							<Link to="/" className="nav-link">
								<li>About Us</li>
							</Link>
							<Link to="/" className="nav-link">
								<li>Contact Us</li>
							</Link>
						</ul>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<ul className="footer-link">
							<li className="heading">Legal Stuff</li>
							<Link to="/" className="nav-link">
								<li>Privacy Notice</li>
							</Link>
							<Link to="/" className="nav-link">
								<li>Cookie Policy</li>
							</Link>
							<Link to="/" className="nav-link">
								<li>Terms Of Use</li>
							</Link>
						</ul>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<ul className="footer-link">
							<li className="heading">Social Media</li>
							<Link to="/" className="nav-link">
								<li>
									<GitHub sx={{fontSize: 17}} /> github
								</li>
							</Link>
							<Link to="/" className="nav-link">
								<li>
									<Twitter sx={{fontSize: 17}} /> twitter
								</li>
							</Link>
							<Link to="/" className="nav-link">
								<li>
									<Instagram sx={{fontSize: 17}} /> instagram
								</li>
							</Link>
						</ul>
					</Grid>
				</Grid>
			</section>
		</Paper>
	);
};

export default Footer;
