import React, { Fragment } from "react";
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import { Button, Radio, RadioGroup, Input, Heading, Text, Stack, Flex } from '@chakra-ui/react'


const AddGatewayDeviceFields = ({ fieldsName }) => {
   return (
      <Fragment>
         <div className="col">
            <Text as="label" marginInlineStart={"4px"}>UID Number:</Text>
            <Input placeholder="UID Number" marginBlock={"6px"}
               paddingInlineStart={"4px"} name={fieldsName.uidNumber}
               type="number" />
         </div>
         <div className="col">
            <Text as="label" marginInlineStart={"4px"}>Vendor:</Text>
            <Input placeholder="Vendor" marginBlock={"6px"}
               paddingInlineStart={"4px"} name={fieldsName.vendor}
               type="text" />
         </div>
         <RadioGroup defaultValue='2'>
            <Text as="label" marginInlineStart={"4px"}>Status:</Text>
            <Stack spacing={5} direction='row'>
               <Radio colorScheme='green' value='1'>
                  Offline
               </Radio>
               <Radio colorScheme='green' value='2'>
                  Online
               </Radio>
            </Stack>
         </RadioGroup>
      </Fragment>
   )
}
const RemoveGatwayDeviceButton = ({ removeGatewayDevice }) => {
   return (
      <section className="d-flex justify-content-center">
         <Button colorScheme='teal' size={"sm"} variant='outline' type="button" onClick={removeGatewayDevice}>Remove Device</Button>
      </section>
   )
}
const AddGatewayDevicesButton = ({ addGatewayDevice }) => {
   return (
      <Button colorScheme='teal' size={"sm"} variant='outline' marginBlockStart={"12px"} type="button" onClick={addGatewayDevice}>
         Add Device
      </Button>
   )
}
const initialValues = {
   gatewatName: '',
   serialNumber: '',
   ipv4Address: '',
   devices: []
}
const AddGateway = () => {
   const handleSubmit = () => { };
   return (
      <section>
         <Heading className="text-center">Add Gateway</Heading>
         <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            {({ values }) => {
               console.log(values.devices)
               return (
                  <Form>
                     <div className="col">
                        <Text as="label" marginInlineStart={"4px"}>Gateway Name:</Text>
                        <Input placeholder="Gateway Name" marginBlock={"6px"} paddingInlineStart={"4px"} name="gatewayName" />

                     </div>
                     <div className="col">
                        <Text as="label" marginInlineStart={"4px"}>Serial Number:</Text>
                        <Input placeholder="Serial Number" marginBlock={"6px"} paddingInlineStart={"4px"} name="serialNumber" />

                     </div>
                     <div className="col">
                        <Text as="label" marginInlineStart={"4px"}>IPv4 address:</Text>
                        <Input placeholder="IPv4 address" marginBlock={"6px"} paddingInlineStart={"4px"} name="ipv4Address" />

                     </div>
                     {values.devices.length > 0 && <Heading as='h3' marginBlock={"15px"} size='md'>Peripheral Devices Max: 10</Heading>}
                     <FieldArray name="devices">
                        {({ insert, remove, push }) => (
                           <Fragment>
                              {values.devices.length > 0 &&
                                 values.devices.map((device, index) => (
                                    <section className="row" key={index}>
                                       <Flex justifyContent="end">
                                          <RemoveGatwayDeviceButton removeGatewayDevice={() => remove(index)} />
                                       </Flex>
                                       <AddGatewayDeviceFields fieldsName={{
                                          vendor: `devices.${index}.vendor`,
                                          status: `devices.${index}.status`,
                                          uidNumber: `devices.${index}.uidNumber`
                                       }} />
                                    </section>
                                 ))}
                              <AddGatewayDevicesButton addGatewayDevice={() => {
                                 push({
                                    status: "offline",
                                    uidNumber: '',
                                    vendor: ''
                                 });
                              }} />
                           </Fragment>
                        )}
                     </FieldArray>
                     <Flex justifyContent={"center"}>
                        <Button colorScheme='teal' variant='outline'
                           marginBlockStart={"12px"} size="lg" type="submit">
                           Submit
                        </Button>
                     </Flex>
                  </Form>
               )
            }}
         </Formik>
      </section>
   )
};
export default AddGateway;