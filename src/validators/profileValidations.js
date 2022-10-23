import * as yup from 'yup';

export const userProfileUpdateValidation = () =>
    yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        mobile_number: yup.string().required(),
        about: yup.string().max(100)
    });
