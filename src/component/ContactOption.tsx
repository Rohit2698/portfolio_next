import { Grid } from "@mui/material";
import React from "react";
import { StyledMessageContainer } from "../container/contact/style";
import { SiMinutemailer } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";

const ContactOption = () => {
  return (
    <Grid container spacing={"20px"}>
      <Grid item xs={12}>
        <Grid container justifyContent={"center"}>
          <Grid item xs={10} md={6}>
            <StyledMessageContainer>
              <SiMinutemailer
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem",
                }}
              />
              <h4>Email</h4>
              <h5 style={{wordBreak: "break-all"}}>rohit.thakur2698.freelance@gmail.com</h5>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rohit.thakur2698.freelance@gmail.com"
                target="_blank"
              >
                Send a Mail
              </a>
            </StyledMessageContainer>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent={"center"}>
          <Grid item xs={10} md={6}>
            <StyledMessageContainer>
              <RiWhatsappFill
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem",
                }}
              />
              <h4>Whatsapp</h4>
              <h5 style={{wordBreak: "break-all"}}>+91 8146919794</h5>
              <a href="https://api.whatsapp.com/send?phone=8146919794" target="_blank">Send a Message</a>
            </StyledMessageContainer>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactOption;
