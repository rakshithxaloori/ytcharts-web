import Link from "next/link";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const PrivacyPolicy = () => {
  return (
    <Box p={{ xs: 2, sm: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Privacy Policy
      </Typography>
      <Box my={4}>
        <Typography variant="h5" component="h3" gutterBottom>
          Introduction
        </Typography>
        <Typography paragraph>
          Get A Brand Deal (a JuntoX (OPC) Private Limited product) (“we,” “us,”
          or “our”) is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, and disclose your personal information
          when you visit our website https://getabranddeal.com (“Site”).
        </Typography>

        <Typography variant="h5" component="h3" gutterBottom>
          Information We Collect
        </Typography>
        <Typography paragraph>
          We may collect personal information when you visit our Site, such as:
        </Typography>
        <List>
          {[
            "Name",
            "Email address",
            "Phone number",
            "Mailing address",
            "Billing information",
            "Demographic information",
          ].map((text, index) => (
            <ListItem key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Typography paragraph>
          We may also collect non-personal information, such as your browser
          type, IP address, and the pages you visit on our Site.
        </Typography>

        <Typography variant="h5" component="h3" gutterBottom>
          How We Use Your Information
        </Typography>
        <List>
          {[
            "To process your orders and transactions",
            "To provide customer service and support",
            "To send you promotional emails and newsletters",
            "To improve our products and services",
            "To conduct market research and analysis",
            "To comply with legal and regulatory requirements",
          ].map((text, index) => (
            <ListItem key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h5" component="h3" gutterBottom>
          How We Protect Your Information
        </Typography>
        <Typography paragraph>
          We take reasonable measures to protect your personal information from
          unauthorized access, disclosure, alteration, or destruction. We use
          industry-standard security technologies and procedures to safeguard
          your personal information.
        </Typography>

        <Typography variant="h5" component="h3" gutterBottom>
          Sharing Your Information
        </Typography>
        <Typography paragraph>
          We do not sell or rent your personal information to third parties. We
          may share your personal information with our service providers and
          partners who assist us in providing our services, such as payment
          processors and shipping providers. We may also share your personal
          information if required by law or in the event of a merger,
          acquisition, or sale of assets.
        </Typography>

        <Typography variant="h5" component="h3" gutterBottom>
          Your Choices
        </Typography>
        <Typography paragraph>
          You can opt out of receiving promotional emails and newsletters from
          us by following the instructions in the email. You can also update
          your personal information by contacting us at <EmailLink />
        </Typography>
        <Typography variant="h5" component="h2">
          Third-Party Links
        </Typography>
        <Typography paragraph>
          Our Site may contain links to third-party websites or services. We are
          not responsible for the privacy practices of these websites or
          services. We encourage you to review their privacy policies before
          providing them with any personal information.
        </Typography>

        <Typography variant="h5" component="h2">
          Children&apos;s Privacy
        </Typography>
        <Typography paragraph>
          Our Site is not intended for children under the age of 13. We do not
          knowingly collect personal information from children under the age of
          13. If you are under the age of 13, do not provide us with any
          personal information.
        </Typography>

        <Typography variant="h5" component="h2">
          Changes to this Privacy Policy
        </Typography>
        <Typography paragraph>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page. We
          encourage you to review this Privacy Policy periodically for any
          changes.
        </Typography>

        <Typography variant="h5" component="h2">
          Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at <EmailLink />.
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;

const EmailLink = () => (
  <Link
    href="mailto:rakshith@getabranddeal.com"
    rel="noopener noreferrer"
    target="_blank"
    style={{
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
      textDecorationColor: "currentColor",
      textDecorationThickness: "1px",
      textUnderlineOffset: "0.2em",
    }}
  >
    rakshith@getabranddeal.com
  </Link>
);
