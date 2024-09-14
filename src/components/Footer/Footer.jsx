import { Box, Container, Grid, Typography } from "@mui/material";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";

function Footer() {
  return (
    <Box
      sx={{
        minHeight: { xs: "auto", sm: "800px", lg: "549px" },
        backgroundColor: "#19171C",
        position: "relative",
        padding: { xs: "20px", sm: "40px", lg: "80px" },
      }}
    >
      <Container>
        <Grid
          container
          spacing={{ xs: 4, md: 6, lg: 10 }} // Adjust spacing between items
          sx={{
            position: "relative",
            maxWidth: { xs: "100%", lg: "969px" },
            flexWrap: "wrap",
          }}
        >
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                color: "#C6C6C6",
              }}
            >
              <Typography component="h4" sx={{ color: "#fff" }}>
                COMPANY INFO
              </Typography>
              <Typography>
                Reach out to us anytime and lets create a better future for all
                technology users together, forever. We are open to all types of
                collab offers and tons more.
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "11px" }}>
                <QueryBuilderIcon sx={{ color: "#7E5CC5" }} />
                <Typography>
                  Office Hours <br /> Monday-Friday 9 AM-5 PM PST
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "11px" }}>
                <HeadsetMicIcon sx={{ color: "#7E5CC5" }} />
                <Typography>
                  Support Hours
                  <br /> 24/7 365
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                color: "#fff",
              }}
            >
              <Typography
                component="h4"
                sx={{ fontSize: "16px", fontWeight: "600" }}
              >
                CONTACT INFO
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "12px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                <MailOutlineIcon sx={{ color: "#7E5CC5" }} />
                <Typography sx={{ color: "#C6C6C6" }}>
                  flicker.ae1@gmail.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "12px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                <CallIcon sx={{ color: "#7E5CC5" }} />
                <Typography sx={{ color: "#C6C6C6" }}>
                  +2 0155 452 2388
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                color: "#C6C6C6",
              }}
            >
              <Typography sx={{ color: "#fff" }}>OUR SERVICES</Typography>
              <Typography>Graphic design</Typography>
              <Typography>Marketing</Typography>
              <Typography>Branding</Typography>
              <Typography>Photography</Typography>
              <Typography>Web, Ecommerce & Mobile Apps</Typography>
              <Typography>Creative</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
