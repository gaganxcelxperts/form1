import React from "react";
import type { FormikProps } from "formik";
import type { FormValues } from "./types";

interface FormInputProps{
    formik:FormikProps<FormValues>;
    name:keyof FormValues;
    type:string;
    placeholder:string,

}

const FormInput:React.FC<FormInputProps>=({formik,name,type,placeholder})=>{
    const error=formik.touched[name] && formik.errors[name];

    return(
        <div className="mb-6">
            <input type={type}
            name={name}
            placeholder={placeholder}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`bg-zinc-700 px-4 py-1 rounded-md w-full ${error ? "border border-red-400" :""}`}
             />
             {error && <div className="text-red-500 mt-1 text-sm">{formik.errors[name]}</div>}
        </div>
    )
}

export default FormInput;


