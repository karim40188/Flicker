import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import shakeHandsIcon from "../../assets/shakeHands.png";
import img1 from "../../assets/Image1.png";
import img2 from "../../assets/Image2.png";
import img3 from "../../assets/Image3.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
function OurTeam() {
  let [cards] = useState([
    {
      img: img1,
      title: "Huda",
      position: "Lead Manager",
      icons: ["facebook", "twitter"],
    },
    {
      img: img2,
      title: "Abdelrahman",
      position: "Lead Manager",
      icons: ["facebook", "twitter", "instagram"],
    },
    {
      img: img3,
      title: "Dawood",
      position: "Lead Manager",
      icons: ["facebook", "twitter", "instagram"],
    },
  ]);

  function getIcon(iconName) {
    if (iconName == "facebook") {
      return (
        <FacebookRoundedIcon
          sx={{
            backgroundColor: "#1877F2",
            padding: "5px",
            color: "#fff",
            borderRadius: "50%",
            width: "26.97px",
            height: "26.97px",
          }}
        />
      );
    } else if (iconName == "twitter") {
      return (
        <TwitterIcon
          sx={{
            backgroundColor: "#1877F2",
            padding: "5px",
            color: "#fff",
            borderRadius: "50%",
            width: "26.97px",
            height: "26.97px",
          }}
        />
      );
    } else if (iconName == "instagram") {
      return (
        <InstagramIcon
          sx={{
            background:
              "linear-gradient(to bottom , #F9D801, #EE0B1F, #7A39AD)",
            color: "#fff",
            borderRadius: "50%",
            width: "26.97px",
            height: "26.97px",
            padding: "5px",
          }}
        />
      );
    }
  }
  return (
    <Box
      sx={{
        height: "957px",
        display: "flex",
      }}
    >
      <Container>
        <Box sx={{display:'flex',flexDirection:'column', gap:'54px'}}>
          <Box
            sx={{
              textAlign: "center",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: "34px",
            }}
          >
            <Box
              sx={{ width: "88px", height: "88px", margin: "0 auto" }}
            >
              <Box
                component="img"
                src={shakeHandsIcon}
                sx={{ width: "100%", height: "auto" }}
              />
            </Box>

            <Typography
              sx={{ fontSize1: "15px", fontWeight: "500", height: "23px" }}
            >
              03 . OUR TEAM
            </Typography>

            <Typography sx={{ fontSize: "40px", fontWeight: "600" }}>
              The core values behind our work
            </Typography>
          </Box>

          <Grid container justifyContent="center" sx={{ gap: "30px" }}>
            {cards.map((card) => {
              return (
                <Grid
                  item
                  key={card.title}
                  xs={12}
                  sm={6}
                  md={3.7}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "10px",
                    alignItems: "center",
                    background:
                      card.title == "Abdelrahman"
                        ? "linear-gradient(to left , #A02D6F , #492E88)"
                        : "#fff",
                    borderRadius: "30px",
                    padding: "25px 25px 50px 25px",
                    overflow: "hidden",
                    height: "573.97px",
                    position: "relative",
                  }}
                >
                  <Box sx={{ width: "330px", height: "330px" }}>
                    <Box
                      component="img"
                      sx={{ width: "100%", height: "100%" }}
                      src={card.img}
                    />
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      width: "80px",
                      border: "1.5px solid #0BEADE",
                      position: "absolute",
                      top: "425px",
                    }}
                  ></Box>
                  <Typography component="h4" sx={{ fontSize: "25px" }}>
                    {card.title}
                  </Typography>
                  <Typography>{card.position}</Typography>
                  <Stack direction="row" sx={{ gap: "10px" }}>
                    {card.icons.map((icon) => {
                      return getIcon(icon);
                    })}
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default OurTeam;
