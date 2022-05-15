import * as React from "react";
import AppBar from "@mui/material/AppBar";
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
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: `rgba(33,44,54, 0.726)`,
        backdropFilter: `blur(5px)`,
        height: "4em",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <Container maxWidth="xl" className="headerContainer" sx={{ ml: 0 }}>
        <Toolbar disableGutters>
          <Typography
            onClick={() => handlePageChange("Home")}
            className="nameLogo"
            variant="h3"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            SeanM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
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
              flexGrow: 1,
              display: { xs: "flex", sm: "flex", md: "none" },
            }}
          >
            SeanM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageChange(page)}
                sx={{
                  my: 2,
                  color: "rgb(206, 89, 104)",
                  display: "block",
                  fontSize: "1.5em",
                  "&.MuiButton-text:hover":{color: "#fdec6e",
                  backgroundColor:"transparent",
                  textShadow:"1px 1px 20px #fdec6e",
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
    </AppBar>
  );
};
export default Navbar;
