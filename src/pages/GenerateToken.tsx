// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// routes
// components
import Page from '../components/Page';

import * as Yup from 'yup';
import { useState } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, Alert, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components

import { FormProvider, RHFTextField } from '../components/hook-form';
import Iconify from 'src/components/Iconify';

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  password: string;
  remember: boolean;
  afterSubmit?: string;
};

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export default function GenerateToken() {
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  return (
    <Page title="Login">
      <RootStyle>
        <Container sx={{ py: 5, maxWidth: 480 }}>
          <FormProvider methods={methods} onSubmit={handleSubmit(() => {})}>
            <Stack spacing={2}>
              {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

              <RHFTextField name="email" label="Email address" size="small" />

              <RHFTextField
                name="password"
                label="Password"
                size="small"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <LoadingButton
                fullWidth
                size="small"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Generate Token
              </LoadingButton>
            </Stack>
          </FormProvider>
        </Container>
      </RootStyle>
    </Page>
  );
}
