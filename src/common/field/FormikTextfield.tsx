import { TextField, TextFieldProps } from '@mui/material';
import { useField } from 'formik';
import React, { FC } from 'react'
import { StyledTextfield } from './Style';

type Props = {
    id: string;
    name: string;
} & TextFieldProps;

const FormikTextfield:FC<Props> = ({
    id,
    name,
    ...rest
}) => {

    const [field] = useField(name);
  return (
    <StyledTextfield>
        <TextField 
            {...field}
            {...rest}
            fullWidth
        />
    </StyledTextfield>
  )
}

export default FormikTextfield