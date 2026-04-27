import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const FeaturedChairs = () => {
  // We can store our repeating data in an array to map over it, keeping the code clean!
  const chairs = [
    {
      name: "Nordic Chair",
      desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
      img: "https://themewagon.github.io/furni/images/product-1.png",
    },
    {
      name: "Kruzo Aero Chair",
      desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
      img: "https://themewagon.github.io/furni/images/product-2.png",
    },
    {
      name: "Ergonomic Chair",
      desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
      img: "https://themewagon.github.io/furni/images/product-3.png",
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "#eff2f1" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {chairs.map((chair, index) => (
            <Grid size={4} xs={12} md={4} key={index}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    backgroundColor: "#dce5e4",
                    borderRadius: 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: 0,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={chair.img}
                    alt={chair.name}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mb: 1, fontSize: "1.1rem" }}
                  >
                    {chair.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 1, lineHeight: 1.6 }}
                  >
                    {chair.desc}
                  </Typography>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      color: "#2f2f2f",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      "&:hover": { color: "#3b5d50" },
                    }}
                  >
                    Read More
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedChairs;
