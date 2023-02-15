import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Grid } from "@mui/material";
import { BoldText } from "../container/about/style";

const AboutMyJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref}>
      <motion.h5
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -500 }}
        exit={{}}
        transition={{ duration: isInView ? 1.5 : 0 }}
      >
        Still finding things that i love...
      </motion.h5>
      <motion.h2
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 500 }}
        transition={{ duration: isInView ? 1.5 : 0 }}
      >
        About Me
      </motion.h2>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} p={["10px", 0]} md={6} textAlign={"center"}>
          <motion.h4>
            <motion.p
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -500 }}
              exit={{}}
              transition={{ duration: isInView ? 1.5 : 0 }}
            >
              Greetings, internet traveler! I'm{" "}
              <BoldText>Rohit Thakur</BoldText>, a{" "}
              <BoldText>software developer</BoldText> with a wild imagination
              and a love for creating cool things with code. With{" "}
              <BoldText>3+</BoldText> years of experience under my belt, I've
              become a master of <BoldText>Nothing🤓</BoldText>.
            </motion.p>
            <motion.p
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -500 }}
              exit={{}}
              transition={{ duration: isInView ? 2.5 : 0 }}
            >
              When I'm not coding, you can find me{" "}
              <BoldText>daydreaming 💭</BoldText> about new and innovative ways
              to change the world with software. I'm always on the lookout for
              the latest tech trends, and I get a thrill from learning new
              skills and expanding my knowledge.
            </motion.p>
            <motion.p
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -500 }}
              exit={{}}
              transition={{ duration: isInView ? 4.5 : 0 }}
            >
             
            </motion.p>
            <motion.p
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -500 }}
              exit={{}}
              transition={{ duration: isInView ? 4.5 : 0 }}
            >
              My portfolio showcases some of my favorite <BoldText>projects 📽</BoldText> and
              demonstrates my ability to work independently or as part of a
              team. I take pride in my attention to detail, my quick thinking,
              and my commitment to delivering software that is not only
              functional, but also fun and visually appealing.
            </motion.p>
            <motion.p
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -500 }}
              exit={{}}
              transition={{ duration: isInView ? 5.5 : 0 }}
            >
              When I'm not coding, and If you are lucky enough, You can also find me playing <BoldText>guitar 🎸</BoldText> and writing <BoldText>Shayaris👁</BoldText>
             You can go to my instagram. It is open. I am also influencer with 100 <BoldText>followers🙃</BoldText>(PJ) I'm a firm believer that a healthy work-life balance
              is essential for <BoldText>happiness</BoldText> and <BoldText>creativity</BoldText>, so I like to make time
              for the things I love outside of work.
            </motion.p>
            <motion.p
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -500 }}
              exit={{}}
              transition={{ duration: isInView ? 6.5 : 0 }}
            >
              So if you're looking for a software developer with a creative
              streak, a love for learning, and a passion for creating amazing
              things, then look no further! Let's <BoldText>connect</BoldText> and see what kind of
              magic we can make together. You can reach me through my <BoldText>contact </BoldText>
              form or email address, and I'll get back to you faster than you
              can say
              <p><BoldText>"HELLO WORLD.😎"</BoldText> </p>
              <p><BoldText>🙏</BoldText> </p>
            </motion.p>
          </motion.h4>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutMyJourney;
