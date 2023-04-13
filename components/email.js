import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const emailProps = {
  authorName: "Rakshith",
  authorImage: "/profile.gif",
  reviewText: `“Hi YCombinator, I'm Rakshith, a YouTuber that makes cool vlogs 
    that document my life. I code, watch podcasts, hit the gym and occasionally play the guitar. 
    I love how your brand caters to everyday life and I've used your products for a few years now. 
    I'd love for us to partner up for a brand deal and have you featured in one of my videos!
    Check out my monthly views below and take a look at my profile!”`,
  previewText: "",
};

emailProps.previewText = `Partner with ${emailProps.authorName}!`;

const Logo = () => (
  // <Img
  //   alt="Company Logo"
  //   src="/logo.png"
  //   width={96}
  //   height={30}
  // />
  <Text style={{ color: "black", fontSize: 24, fontWeight: "bold" }}>
    Sample Email
  </Text>
);

const EmailPreview = ({ message = emailProps.reviewText }) => {
  return (
    // <Html>
    //   <Head>
    //     <title>YCombinator Email</title>
    //     <meta charSet="utf-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //   </Head>
    //   <Preview>{emailProps.previewText}</Preview>
    //   <Body style={main}>
    <Section style={main}>
      <Container style={container}>
        <Logo />
        <Hr style={hr} />
        <Section>
          <Img
            alt="User Image"
            src={emailProps.authorImage}
            width={100}
            height={100}
            style={userImage}
          />
          <Text style={review}>{message}</Text>
        </Section>
        <Img alt="Monthly Views" src="/chart.png" style={charts} />
        <Section
          style={{
            backgroundColor: "black",
            paddingTop: 19,
            paddingBottom: 19,
            borderRadius: 5,
          }}
        >
          <Button
            pY={12}
            style={button}
            //    href="https://proeliumx.com/profile"
          >
            View Profile
          </Button>
        </Section>
        <Hr style={hr} />
      </Container>
    </Section>
    //   </Body>
    // </Html>
  );
};

export default EmailPreview;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  borderRadius: "4px",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const userImage = {
  margin: "0 auto",
  marginBottom: "16px",
  borderRadius: "50%",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const charts = {
  width: "100%",
  marginBottom: "24px",
};

const button = {
  backgroundColor: "black",
  paddingVertical: "12px",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "18px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "100%",
};

const link = {
  ...paragraph,
  color: "#ff5a5f",
  display: "block",
};

const reportLink = {
  fontSize: "14px",
  color: "#9ca299",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};
