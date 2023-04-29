import Link from "next/link";

import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.linksContainer}>
        <Link href="/support" style={styles.link}>
          Contact Us
        </Link>
        <Link href="/privacy-policy" style={styles.link}>
          Privacy Policy
        </Link>
        <Link href="/terms" style={styles.link}>
          Terms
        </Link>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    padding: "2rem",
  },
  linksContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "currentColor",
    textDecorationThickness: "1px",
    textUnderlineOffset: "0.2em",
  },
};

export default Footer;

const linkStyle = {};
