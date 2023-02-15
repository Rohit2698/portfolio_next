import { Button } from '@mui/material';
import React, { FC } from 'react'
import { StyledButton } from './Style';

type Props = {
    isLoading?: boolean;
    text: string;
}
const PrimaryButton:FC<Props> = ({
    text,
    isLoading
}) => {
  return (
    <StyledButton>{text}</StyledButton>
  )
}

export default PrimaryButton;
