import * as Yup from "yup";
import {
    INPUT_REQUIRED, INVALID_EMAIL,
    NUMBER_TO_SHORT_ERROR,
    PASSWORD_INCORRECT,
    PASSWORD_REGISTER_CONTAIN,
    PASSWORD_SHORT,
    SHOULD_BE_DIGITS_ONLY,
    TITLE_LONG,
    TITLE_SHORT
} from "../config/config";


const yupEmail = () =>
    Yup.string()
        .email(INVALID_EMAIL)
        .required(INPUT_REQUIRED)

const yupPasswordLogin = () =>
    Yup.string()
        .min(6, PASSWORD_INCORRECT)
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/, PASSWORD_INCORRECT)
        .required(INPUT_REQUIRED)

const yupTitles = () =>
    Yup.string()
        .min(4, TITLE_SHORT)
        .max(200, TITLE_LONG)
        .required(INPUT_REQUIRED);

const yupPassRegister = () =>
    Yup.string()
        .min(8, PASSWORD_SHORT)
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/, PASSWORD_REGISTER_CONTAIN)
        .required(INPUT_REQUIRED)

const yupConfirmPass = (passRef, passMsg) =>
    Yup.string()
        .oneOf([Yup.ref(passRef), null], passMsg)
        .required(INPUT_REQUIRED)

const yupPhone = () =>
    Yup.string()
        .matches(/^[0-9]+$/, SHOULD_BE_DIGITS_ONLY)
        .min(8, NUMBER_TO_SHORT_ERROR)
        .required(INPUT_REQUIRED);

export {
    yupEmail,
    yupPasswordLogin,
    yupTitles,
    yupPassRegister,
    yupConfirmPass,
    yupPhone
};