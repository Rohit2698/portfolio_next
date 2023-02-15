import Styled from "@emotion/styled";
import { COLOR_THEME } from "../../constant/color";

export const FooterContainer = Styled.footer`
    background: linear-gradient( var(--color-primary),transparent);
    padding: 3rem 0;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 7rem;

    a{
        color: #1f1f38;
    }
`;

export const FooterSocial = Styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;

    a {
        background: ${COLOR_THEME.primaryDark};
    color: ${COLOR_THEME.light};
    padding: 0.8rem;
    border-radius: 0.8rem;
    display: flex;
    border: 1px solid transparent;

    &:hover {
        background: transparent;
    color: ${COLOR_THEME.backgroundColor};
    border-color: ${COLOR_THEME.backgroundColor};
    }
    }
`;

export const FooterCopyrightContainer = Styled.div`
    margin-bottom: 4rem;
    color: ${COLOR_THEME.backgroundColor};
`;

export const PeraLinks = Styled.ul`
    li {
        margin-bottom: 10px;
        a {
            color: white;
            &:hover {
                color: ${COLOR_THEME.primaryDark};
            }
        }
    }
`;