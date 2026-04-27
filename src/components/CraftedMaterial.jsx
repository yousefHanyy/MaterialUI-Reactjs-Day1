import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function CraftedMaterial() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#eff2f1" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={3}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Crafted with excellent material.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2f2f2f",
                color: "white",
                borderRadius: 8,
                px: 4,
                py: 1.5,
                "&:hover": { backgroundColor: "#1f1f1f", boxShadow: "none" },
              }}
            >
              Explore
            </Button>
          </Grid>
          <Grid item size={3}>
            <Box
              sx={{
                textAlign: "center",
                p: 2,
                "&:hover": {
                  backgroundColor: "white",
                  borderRadius: 2,
                  transition: "0.3s",
                  cursor: "pointer",
                },
              }}
            >
              <Box
                component="img"
                src="https://themewagon.github.io/furni/images/product-1.png"
                alt="Chair"
                sx={{ width: "100%", mb: 2, borderRadius: 2 }}
              />
              <Typography variant="h6">Nordic Chair</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                $50.00
              </Typography>
            </Box>
          </Grid>
          <Grid item size={3}>
            <Box
              sx={{
                textAlign: "center",
                p: 2,
                "&:hover": {
                  backgroundColor: "white",
                  borderRadius: 2,
                  transition: "0.3s",
                  cursor: "pointer",
                },
              }}
            >
              <Box
                component="img"
                src="https://themewagon.github.io/furni/images/product-2.png"
                alt="Chair"
                sx={{ width: "100%", mb: 2, borderRadius: 2 }}
              />
              <Typography variant="h6">Kruzo Aero Chair</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                $78.00
              </Typography>
            </Box>
          </Grid>
          <Grid item size={3}>
            <Box
              sx={{
                textAlign: "center",
                p: 2,
                "&:hover": {
                  backgroundColor: "white",
                  borderRadius: 2,
                  transition: "0.3s",
                  cursor: "pointer",
                },
              }}
            >
              <Box
                component="img"
                src="https://themewagon.github.io/furni/images/product-3.png"
                alt="Chair"
                sx={{ width: "100%", mb: 2, borderRadius: 2 }}
              />
              <Typography variant="h6">Ergonomic Chair</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                $43.00
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CraftedMaterial;
