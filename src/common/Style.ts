import Styled from "@emotion/styled";
import { Button } from "@mui/material";
import { COLOR_THEME } from "../constant/color";

export const StyledButton = Styled(Button)`
        background: ${COLOR_THEME.primary};
        color: ${COLOR_THEME.btnBackground};
        border: 1px solid #4db5ff;
        border-radius: 0.4rem;
        cursor: pointer;
        display: inline-block;
        padding: 0.75rem 1.2rem;
        transition: all .4s ease;
        width: max-content;
        &:hover {
            background: ${COLOR_THEME.white};
        }
`;
