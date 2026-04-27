import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Hero() {
  return (
    <Box sx={{ backgroundColor: "#3b5d50", color: "white", pt: 8, pb: 12 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={6}>
            <Typography variant="h2" sx={{ fontWeight: "bold", mb: 3 }}>
              Modern Interior <br /> Design Studio
            </Typography>
            <Typography variant="body1" sx={{ color: "#8fa099", mb: 4 }}>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f9bf29",
                  color: "#2f2f2f",
                  fontWeight: "bold",
                  borderRadius: 8,
                  px: 4,
                  py: 1.5,
                  "&:hover": { backgroundColor: "#e5ab1a" },
                }}
              >
                Shop Now
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  borderRadius: 8,
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    borderColor: "white",
                  },
                }}
              >
                Explore
              </Button>
            </Box>
          </Grid>
          <Grid size={6}>
            <Box
              component="img"
              src="https://themewagon.github.io/furni/images/couch.png"
              alt="Couch"
              sx={{ width: "100%", borderRadius: 4 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
