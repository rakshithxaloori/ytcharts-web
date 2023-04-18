import Link from "next/link";

import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        m: 3,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link
        href="/"
        style={{
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: `calc((2 - 1) * 1.2vw + 1rem)`,
          letterSpacing: "0em",
          textTransform: "none",
          lineHeight: "1.4em",
          cursor: "pointer",
        }}
      >
        ProeliumX
      </Link>
    </Box>
  );
};

export default Header;
