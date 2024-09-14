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
        minHeight: "957px",
        padding: { xs: "16px", sm: "24px" },
      }}
    >
      <Container>
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={rictangleImg}
              alt="Sample Image"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "20px", sm: "30px" },
              }}
            >
              <Box
                sx={{
                  width: "88px",
                  height: "88px",
                  borderRadius: "50%",
                  backgroundColor: "#5B749D",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AlternateEmailIcon
                  sx={{
                    width: "36px",
                    height: "36px",
                    color: "#fff",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "15px" },
                  fontWeight: "500",
                  letterSpacing: "0.1em",
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
                  fontSize: { xs: "28px", sm: "40px" },
                  fontWeight: "600",
                  lineHeight: { xs: "32px", sm: "44.2px" },
                }}
              >
                The #1 digital marketing services company
              </Typography>

              <Box
                sx={{
                  width: { xs: "100%", sm: "653px" },
                  border: "1px solid #fff",
                }}
              ></Box>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ width: "100%" }}
              >
                <Box
                  sx={{
                    backgroundColor: "#292930",
                    flexGrow: 1,
                    height: "75px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "0 10px",
                    boxSizing: "border-box",
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ width: { xs: "25%", sm: "32.88px" }, height: { xs: "auto", sm: "45.15px" } }}>
                    <Box
                      component="img"
                      sx={{ width: "100%", height: "auto" }}
                      src={GoalImg}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", sm: "25px" },
                      fontWeight: "600",
                      textAlign: "center",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Development Scale
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#292930",
                    flexGrow: 1,
                    height: "75px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "0 10px",
                    boxSizing: "border-box",
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ width: { xs: "25%", sm: "36.88px" }, height: { xs: "auto", sm: "29.43px" } }}>
                    <Box
                      component="img"
                      sx={{ width: "100%", height: "auto" }}
                      src={MegaPhoneImg}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", sm: "25px" },
                      fontWeight: "600",
                      textAlign: "center",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Development Scale
                  </Typography>
                </Box>
              </Stack>

              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                Lorem ipsum dolors sit non amet consectetur adipiscing elit
                fringilla aliquam Aliquam vestibulum libero morbi blandit cursus
                risus. Laoreet non curabitur gravida arcu ac tortor semper
                vivera nam libero justo laoreet mollis aliquam ut porttitor leo
                a diam.
              </Typography>

              <button
                style={{
                  width: "100%",
                  maxWidth: "167px",
                  height: "64px",
                  borderRadius: "7px",
                  padding: "17px 35px",
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
