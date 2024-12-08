import React, { useState } from 'react';
import { Box, InputBase, Typography, Select, MenuItem, Dialog, DialogContent, Button, Grid } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import XButton from '@/theme/components/xButton';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';

const useStyles = makeStyles({
  submit: {
    width: 'fit-content'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  inputBase: {
    backgroundColor: 'transparent',
    border: '1px solid #1F1F1F',
    borderRadius: '12px',
    padding: '12px 12px',
    width: '100%',
    color: '#fff !important',
    fontFamily: 'Roboto !important',

  },
  errorText: {
    color: '#ff4b4b',
    fontSize: '13px !important',
  },
});

const SupportForm: React.FC = () => {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    subject: Yup.string().required('Please select a subject'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
      .required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (
    values: { name: string; subject: string; phone: string; message: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log('Form Data', values);

    // Mock condition for successful submission
    const isSuccessful = values.name && values.subject && values.phone && values.message;

    if (isSuccessful) {
      setSubmissionStatus('success');
      setOpenPopup(true);
      setTimeout(() => {
        setOpenPopup(false);
      }, 3000);
      resetForm();
    } else {
      setSubmissionStatus('error');
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        subject: '',
        phone: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Box display="flex" flexDirection="column" gap={2} width="100%" mt={4}>

            <Grid container spacing={2}>
              <Grid item lg={4} md={4} sm={12} xs={12}>
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
              </Grid>

              <Grid item lg={4} md={4} sm={12} xs={12}>
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
              </Grid>

              <Grid item lg={4} md={4} sm={12} xs={12} >
                <Box className={classes.inputContainer}>
                  <Field name="subject">
                    {({ field }: any) => (
                      <Select
                        sx={{
                          padding: '0px',
                          borderRadius: '12px',
                        }}
                        {...field}
                        displayEmpty
                        className={classes.inputBase}
                        error={touched.subject && Boolean(errors.subject)}
                      >
                        <MenuItem value="" disabled>
                          Choose any subject
                        </MenuItem>
                        <MenuItem value="Wallet and Transaction">Wallet and Transaction</MenuItem>
                        <MenuItem value="Integration(DApps)">Integration(DApps)</MenuItem>
                        <MenuItem value="SDK">SDK</MenuItem>
                        <MenuItem value="Press Inquiry">Press Inquiry</MenuItem>
                        <MenuItem value="Careers">Careers</MenuItem>
                        <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                      </Select>
                    )}
                  </Field>
                  {touched.subject && errors.subject && (
                    <Typography className={classes.errorText}>{errors.subject}</Typography>
                  )}
                </Box>
              </Grid>
            </Grid>

            {/* Full Row Message Field */}
            <Box className={classes.inputContainer}>
              <Field
                sx={{
                  padding: '12px'
                }}
                name="message"
                placeholder="Briefly describe your requirements (Optional)"
                as={InputBase}
                multiline
                rows={4}
                className={classes.inputBase}
                error={touched.message && Boolean(errors.message)}
              />
              {touched.message && errors.message && (
                <Typography className={classes.errorText}>{errors.message}</Typography>
              )}
            </Box>



            <Box sx={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Box sx={{
                background: 'linear-gradient(90deg, #0DC1C3, #17FCD700, #17FCD700, #0DC1C3)',
                padding: '1px',

                borderRadius: '30px',

              }}>

                <Link type="submit" className={classes.submit} href={''}>
                  <Button
                    sx={{
                      fontFamily: 'Roboto',
                      textTransform: 'capitalize',
                      background: "linear-gradient(90deg, #1999E5, #000202)",
                      boxShadow: 'none',
                      borderRadius: '30px',
                      padding: '10px 30px',
                      color: '#fff',
                      '&:hover': {
                        boxShadow: 'none'
                      }
                    }}>
                    Submit Message
                  </Button>
                </Link>

              </Box>s
            </Box>
          </Box>

          {/* Conditional Success Popup */}
          {submissionStatus === 'success' && (
            <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
              <DialogContent>
                <Typography variant="h6" align="center">
                  Form submitted successfully!
                </Typography>
              </DialogContent>
            </Dialog>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SupportForm;
