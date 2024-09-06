import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import rictangleImg from "../assets/Rectangl_22.png";
import { Container, Grid, Stack } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GoalImg from "../assets/Goals.png";
import MegaPhoneImg from "../assets/megaphone.png";

function About() {
  return (
    <Box
      component="section"
      sx={{
        height: "957px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container sx={{ overflow: "hidden" }}>
        <Grid container>
          <Grid item sm={12} md={5}>
            <Box
              component="img"
              src={rictangleImg}
              alt="Sample Image"
              sx={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Grid>

          <Grid item sm={12} md={7}>
            <Box
              sx={{
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <Box
                sx={{
                  width: "88px",
                  height: "88px",
                  borderRadius: "50%",
                  backgroundColor: "#5B749D",
                  position: "relative",
                }}
              >
                <AlternateEmailIcon
                  sx={{
                    position: "absolute",
                    top: "26px",
                    left: "26px",
                    width: "36px",
                    height: "36px",
                    color: "#fff",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "15px",
                  weight: "500",
                  letterSpacing: "13.5%",
                  color: "#fff",
                }}
              >
                About Us
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  marginBottom: "16px",
                  color: "#5B749D",
                  fontSize: "40px",
                  fontWeight: "600",
                  lineHeight: "44.2px",
                }}
              >
                The #1 digital marketing services company
              </Typography>
              <Box sx={{ width: "653px", border: "1px solid #fff" }}></Box>
              <Stack direction="row" sx={{ gap: "10px", width: "643.42px" }}>
                <Box
                  sx={{
                    backgroundColor: "#292930",
                    width: "311.71px",
                    height: "75px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  <Box sx={{ width: "32.88px", height: "45.15px" }}>
                    <Box
                      component="img"
                      sx={{ width: "100%" }}
                      src={GoalImg}
                    ></Box>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "25px",
                      fontWeight: "600",
                    }}
                  >
                    Development Scale
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#292930",
                    width: "311.71px",
                    height: "75px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  <Box sx={{ width: "36.88px", height: "29.43px" }}>
                    <Box
                      component="img"
                      sx={{ width: "100%" }}
                      src={MegaPhoneImg}
                    ></Box>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "25px",
                      fontWeight: "600",
                    }}
                  >
                    Development Scale
                  </Typography>
                </Box>
              </Stack>
              <Typography sx={{ color: "#fff" }}>
                Lorem ipsum dolors sit non amet consectetur adipiscing elit
                fringilla aliquam Aliquam vestibulum libero morbi blandit cursus
                risus. Laoreet non curabitur gravida arcu ac tortor semper
                vivera nam libero justo laoreet mollis aliquam ut porttitor leo
                a diam.
              </Typography>
              <button
                style={{
                  width: "167px",
                  height: "64px",
                  borderRadius: "7px",
                  padding: "17px, 35px, 18px, 35px",
                  color: "#fff",
                  backgroundColor: "transparent",
                  border: "1.5px solid #5B749D",
                  cursor: "pointer",
                }}
              >
                Get in touch
              </button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
