import { Grid } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import PrimaryButton from "../common/Button";
import FormikTextfield from "../common/field/FormikTextfield";
import {
  contactInitialValue,
  contactValidationSchema,
} from "../container/contact/util";

const ContactUsForm = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={8}>
        <Formik
          initialValues={contactInitialValue}
          validationSchema={contactValidationSchema}
          enableReinitialize
          onSubmit={(values) => {
            console.log("values", values);
          }}
        >
          {() => (
            <Grid container spacing={"20px"}>
              <Grid item xs={12}>
                <FormikTextfield
                  name={"fullName"}
                  id={"fullName"}
                  placeholder={"Your Full Name"}
                />
              </Grid>
              <Grid item xs={12}>
                <FormikTextfield
                  name={"email"}
                  id={"email"}
                  placeholder={"Email"}
                />
              </Grid>
              <Grid item xs={12}>
                <FormikTextfield
                  name={"message"}
                  id={"message"}
                  multiline
                  rows={4}
                  placeholder={"Your Message"}
                />
              </Grid>
              <Grid item xs={12}>
                <PrimaryButton text="Send Message"/>
              </Grid>
            </Grid>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default ContactUsForm;
