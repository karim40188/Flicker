import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import verifyIcon from "../../assets/verifyIcon.png";
import settingIcon from "../../assets/settingIcon.png";
import checkIcon from "../../assets/chckIcon.png";
import teamWorkIcon from "../../assets/appsIcon.png";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function OurValue() {
  const [icons] = useState([
    {
      icon: settingIcon,
      title: "Efficiency",
    },
    { icon: checkIcon, title: "Accountability" },
    { icon: teamWorkIcon, title: "Team Work" },
  ]);

  return (
    <Box
      sx={{
        minHeight: "957px",
      }}
    >
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "54px" }}>
          <Box
            sx={{
              textAlign: "center",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: "34px",
            }}
          >
            <Box sx={{ width: "88px", height: "88px", margin: "0 auto" }}>
              <Box
                component="img"
                sx={{ width: "100%", height: "100%" }}
                src={verifyIcon}
              />
            </Box>
            <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
              02 . OUR VALUES
            </Typography>
            <Typography sx={{ fontSize: "40px", fontWeight: "600" }}>
              The core values behind our work
            </Typography>
          </Box>

          <Grid
            container
            sx={{
              gap: "30px",
              width: "1,200px",
              position: "relative",
            }}
            justifyContent="center"
          >
            {icons.map((card) => (
              <Grid
                key={card.title}
                item
                xs={12}
                sm={6}
                md={3.7}
                sx={{
                  backgroundColor: "#424245",
                  padding: "50px 40px",
                  borderRadius: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  width: "380px",
                }}
              >
                <Box
                  sx={{ width: "153px", height: "153px" }}
                  component="img"
                  src={card.icon}
                />
                <Typography sx={{ color: "#fff" }}>{card.title}</Typography>
                <Typography sx={{ fontSize: "18px", color: "#D0D0D0" }}>
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit olme
                  do semper dalaracc lacus vel facilisis volutpat est
                  velitolm.
                </Typography>
              </Grid>
            ))}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: "-40px",  // Adjust this value as needed
                transform: "translateY(-50%)",
                fontSize: "45px",
                backgroundColor: "#492e88",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <KeyboardArrowRightIcon sx={{ color: "#fff" }} />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "-40px",  // Adjust this value as needed
                transform: "translateY(-50%)",
                fontSize: "45px",
                backgroundColor: "#424245",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <KeyboardArrowLeftIcon sx={{ color: "#fff" }} />
            </Box>
          </Grid>
          <Stack direction="row" justifyContent="center" gap="10px">
            <Button
              variant="outlined"
              sx={{
                textTransform: "capitalize",
                width: "173px",
                height: "63px",
                borderRadius: "7px",
                padding: "17px 35px",
                color: "#A02D6F",
                backgroundColor: "transparent",
                border: "1.5px solid #A02D6F",
              }}
            >
              Get in Touch
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                width: "173px",
                height: "63px",
                borderRadius: "7px",
                padding: "17px 35px",
                color: "#fff",
                backgroundColor: "#A02D6F",
              }}
            >
              Our Services
              <KeyboardArrowRightIcon
                sx={{
                  backgroundColor: "#fff",
                  width: "14px",
                  height: "14px",
                  color: "#A02D6F",
                  borderRadius: "50%",
                  marginLeft: "10px",
                }}
              />
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default OurValue;
