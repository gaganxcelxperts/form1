import React ,{useState} from "react";
import { useFormik } from "formik";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import {
    step1Validation,
    step2Validation,
    step3Validation,
} from "./validationSchema"
import type { FormValues } from "./types";

const MultiStepForm:React.FC=()=>{
    const [step,setStep]=useState(0);

    const validationSchemas=[step1Validation,step2Validation,step3Validation];

    const formik=useFormik<FormValues>({
        initialValues:{
            name:"",
            email:"",
            password:"",
            confirmPassword:"",
            address:""
        },
        validationSchema:validationSchemas[step],
        onSubmit:(values)=>{
            alert("Form submitted" + JSON.stringify(values,null,2))
        }
    });

    const next=()=>{
        formik.setTouched(
            Object.keys(formik.values).reduce((acc,key)=>{
                acc[key as keyof FormValues]=true;
                return acc;
            },{} as Record<keyof FormValues, boolean>)
        );

        formik.validateForm().then((errors)=>{
            if(Object.keys(errors).length===0){
                setStep((prev)=>prev+1);
            }
        })
    };

    const prev=()=>setStep((prev)=>prev-1);


    return(
        <form
            className="bg-zinc-900 h-screen p-10 text-zinc-200"
            onSubmit={formik.handleSubmit}
            >
                <h1 className="text-4xl mb-10">Formik + Yup Multi step Form</h1>
                <div>
                    {step===0 && <Step1 formik={formik}/>}
                    {step===1 && <Step2 formik={formik}/>}
                    {step===2 && <Step3 formik={formik}/>}

                    <div>
                        {step>0 && (
                            <button
                                className="bg-orange-500 px-4 py-1 rounded-md text-white"
                                type="button"
                                onClick={prev}
                            >
                                Back
                            </button>
                        )}
                        {step <2 && (
                            <button onClick={next} type="button" className="bg-blue-500 text-white px-4 py-1 rounded-md">
                                Next
                            </button>
                        )}

                        {step===2 && (
                            <button
                                className="bg-green-500 px-4 py-1 rounded-md"
                            type="submit">
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            </form>
    )
}


export default MultiStepForm;
