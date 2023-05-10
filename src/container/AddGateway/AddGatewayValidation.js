import { array, object, string, number, date } from 'yup';


/* Regex validate Inputs */
const ipv4AddressRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
const serialNumberRegex = /\d{2}-\d{5}-\d{6}/
const uidNumberRegex = /^([0-9]){10}$/
/* Regex validate Inputs */


export const initialValues = {
  name: '',
  id: '',
  serialNumber: '',
  ipv4Address: '',
  devices: []
};
export const gatewayDeviceSchema = object({
  status: string().oneOf(['offline', 'online']),
  uidNumber: string().matches(uidNumberRegex, { message: "Must be 10 numbers - No number should repeat" }).required("Required"),
  vendor: string().required("Required"),
  creationDate: date().required("Required"),
});

export let gatewaySchema = object({
  id: number(),
  name: string().required("Required"),
  serialNumber: string()
    .matches(serialNumberRegex, { message: "Must be 15 char - Only contain numbers - Dash separators at positions 2 and 8 (counting from 0)" }).required("Required"),
  ipv4Address: string().matches(ipv4AddressRegex, { message: "IPV4 Address is not valid" }).required("Required"),
  devices: array(gatewayDeviceSchema).max(10, "Maximum 10 Devices")
});

