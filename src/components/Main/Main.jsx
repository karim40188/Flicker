import { Box, Button, Container, Stack, Typography } from "@mui/material";

function Main() {
  return (
    <Container>
      <Box
        sx={{
          textAlign: "center",
          color: "#fff",
          position: "absolute",
          top: "203px",
          left: "347px",
        }}
      >
        <Typography
          sx={{
            fontSize: "56px",
            fontWeight: "600",
            lineHeight: "99.62px",
          }}
        >
          Think Better With Flicker <br /> Innovate, Create,
          <br /> Elevate.
        </Typography>

        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(to left ,#A02D6F  , #492E88 )",
            width: "226.54px",
            height: "62.9px",
            textTransform:'capitalize'
          }}
        >
          Get in touch
        </Button>

        <Stack direction="row" sx={{ justifyContent: "center", gap: "22px" }}>
          <Box
            sx={{
              justifyContent: "start",
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "40px" }}>
              325{" "}
              <Typography
                component="span"
                sx={{ color: "#A02D6F", fontSize: "40px" }}
              >
                +
              </Typography>
            </Typography>
            <Typography sx={{ fontSize: "15px", textAlign: "left" }}>
              CLIENTS <br /> WORLDWIDE
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "40px" }}>
              975{" "}
              <Typography
                component="span"
                sx={{ color: "rgb(11, 234, 222)", fontSize: "40px" }}
              >
                +
              </Typography>
            </Typography>
            <Typography sx={{ fontSize: "15px" }}>
              PROJECTS <br /> COMPLETED
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default Main;
