/* eslint-disable prettier/prettier */
import Shurjopay from 'shurjopay';
import config from '../../app/config';

const shurjopay = new Shurjopay()

shurjopay.config(
  config.sp.sp_endpoint!,
  config.sp.sp_username!,
  config.sp.sp_password!,
  config.sp.sp_prefix!,
  config.sp.sp_return_url!
)

console.log(shurjopay);
