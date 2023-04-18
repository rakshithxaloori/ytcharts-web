import { useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import globalStyles from "@/styles/Globals.module.css";

import EmailPreview from "@/components/email";
import FormModal from "@/components/form_modal";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <Grid
      container
      spacing={3}
      sx={{
        minHeight: "100vh",
        width: "100%",
        py: 3,
        p: 2,
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: "bold", mb: 2 }}>
          For YouTubers
        </Typography>

        <Typography variant="h5" sx={{ mb: 2 }}>
          Close brand deals faster with high-quality emails
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Share real-time analytics with brands. No more emailing screenshots!
        </Typography>

        <button className={globalStyles.button} onClick={() => setOpen(true)}>
          <Typography
            sx={{
              color: "#fffc52",
              fontSize: "1.2rem",
            }}
          >
            Join the waitlist
          </Typography>
        </button>
        <FormModal open={open} handleClose={() => setOpen(false)} />
      </Grid>
      <Grid item xs={6}>
        <EmailPreview />
      </Grid>
    </Grid>
  );
}
