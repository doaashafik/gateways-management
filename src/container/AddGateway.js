import React, { Fragment } from "react";
import { Formik, Form, FieldArray } from 'formik';
import { Button, Input, Heading, Text, Flex } from '@chakra-ui/react'
import { AddGatewayDeviceFields } from "../components/AddGatwayDevice";

const initialValues = {
   name: '',
   id: '',
   ipv4Address: '',
   devices: []
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
const AddGateway = () => {
   const handleSubmit = () => { };
   return (
      <section>
         <Heading textAlign={"center"} marginBlock={"15px"}>Add Gateway</Heading>
         <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            {({ values }) => {
               console.log(values.devices)
               return (
                  <Form>
                     <div className="col">
                        <Text as="label" marginInlineStart={"4px"}>Gateway Name:</Text>
                        <Input placeholder="Gateway Name" marginBlock={"6px"} paddingInlineStart={"4px"} name="name" />

                     </div>
                     <div className="col">
                        <Text as="label" marginInlineStart={"4px"}>Serial Number:</Text>
                        <Input placeholder="Serial Number" marginBlock={"6px"} paddingInlineStart={"4px"} name="id" />

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