import { Grid } from "@mui/material";
import React, { useRef } from "react";
import WebsiteInfo from "../../component/WebsiteInfo";
import { websiteData } from "../../constant/languagesKnown";
import { motion, useInView } from "framer-motion";

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id={"websites"} ref={ref}>
      <motion.h5
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: isInView ? 1 : 0 }}
      >
        Projects
      </motion.h5>
      <motion.h2
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 500 }}
        transition={{ duration: isInView ? 1.5 : 0 }}
      >
        Websites
      </motion.h2>
      <Grid container p={["10px", "80px"]} spacing={"40px"} className="container">
        {websiteData.map((item, index) => (
          <Grid item xs={12} md={6}>
            <WebsiteInfo isInView={isInView} info={item} index={index} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Work;
