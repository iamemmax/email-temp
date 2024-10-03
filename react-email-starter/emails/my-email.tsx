import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { Tailwind } from "@react-email/tailwind";

interface MyEmailProps {
  loginCode?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const MyEmail = () => (
  <Html>
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Head>
        {/* Adding Poppins font */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            body, p, h1, h2, h3, h4, h5, h6 {
              font-family: Poppins", sans-serif;
            }
          `}
        </style>
      </Head>
      <Preview>Log in with this magic link</Preview>
      <Body className="bg-white">
        <Container>
          <Section className="bg-[#E7EFF2] flex justify-center items-center py-6">
            <Img
              src={`${baseUrl}/static/logo.png`}
              width="150"
              height="39.12"
              alt="Logo"
            />
          </Section>
          <Section className="flex flex-col items-center mt-8 md:mt-14 px-4 md:px-0">
            <Text
              className="font-bold text-center text-4xl text-black"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              OTP Verification
            </Text>
            <Text
              className="text-center text-base text-[#1A2028] font-normal opacity-80 mt-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Hey there Oluwapelumi, we just sent you a code, kindly provide the
              code to set up your account. If you are not the one that initiated
              this code, kindly ignore it for security purposes.
            </Text>
          </Section>
          <Section className="mt-8 px-4 md:px-20">
            <Section className="bg-[#FBFBFB] py-7 text-center">
              <Text
                className="font-bold text-2xl text-black"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <strong>123-456</strong>
              </Text>
            </Section>
            <Text
              className="font-bold mt-4 text-center text-sm text-[#0C779B]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              This code expires in the next 2 minutes
            </Text>
          </Section>
          <Section className="mt-8 text-center">
            <Img
              src={`${baseUrl}/static/stripeImage.png`}
              width="600"
              height="89.04"
              alt="Stripe Logo"
              className="w-full h-auto"
            />
          </Section>
          <Section className="mt-6 border border-[#333333] border-opacity-70">
            <Section
              className="flex items-center justify-center divide-x divide-[#333333]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <Link
                href="#"
                className="px-4 py-0 text-xs font-medium text-[#1A2028]"
                style={{
                  borderRight: "1px solid #eee",
                  height: "auto",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "1.5rem", // Adjust line height to match text
                }}
              >
                About Xtridelink
              </Link>
              <Link
                href="#"
                className="px-4 py-2 text-xs font-medium text-[#1A2028]"
              >
                Privacy Policy
              </Link>
            </Section>
          </Section>
          <Section className="flex justify-center py-4 gap-4 mt-4">
            <Row>
              <Column align="center" className="px-2">
                <Link href="#">
                  <Img
                    src={`${baseUrl}/static/instagram.png`}
                    width="32"
                    height="32"
                    alt="Instagram"
                  />
                </Link>
              </Column>
              <Column align="center" className="px-2">
                <Link href="#">
                  <Img
                    src={`${baseUrl}/static/x.png`}
                    width="32"
                    height="32"
                    alt="X Logo"
                  />
                </Link>
              </Column>
              <Column align="center" className="px-2">
                <Link href="#">
                  <Img
                    src={`${baseUrl}/static/facebook.png`}
                    width="32"
                    height="32"
                    alt="Facebook"
                  />
                </Link>
              </Column>
              <Column align="center" className="px-2">
                <Link href="#">
                  <Img
                    src={`${baseUrl}/static/youtube.png`}
                    width="32"
                    height="32"
                    alt="YouTube"
                  />
                </Link>
              </Column>
            </Row>
          </Section>
          <Section>
            <Text
              className="text-center font-xs font-medium px-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Want to change how you receive these emails? You can
              <Link href="#" className="text-[#036D76]">
                {" "}
                update
              </Link>{" "}
              your preference or{" "}
              <Link href="#" className="text-[#036D76]">
                {" "}
                unsubscribe
              </Link>{" "}
              from our mailing list.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

MyEmail.PreviewProps = {
  loginCode: "sparo-ndigo-amurt-secan",
} as MyEmailProps;

export default MyEmail;
