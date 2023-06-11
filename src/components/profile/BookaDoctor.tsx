// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import " as Yup from 'yup";



// const BookaDoctor = Yup.object().shape({
//     phoneNumber: Yup.string()
//     .min(10, "Too Short!")
//     .max(10, "Too Long!")
//     .required("Required"),
// });

// const ValidationSchemaExample = () => {
//     return (
//         <Formik
//             initialValues={{
//                 phoneNumber: "",
//             }}
//             validationSchema={BookaDoctor}
//             onSubmit={(values) => {
//                 console.log(values);
//             }}
//         >
//             {({ errors, touched }) => (
//                 <Form>
//                     <Field name="phoneNumber" />
//                     {errors.phoneNumber && touched.phoneNumber ? (
//                         <div>{errors.phoneNumber}</div>
//                     ) : null}
//                     <button type="submit">Submit</button>
//                 </Form>
//             )}
//         </Formik>
//     );
// }

// export default BookaDoctor;