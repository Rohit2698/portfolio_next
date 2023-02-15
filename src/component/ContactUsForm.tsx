import { Grid } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import PrimaryButton from "../common/Button";
import FormikTextfield from "../common/field/FormikTextfield";
import {
  contactInitialValue,
  contactValidationSchema,
} from "../container/contact/util";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactUsForm = () => {
  return (
    <Grid container mt={["40px", "40px", "0px"]} p={["10px", "30px", "0px"]}>
      <Grid item xs={12} md={8}>
        <Formik
          initialValues={contactInitialValue}
          validationSchema={contactValidationSchema}
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => {
            const templateParams = {
              to_name: values.email,
              from_name: values.fullName,
              message: values.message,
            };
            emailjs
              .send(
                "service_szjxdic",
                "template_svrrbn9",
                templateParams,
                "oc863Ji72HvxCa3R5"
              )
              .then(
                () => {
                  toast(
                    "Hey! I got your mail. Let's catchup. I will mail you 😎",
                    {
                      position: "top-center",
                    }
                  );
                },
                () => {
                  toast.error(
                    "Hey! Something went wrong🙃. You can contact me through whatsapp also.😄",
                    {
                      position: "top-center",
                    }
                  );
                }
              )
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
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
                <PrimaryButton
                  isLoading={isSubmitting}
                  onClick={() => handleSubmit()}
                  text="Send Message"
                />
              </Grid>
            </Grid>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default ContactUsForm;
