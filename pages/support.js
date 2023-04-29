import React from "react";
import Link from "next/link";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SupportPage = () => {
  return (
    <Box>
      <Typography variant="h1" sx={{ fontWeight: "bold", mb: 2 }}>
        Support
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        If you need assistance or have any questions about our service, please
        don&apos;t hesitate to contact us.
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        You can reach our support team at{" "}
        <Link href="mailto:rakshith@getabranddeal.com" style={linkStyle}>
          rakshith@getabranddeal.com
        </Link>
      </Typography>
    </Box>
  );
};

export default SupportPage;

const linkStyle = {
  textDecorationLine: "underline",
  textDecorationStyle: "solid",
  textDecorationColor: "currentColor",
  textDecorationThickness: "1px",
  textUnderlineOffset: "0.2em",
};
