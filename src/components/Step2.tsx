import React from "react";
import type { FormikProps } from "formik";
import type { FormValues } from "./types";
import FormInput from "./FormInput";

interface props{
    formik:FormikProps<FormValues>
}

const Step2:React.FC<props>=({formik})=>{
    return(
        <>
        <h2 className="text-blue-500 mb-6">Step 2</h2>
        <FormInput formik={formik} name="password" type="password" placeholder="password" />
        <FormInput formik={formik} name="confirmPassword" type="password" placeholder="Confirm password" />
        </>

    );
};

export default Step2;