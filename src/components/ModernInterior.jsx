import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function ModernInterior() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#eff2f1" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={7} item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: { xs: 400, sm: 500 },
                width: "100%",
              }}
            >
              <Box
                component="img"
                src="https://themewagon.github.io/furni/images/img-grid-1.jpg"
                alt="Living Room"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 4,
                  zIndex: 1,
                }}
              />

              <Box
                component="img"
                src="https://themewagon.github.io/furni/images/img-grid-2.jpg"
                alt="Office Interior"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: -10,
                  height: "45%",
                  objectFit: "cover",
                  borderRadius: 4,
                  zIndex: 2,
                }}
              />

              <Box
                component="img"
                src="https://themewagon.github.io/furni/images/img-grid-3.jpg"
                alt="Stool"
                sx={{
                  position: "absolute",
                  bottom: -80,
                  right: -10,
                  height: "70%",
                  objectFit: "cover",
                  borderRadius: 4,
                  zIndex: 3,
                }}
              />
            </Box>
          </Grid>

          <Grid size={5} xs={12} md={6}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                We Help You Make Modern Interior Design
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 4 }}
              >
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada
              </Typography>

              <Grid container spacing={2} sx={{ mb: 4 }}>
                {[1, 2, 3, 4].map((item) => (
                  <Grid size={6} xs={12} sm={6} key={item}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          border: "2px solid #3b5d50",
                          mt: 0.8,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Donec vitae odio quis nisl dapibus malesuada
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ModernInterior;
