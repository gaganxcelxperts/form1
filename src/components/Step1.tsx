import React from "react";
import type { FormikProps } from "formik";
import type { FormValues } from "./types";
import FormInput from "./FormInput";

interface props{
    formik:FormikProps<FormValues>
}

const Step1:React.FC<props>=({formik})=>{
    return(
        <>
        <h2 className="text-blue-500 mb-6">Step 1</h2>
        <FormInput formik={formik} name="name" type="text" placeholder="Enter name" />
        <FormInput formik={formik} name="email" type="email" placeholder="Enter email" />
        </>

    )
}

export default Step1;