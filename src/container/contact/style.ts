import Styled from '@emotion/styled';
import { COLOR_THEME } from '../../constant/color';

export const StyledMessageContainer = Styled.article`
    background: rgba(0,102,205,.883);
    border: 1px solid transparent;
    border-radius: 1.2rem;
    padding: 1.2rem;
    text-align: center;
    transition: all 400ms ease;

    &:hover {
        background: transparent;
    border-color: ${COLOR_THEME.primary};
    }
`;