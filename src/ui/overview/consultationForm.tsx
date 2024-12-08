import React from 'react';
import { Box, InputBase, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import XButton from '@/theme/components/xButton';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  submit: {
    '& a': {
      width: '100%',
      justifyContent: 'center'
    }
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  inputBase: {
    backgroundColor:'#2D3037',
    border: '1px solid #4D5054',
    borderRadius: '8px',
    padding: '10px 12px',
    width: '100%',
    color:'#fff !important',
    fontFamily:'Roboto !important'
  },
  errorText: {
    color: '#ff4b4b',
    fontSize: '13px !important',
  }
});

const ConsultationForm = () => {
  const classes = useStyles();

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
      .required('Phone number is required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form Data', values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Box display="flex" flexDirection="column" gap={2} width="100%">
            <Box className={classes.inputContainer}>
              
              <Field
                name="name"
                placeholder="Name"
                as={InputBase}
                className={classes.inputBase}
                error={touched.name && Boolean(errors.name)}
              />
              {touched.name && errors.name && (
                <Typography className={classes.errorText}>{errors.name}</Typography>
              )}
            </Box>

            <Box className={classes.inputContainer}>
               
              <Field
                name="email"
                placeholder="Email Address"
                as={InputBase}
                className={classes.inputBase}
                error={touched.email && Boolean(errors.email)}
              />
              {touched.email && errors.email && (
                <Typography className={classes.errorText}>{errors.email}</Typography>
              )}
            </Box>

            <Box className={classes.inputContainer}>
               
              <Field
         
                name="phone"
                placeholder="Phone Number"
                as={InputBase}
                className={classes.inputBase}
                error={touched.phone && Boolean(errors.phone)}
              />
              {touched.phone && errors.phone && (
                <Typography className={classes.errorText}>{errors.phone}</Typography>
              )}
            </Box>

            <Link className={classes.submit} type="submit" href={''}>
              <XButton text={'Consultation'} xLink={''} />
            </Link>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ConsultationForm;
