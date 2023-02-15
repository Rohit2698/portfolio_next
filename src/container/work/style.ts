import Styled from "@emotion/styled";
import { motion } from "framer-motion";

export const PortfolioItem = Styled(motion.article)`
    padding: 1rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);
    border-color: var(--color-primary-variant);
    background: transparent;

    &:hover {
        background: rgba(38, 112, 173, 0.589);
    }

    h3 {
        margin: 1.2rem 0 2rem;
    }
`;

export const PortfolioItemImage = Styled.div`
    border-radius: 1rem;
    overflow: hidden;
    img {
        height: 300px;
        width: 100%;
        object-fit: contain;
        border-radius: 1rem;
    }
`;

export const PortfolioItemCta = Styled.div`
    width: max-content;
     display: flex;
     gap: 1rem;
     margin: 0 auto;
`;