import React, { Fragment } from "react";
import { Formik, Form, FieldArray, ErrorMessage } from 'formik';
import { Button, Input, Heading, Text, Flex, Box } from '@chakra-ui/react'
import { AddGatewayDeviceFields } from "../../components/AddGatwayDevice";
import { gatewaySchema, initialValues } from "./AddGatewayValidation";
import { addGateWay } from "../../apis/gateway";

const AddGateway = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    addGateWay(values).then((data) => { setSubmitting(false); window.location.href = "/" });
  };
  return (
    <section>
      <Heading textAlign={"center"} marginBlock={"15px"}>Add Gateway</Heading>
      <Formik onSubmit={handleSubmit} validateOnBlur={false} validateOnChange={false} initialValues={initialValues} validationSchema={gatewaySchema}>
        {({ values, errors, setFieldValue, isSubmitting }) => {
          return (
            <Form style={{ maxWidth: '80%' }}>
              <div className="col">
                <Text as="label" marginInlineStart={"4px"}>Gateway Name:</Text>
                <Input
                  placeholder="Gateway Name"
                  marginBlock={"6px"}
                  isInvalid={errors.name}
                  paddingInlineStart={"4px"}
                  name="name"
                  onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                />
                <Box as="p" color={"red"}><ErrorMessage name={"name"} /></Box>
              </div>
              <div className="col">
                <Text as="label" marginInlineStart={"4px"}>Serial Number:</Text>
                <Input
                  placeholder="Serial Number"
                  isInvalid={errors.serialNumber}
                  marginBlock={"6px"}
                  paddingInlineStart={"4px"}
                  name="serialNumber"
                  onChange={(e) => setFieldValue(e.target.name, e.target.value)} />
                <Box as="p" color={"red"}><ErrorMessage name={"serialNumber"} /></Box>
              </div>
              <div className="col">
                <Text as="label" marginInlineStart={"4px"}>IPv4 address:</Text>
                <Input
                  isInvalid={errors.ipv4Address}
                  placeholder="IPv4 address"
                  marginBlock={"6px"}
                  paddingInlineStart={"4px"}
                  name="ipv4Address"
                  onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                />
                <Box as="p" color={"red"}><ErrorMessage name={"ipv4Address"} /></Box>
              </div>
              {values.devices.length > 0 && <Heading as='h3' marginBlock={"15px"} size='md'>Peripheral Devices Max: 10</Heading>}
              <FieldArray name="devices">
                {({ remove, push }) => (
                  <Fragment>
                    {values.devices.length > 0 &&
                      values.devices.map((device, index) => (
                        <Fragment className="row" key={index}>
                          <Flex justifyContent="end">
                            <RemoveGatwayDeviceButton removeGatewayDevice={() => remove(index)} />
                          </Flex>
                          <AddGatewayDeviceFields
                            errors={errors.devices ? errors.devices[index] : {}}
                            handleOnChange={(e) => setFieldValue(e.target.name, e.target.value)}
                            fieldsName={{
                              vendor: `devices.${index}.vendor`,
                              status: `devices.${index}.status`,
                              uidNumber: `devices.${index}.uidNumber`,
                              creationDate: `devices.${index}.creationDate`
                            }} />
                        </Fragment>
                      ))}
                    <AddGatewayDevicesButton
                      addGatewayDevice={() => {
                        push({
                          status: "offline",
                          uidNumber: "",
                          vendor: "",
                          creationDate: ""
                        });
                      }}
                    />
                  </Fragment>
                )}
              </FieldArray>
              <Flex justifyContent={"end"}>
                <Button
                  colorScheme='teal'
                  variant='outline'
                  marginBlockStart={"12px"}
                  size="md"
                  type="submit"
                  isLoading={isSubmitting}
                  loadingText={"is Submitting"}
                >
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





/* sub-components of Add gateway form */
const RemoveGatwayDeviceButton = ({ removeGatewayDevice }) => {
  return (
    <section className="d-flex justify-content-center">
      <Button colorScheme='teal' size={"sm"} variant='outline' type="button" onClick={removeGatewayDevice}>Remove Device</Button>
    </section>
  )
};
const AddGatewayDevicesButton = ({ addGatewayDevice }) => {
  return (
    <Button colorScheme='teal' size={"sm"} variant='outline' marginBlockStart={"12px"} type="button" onClick={addGatewayDevice}>
      Add Device
    </Button>
  )
};