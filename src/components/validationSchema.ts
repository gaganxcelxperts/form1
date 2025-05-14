import * as Yup from "yup";

export const step1Validation=Yup.object({
    name:Yup.string()
    .required("Name is required")
    .min(3,"name must be atleast 3 charachters."),
    email:Yup.string()
    .email("Invalid email")
    .required("email is requried.")
});

export const step2Validation=Yup.object({
    password:Yup.string()
    .required("passsword is required")
    .min(6,"password msut be atleast 6 characters."),
    confirmPassword:Yup.string()
    .required("Confirm password is required.")
    .oneOf([Yup.ref("password")],"Password msut match")
});

export const step3Validation=Yup.object({
    address:Yup.string()
    .required("address is required")
    .min(10,"address msut be alteast 10 characters")
});