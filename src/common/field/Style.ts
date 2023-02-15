import Styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { COLOR_THEME } from "../../constant/color";

export const StyledTextfield = Styled(Grid)`
& .MuiInputBase-root {
    padding: 0px;
}
    input, textarea {
        background: transparent !important;
        border: 3px solid ${COLOR_THEME.primary} !important;
        border-radius: 0.5rem !important;
        color: ${COLOR_THEME.white} !important;
        letter-spacing: .25rem;
        padding: 1.5rem;
        resize: none;
        width: 100%;
        &:hover {
            border: 3px solid #007bff !important;
        }
        ::placeholder,
  ::-webkit-input-placeholder {
    color: ${COLOR_THEME.white};
  }
  :-ms-input-placeholder {
     color: ${COLOR_THEME.white};
  }
    }
`;
