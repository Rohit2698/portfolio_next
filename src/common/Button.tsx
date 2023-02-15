import { ButtonProps } from '@mui/material';
import React, { FC } from 'react'
import { StyledButton } from './Style';

type Props = {
    isLoading?: boolean;
    text: string;
} & ButtonProps
const PrimaryButton:FC<Props> = ({
    text,
    isLoading,
    ...rest
}) => {
  return (
    <StyledButton {...rest}>
      {text}
      </StyledButton>
  )
}

export default PrimaryButton;
