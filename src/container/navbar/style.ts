import Styled from '@emotion/styled';
import { COLOR_THEME } from '../../constant/color';

export const StyledNav = Styled.nav`
    background: rgba(0, 0, 0, 0.3);
    width: max-content;
    display: block;
    padding: 0.7rem 1.7rem;
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    display: flex;
    gap: 0.9rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);
`;

type StyledLinkProps = {
    isactive: number;
}
export const StyledLink = Styled.a<StyledLinkProps>`
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    color: var(--color-primary);
    font-size: 1.1rem;
    ${(props) => props.isactive && `
    background: ${COLOR_THEME.btnBackground};
    color: ${COLOR_THEME.white};
    `}
`;