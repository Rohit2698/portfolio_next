import { object, string } from "yup"

export const contactInitialValue = {
    fullName: '',
    email: '',
    message: ''
}

export const contactValidationSchema = object().shape({
    fullName: string().required("Please enter your full name"),
    email: string().required('Please enter your email'),
    message: string().required('Please enter message')
});
