import React, { Fragment } from "react";
import { Radio, RadioGroup, Input, Text, Stack, Box } from '@chakra-ui/react'
import { ErrorMessage } from "formik";

export const AddGatewayDeviceInputs = ({ fieldsName, handleOnChange, errors }) => {
    return (
        <Fragment>
            <div className="col">
                <Text as="label" marginInlineStart={"4px"}>UID Number:</Text>
                <Input
                    placeholder="UID Number"
                    marginBlock={"6px"}
                    isInvalid={errors.uidNumber}
                    paddingInlineStart={"4px"}
                    name={fieldsName.uidNumber}
                    onChange={handleOnChange}
                    type="number"
                />
                <Box as="p" color={"red"}><ErrorMessage name={fieldsName.uidNumber} /></Box>
            </div>
            <div className="col">
                <Text as="label" marginInlineStart={"4px"}>Vendor:</Text>
                <Input
                    placeholder="Vendor"
                    marginBlock={"6px"}
                    paddingInlineStart={"4px"}
                    name={fieldsName.vendor}
                    onChange={handleOnChange}
                    isInvalid={errors.vendor}
                    type="text"
                />
                <Box as="p" color={"red"}><ErrorMessage name={fieldsName.vendor} /></Box>
            </div>
            <div className="col">
                <Text as="label" marginInlineStart={"4px"}>Creation Date:</Text>
                <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                    marginBlock={"6px"} paddingInlineStart={"4px"}
                    name={fieldsName.creationDate}
                    isInvalid={errors.creationDate}
                    onChange={handleOnChange}
                />
                <Box as="p" color={"red"}><ErrorMessage name={fieldsName.creationDate} /></Box>
            </div>
            <RadioGroup
                defaultValue='offline'
                onChange={(value) => handleOnChange({ target: { name: fieldsName.status, value } })}
                name={fieldsName.status}>
                <Text as="label" marginInlineStart={"4px"}>Status:</Text>
                <Stack spacing={5} direction='row'>
                    <Radio colorScheme='green' value='offline'>
                        Offline
                    </Radio>
                    <Radio colorScheme='green' value='online'>
                        Online
                    </Radio>
                </Stack>
            </RadioGroup>
        </Fragment>
    )
}