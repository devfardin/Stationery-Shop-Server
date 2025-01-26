/* eslint-disable prettier/prettier */

import { TErrorSources, TGenericErrorResponse } from "../interface/error.interface";

/* eslint-disable @typescript-eslint/no-explicit-any */
const handleDuplicateError = (error: any): TGenericErrorResponse => {
  const statusCode = 400;
  const messageExtract = error?.message.match(/"(.*?)"/g).map((text: string) => text.replace(/"/g, ''));
  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${ messageExtract[0]} is already exist.`,
    },
  ];
  return {
    statusCode,
    message: 'Duplicate id',
    errorSources,
  };
};
export default handleDuplicateError;
