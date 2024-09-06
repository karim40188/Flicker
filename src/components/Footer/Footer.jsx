import { Box, Container, List, ListItem, Typography } from "@mui/material";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";

function Footer() {
  return (
    <Box sx={{ height: "548px", backgroundColor: "#19171C" }}>
      <Container sx={{ color: "#C6C6C6", position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            width: "969px",
            gap: "122px",
            position: "absolute",
            top: "236px",
          }}
        >
          <List sx={{ width: "296px" }}>
            <ListItem>
              <Typography component="h4" sx={{ color: "#fff" }}>
                COMPANY INFO
              </Typography>
            </ListItem>

            <ListItem>
              <Typography>
                Reach out to us anytime and lets create a better future for all
                technology users together, forever. We are open to all types of
                collab offers and tons more.
              </Typography>
            </ListItem>
            <ListItem>
              <Box sx={{ display: "flex", alignItems: "center", gap: "11px" }}>
                <QueryBuilderIcon sx={{ color: "#7E5CC5" }} />

                <Typography>
                  Office Hours <br /> Monday-Friday 9 AM-5 PM PST
                </Typography>
              </Box>
            </ListItem>
            <ListItem>
              <Box sx={{ display: "flex", alignItems: "center", gap: "11px" }}>
                <HeadsetMicIcon sx={{ color: "#7E5CC5" }} />

                <Typography>
                  Support Hours
                  <br /> 24/7 365
                </Typography>
              </Box>
            </ListItem>
          </List>

          <List sx={{ width: "163px" }}>
            <ListItem>
              <Typography component="h4" sx={{ color: "#fff" }}>
                CONTACT INFO
              </Typography>
            </ListItem>
            <ListItem>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <MailOutlineIcon
                  sx={{ width: "20px", height: "20px", color: "#7E5CC5" }}
                />
                <Typography>flicker.ae1@gmail.com</Typography>
              </Box>
            </ListItem>
            <ListItem>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <CallIcon
                  sx={{ width: "20px", height: "20px", color: "#7E5CC5" }}
                />
                <Typography sx={{ width: "144px" }}>
                  +2 0155 452 2388
                </Typography>
              </Box>
            </ListItem>
          </List>
          <List sx={{ width: "266px" }}>
            <ListItem>
              <Typography component="h4" sx={{ color: "#fff" }}>
                OUR SERVICES
              </Typography>
            </ListItem>
            <ListItem sx={{ color: "#C6C6C6" }}>
              <Typography>Graphic design</Typography>
            </ListItem>
            <ListItem sx={{ color: "#C6C6C6" }}>
              <Typography>Marketing</Typography>
            </ListItem>
            <ListItem sx={{ color: "#C6C6C6" }}>
              <Typography>Branding</Typography>
            </ListItem>
            <ListItem sx={{ color: "#C6C6C6" }}>
              <Typography>Photography</Typography>
            </ListItem>
            <ListItem sx={{ color: "#C6C6C6" }}>
              <Typography>Web, Ecommerce & Mobiel Apps</Typography>
            </ListItem>
            <ListItem sx={{ color: "#C6C6C6" }}>
              <Typography>Creative</Typography>
            </ListItem>
          </List>
        </Box>
      
      </Container>
     
    </Box>
  );
}

export default Footer;
