// @mui
import { styled } from '@mui/material/styles';
import { Stack, Alert, IconButton, InputAdornment, Container, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import Page from '../components/Page';

import * as Yup from 'yup';
import { useState } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import { FormProvider, RHFTextField } from '../components/hook-form';
import Iconify from '../components/Iconify';
import { api } from 'src/services/api';

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

export default function GenerateJWT() {
  const [showPassword, setShowPassword] = useState(false);
  const [jwt, setJWT] = useState('');

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

  const onSubmit = async ({ email, password }: FormValuesProps) => {
    try {
      const { data } = await api.post('/generate-jwt', {
        email,
        password,
      });
      setJWT(data.jwt);
    } catch (error) {
      reset();

      setError('afterSubmit', { ...error, message: error.message });
    }
  };

  return (
    <Page title="Generate Token">
      <RootStyle>
        <Container sx={{ py: 5, maxWidth: 480 }}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
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

              <TextField placeholder="JWT" size="small" multiline minRows={2} value={jwt} />
            </Stack>
          </FormProvider>
        </Container>
      </RootStyle>
    </Page>
  );
}
