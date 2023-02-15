import { Grid } from "@mui/material";
import { useInView } from "framer-motion";
import React, { Fragment, useRef } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { LanguageKnownData } from "../constant/languagesKnown";
import {
  ExperienceContainer,
  ExperienceContentContainer,
  ExperienceDetails,
  ExprienceFrontendContainer,
  MyDetailsStyle,
} from "../container/experience/Style";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section style={{marginTop: '2rem'}} ref={ref}>
      <ExperienceContainer className="container">
        <MyDetailsStyle className="my_details">
          <ExprienceFrontendContainer
            container
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 1.4 }}
            transition={{ duration: isInView ? 1 : 0, delay: isInView ? 1 : 0 }}
          >
            {LanguageKnownData.map((item, index) => (
              <Fragment key={index}>
                <Grid mt={[index === 0 ? "10px" : "50px", "10px"]} textAlign={"center"} item xs={12}>
                  <h3>{item.title}</h3>
                </Grid>
                <ExperienceContentContainer item xs={12}>
                  <Grid container spacing={"20px"}>
                    {item.info.map((info) => (
                      <ExperienceDetails
                        display={"flex"}
                        gap={"10px"}
                        item
                        xs={12}
                        md={6}
                        key={info.id}
                      >
                        {
                            info.icon ?  <img style={{height: 40, width: 40}} src={info.icon} alt={info.label} /> : <IoCheckmarkDoneSharp />
                        }
                        <div>
                          <h4>{info.label}</h4>
                          <small className="text-light">
                            {info.experience}
                          </small>
                        </div>
                      </ExperienceDetails>
                    ))}
                  </Grid>
                </ExperienceContentContainer>
              </Fragment>
            ))}
          </ExprienceFrontendContainer>
        </MyDetailsStyle>
      </ExperienceContainer>
    </section>
  );
};

export default Experience;
