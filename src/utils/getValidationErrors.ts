import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const valitationErrors: Errors = {};
  err.inner.forEach((error) => {
    valitationErrors[error.path] = error.message;
  });
  return valitationErrors;
}
