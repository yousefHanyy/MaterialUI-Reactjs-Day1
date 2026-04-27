import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#3B5D50" }}>
      <Container>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, fontWeight: "bold", color: "white" }}
          >
            Furni.
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                color: "white",
                textDecoration: "underline",
                textDecorationColor: "orange",
                textDecorationThickness: 4,
                textUnderlineOffset: 10,
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationColor: "orange",
                  textDecorationThickness: 4,
                  textUnderlineOffset: 10,
                },
              }}
            >
              Home
            </Button>
            <Button
              sx={{
                color: "lightgray",
                "&:hover": {
                  color: "white",

                  textDecoration: "underline",
                  textDecorationColor: "orange",
                  textDecorationThickness: 4,
                  textUnderlineOffset: 10,
                },
              }}
            >
              Shop
            </Button>
            <Button
              sx={{
                color: "lightgray",
                "&:hover": {
                  color: "white",

                  textDecoration: "underline",
                  textDecorationColor: "orange",
                  textDecorationThickness: 4,
                  textUnderlineOffset: 10,
                },
              }}
            >
              About us
            </Button>
            <Button
              sx={{
                color: "lightgray",
                "&:hover": {
                  color: "white",

                  textDecoration: "underline",
                  textDecorationColor: "orange",
                  textDecorationThickness: 4,
                  textUnderlineOffset: 10,
                },
              }}
            >
              Services
            </Button>
            <Button
              sx={{
                color: "lightgray",
                "&:hover": {
                  color: "white",

                  textDecoration: "underline",
                  textDecorationColor: "orange",
                  textDecorationThickness: 4,
                  textUnderlineOffset: 10,
                },
              }}
            >
              Blog
            </Button>
            <Button
              sx={{
                color: "lightgray",
                "&:hover": {
                  color: "white",

                  textDecoration: "underline",
                  textDecorationColor: "orange",
                  textDecorationThickness: 4,
                  textUnderlineOffset: 10,
                },
              }}
            >
              Contact us
            </Button>
            <IconButton
              sx={{
                color: "white",
                "&:hover": {
                  color: "white",

                  textDecoration: "underline",
                  textDecorationColor: "orange",
                  textDecorationThickness: 4,
                  textUnderlineOffset: 10,
                },
              }}
            >
              <PersonIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
