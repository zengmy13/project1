import React from 'react';
import {Formik, Field, Form} from "formik";
import * as Yup from 'yup';
import {addcommenttofirebase} from "../../firebase/fromfirebase";


export default function ChartForm(props) {
    const {id, parentId, closeForm} = props;
    const initialValues = {
        comment: ""
    }
    const validationSchema = Yup.object({
        comment: Yup.string().required()
    })
    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, {setSubmitting, resetForm}) => {
                    try {
                        setSubmitting(true);
                        await addcommenttofirebase(id, values, parentId)
                        resetForm();
                        setSubmitting(false);
                        closeForm();
                    } catch (error) {
                        setSubmitting(false)
                    }
                }}>
            {
                ({isSubmitting, dirty, isValid, handleSubmit}) => (
                    <Form className='ui form'>
                        <Field name='comment'>
                            {
                                ({field}) => (
                                    <textarea {...field} rows={3} placeholder='comment'
                                              onKeyUp={(e) => {
                                                  if (!e.shiftKey && e.key === 'Enter') {
                                                      e.preventDefault();
                                                      isValid && handleSubmit();
                                                  } else if (e.shiftKey && e.key === 'Enter') {
                                                      return;
                                                  }
                                              }}
                                    />
                                )
                            }
                        </Field>
                    </Form>
                )
            }
        </Formik>
    )
}