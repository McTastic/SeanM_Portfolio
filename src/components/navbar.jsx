import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";


const pages = ["About", "Projects", "Contact", "Resume"];

const Navbar = ({ currentPage, handlePageChange }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
      <Container maxWidth="x2" className="headerContainer" sx={{ ml: 0, display:"flex", justifyContent:"flex-end"}}>
        <Toolbar disableGutters >
          <Typography
            onClick={() => handlePageChange("Home")}
            className="nameLogo"
            variant="h3"
            position="relative"
            right="20em"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" },}}
          >
            SeanM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, zIndex:"999" }}>
            <IconButton
              size="large"
              className="hamburgerMenu"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography
                    textAlign="left"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            onClick={() => handlePageChange("Home")}
            variant="h6"
            className="mobileNameLogo"
            noWrap
            component="div"
            sx={{
              display: { xs: "flex", md: "none" },
              zIndex: "999"
            }}
          >
            SeanM
          </Typography>
          <Box sx={{display: { xs: "none", md: "flex",} }}>
            {pages.map((page) => (
              <Button
                disableRipple
                className={currentPage===page ? "activePage" : page}
                key={page}
                onClick={() => handlePageChange(page)}
                sx={{
                  color: "text.primary",
                  fontSize: "3em",
                  "&.MuiButton-text:hover":{
                  background: "-webkit-linear-gradient(115deg, #20bf55 0%, #01baef 74%)",
                  WebkitBackgroundClip:"text",
                  WebkitTextFillColor:"transparent",
                  backgroundColor:"transparent",
                  mozTransition: "all 0.2s ease-in",
                  oTransition: "all 0.2s ease-in",
                  webkitTransition: "all 0.2s ease-in",
                  transition: "all 0.2s ease-in"}
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
  );
};
export default Navbar;
