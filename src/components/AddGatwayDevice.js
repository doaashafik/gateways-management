import React, { Fragment } from "react";
import { Radio, RadioGroup, Input, Text, Stack } from '@chakra-ui/react'

export const AddGatewayDeviceFields = ({ fieldsName }) => {
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