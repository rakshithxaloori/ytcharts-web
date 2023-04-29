import Box from "@mui/material/Box";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const Layout = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      m: 1,
    }}
  >
    <Header />
    <main style={{ minHeight: "100vh" }}>{children}</main>
    <Footer />
  </Box>
);

export default Layout;
