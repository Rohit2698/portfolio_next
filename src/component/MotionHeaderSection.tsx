import { useInView, motion } from "framer-motion";
import React, { FC, useRef } from "react";

type Props = {
  id: string;
  title: string;
  subTitle?: string;
};
const MotionHeaderSection: FC<Props> = ({ id, title, subTitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id={id} ref={ref}>
      {subTitle && (
        <motion.h5
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: isInView ? 1 : 0 }}
        >
          {subTitle}
        </motion.h5>
      )}

      <motion.h2
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 500 }}
        transition={{ duration: isInView ? 1.5 : 0 }}
      >
        {title}
      </motion.h2>
    </section>
  );
};

export default MotionHeaderSection;
