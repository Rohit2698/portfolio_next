import React, { FC, useRef } from 'react'
import { WebisteInfoType } from '../container/work/type'
import {motion,useInView} from "framer-motion";
import { PortfolioItem, PortfolioItemCta, PortfolioItemImage } from '../container/work/style';

type Props = {
    info: WebisteInfoType;
    index: number;
    isInView: boolean;
}
const WebsiteInfo:FC<Props> = ({
    info,
    index,
    isInView
}) => {

  return (
    <PortfolioItem
        animate={{opacity:isInView?1:0}}
        transition={{duration:isInView?1:0,delay:isInView?index:0}}
        >
        <PortfolioItemImage>
          <img src={info.image} alt="" />
        </PortfolioItemImage>
          <h3>{info.title}</h3>
          <PortfolioItemCta>
          <a href={info.github} className='btn' target="_blank">Github</a>
          <a href={info.live} className='btn btn-primary' target="_blank">Live View</a>
          </PortfolioItemCta>
      </PortfolioItem>
  )
}

export default WebsiteInfo