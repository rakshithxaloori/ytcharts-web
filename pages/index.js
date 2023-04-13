import Link from "next/link";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import EmailPreview from "@/components/email";

const NEXT_PUBLIC_GOOGLE_FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;

export default function Home() {
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
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            marginTop: 0,
            marginBottom: "32px",
            fontSize: `calc((6.5 - 1) * 1.2vw + 1rem)`,
            lineHeight: 1.092,
            fontWeight: 700,
            fontStyle: "normal",
            letterSpacing: "0em",
            textTransform: "none",
          }}
        >
          For YouTubers
        </Typography>
        <Typography
          sx={{
            marginBottom: "32px",
            fontSize: `calc((1.6 - 1) * 1.2vw + 1rem)`,
            lineHeight: 1.3664,
            fontWeight: 400,
            fontStyle: "normal",
            letterSpacing: "0em",
            textTransform: "none",
          }}
        >
          <ul
            style={
              {
                // listStyleType: "none",
              }
            }
          >
            <li>Send high-quality emails with analytics charts to brands</li>
            <li>
              Create a profile that shares real-time analytics with brands
            </li>
          </ul>
        </Typography>

        <Link
          href={NEXT_PUBLIC_GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#fffc52",
              backgroundColor: "#000",
              borderColor: "#000",
              display: "inline-block",
              WebkitFontSmoothing: "antialiased",
              lineHeight: "normal",
              padding: "1.2rem 2.004rem",
              fontSize: `calc((1.3 - 1) * 1.2vw + 1rem)`,
              fontWeight: 500,
              fontStyle: "normal",
              textTransform: "none",
              letterSpacing: "0.05em",
              borderRadius: "12px",
            }}
          >
            Join the waitlist
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <EmailPreview />
      </Grid>
    </Grid>
  );
}
