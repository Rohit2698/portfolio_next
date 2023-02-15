import Styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { COLOR_THEME } from "../../constant/color";

export const ExperienceContainer = Styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 5%;
`;

export const MyDetailsStyle  = Styled.div`
    width:70%;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    margin: 0 auto;
    @media screen and (max-width:1024px) {
        grid-template-columns: 1fr;
        margin-bottom: 5rem;
    }
    @media screen and (max-width:600px) {
        width: 100%;
        gap: 1rem;
    }
`;

export const ExprienceFrontendContainer = Styled(motion(Grid))`
    background: ${COLOR_THEME.primaryDark};
    padding: 3.4rem;
    width: 100%;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: all 400ms ease;
    margin: 0 auto;

    &:hover {
        background: transparent;
    border-color: ${COLOR_THEME.primary}
    cursor: default;
    }
    h3 {
        text-align: center;
    color: ${COLOR_THEME.white};
    margin-bottom: 2rem;
    row-gap: 2rem;
    }
`;

export const ExperienceDetails  = Styled(Grid)`
    display: flex;
    gap: 1rem;
    color: rgb(225, 255, 180);
`;
export const ExperienceContentContainer = Styled(Grid)`
`;