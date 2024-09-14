import { Box } from "@mui/material";
import bg from "../../assets/bg.png";
import Navbar from "../Navbar";
import Main from "../Main/Main";
import About from "../About";
import OurValue from "../OurValue/OurValue";
import OurTeam from "../OurTeam/OurTeam";
import Footer from "../Footer/Footer";


function Layout() {
  return (
    <Box sx={{ backgroundColor: "#010108" }}>
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          minHeight: "957px",
        }}
      >
        <Navbar />
        <Main />
      </Box>
     
        <About />
        <OurValue />
        <OurTeam />
      <Footer />
      
    </Box>
  );
}

export default Layout;
