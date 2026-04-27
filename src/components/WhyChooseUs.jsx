import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const features = [
  {
    icon: <LocalShippingIcon fontSize="large" />,
    title: "Fast & Free Shipping",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.",
  },
  {
    icon: <ShoppingBagIcon fontSize="large" />,
    title: "Easy to Shop",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.",
  },
  {
    icon: <SupportAgentIcon fontSize="large" />,
    title: "24/7 Support",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.",
  },
  {
    icon: <AutorenewIcon fontSize="large" />,
    title: "Hassle Free Returns",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.",
  },
];

function WhyChooseUs() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#eff2f1" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={6} xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
              Why Choose Us
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 5 }}>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </Typography>
            <Grid container spacing={4}>
              {features.map((feat, idx) => (
                <Grid size={6} xs={12} sm={6} key={idx}>
                  <Box sx={{ mb: 2, position: "relative" }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#dce5e4",
                        borderRadius: "50%",
                        position: "absolute",
                        top: 5,
                        left: 15,
                        zIndex: 0,
                      }}
                    />
                    <Box
                      sx={{ position: "relative", zIndex: 1, color: "#2f2f2f" }}
                    >
                      {feat.icon}
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {feat.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {feat.desc}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid size={6} xs={12} md={6}>
            <Box
              component="img"
              src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg"
              alt="Interior"
              sx={{ width: "100%", borderRadius: 4 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WhyChooseUs;
