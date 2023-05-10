import { Heading, Text, CardBody, Card, CardHeader, Button, SimpleGrid } from "@chakra-ui/react"
import React, { Fragment, useEffect, useState } from "react"
import { addGateWayDevice, deleteGateWayDevice, getGatewayDetials } from "../apis/gateway";
import AddGatewayDeviceModal from "../components/AddGatwayDeviceModal";
import { useParams } from 'react-router-dom';

const GatewayDevicesList = ({ devices, handleRemoveDevice }) => {
    return (
        <Fragment>
            <Heading as="h4" marginBlock={"15px"} size="md">Peripheral Devices</Heading>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
                {devices.map((device) => (
                    <Card key={device.uidNumber}>
                        <CardHeader>
                            <Heading size='md'>{device.vendor}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text><strong>UID Number:</strong> {device.uidNumber}</Text>
                            <Text><strong>Status:</strong> {device.status}</Text>
                            <Text as="p">
                                <strong>Creation Date: </strong>{<time dateTime={`${new Date(device.creationDate).toDateString()}`}>{new Date(device.creationDate).toDateString()}</time>}</Text>
                            <Button
                                colorScheme='teal'
                                size={"sm"}
                                variant='outline'
                                marginBlockStart={"12px"}
                                type="button"
                                onClick={() => handleRemoveDevice(device.uidNumber)}>Remove Device</Button>
                        </CardBody>
                    </Card>
                ))}
            </SimpleGrid>

        </Fragment>
    )
}
const GatewayDetials = () => {
    const [gateway, setGateway] = useState(null);
    const [isGatewayDeviceModalOpen, setGatewayDeviceModalOpen] = React.useState(false);
    const [noData, setNoData] = React.useState(null);
    const { id } = useParams();

    /* Actions */
    const handleSubmitDevice = (values, { setSubmitting }) => {
        let updatedGateway = {
            ...gateway,
            devices: [...gateway.devices, values]
        };
        addGateWayDevice(id, updatedGateway).then((data) => {
            setSubmitting(false);
            setGateway(updatedGateway);
            setGatewayDeviceModalOpen(false)
        });
    }
    const handleRemoveDevice = (uidNumber) => {
        deleteGateWayDevice(id, {
            ...gateway,
            devices: gateway.devices.filter(device => device.uidNumber !== uidNumber)
        })
    }
    /* Actions */


    useEffect(() => {
        getGatewayDetials(id)
            .then(({ data }) => {
                setGateway(data);
                setNoData(null);
            })
            .catch(error => setNoData(error.message));
    }, []);
    return (
        <Fragment>
            {gateway &&
                <section>
                    <Heading as="h1" marginBlock={"15px"}>
                        Gateway {gateway.name}
                    </Heading>
                    <Text>Serial Number: {gateway.serialNumber}</Text>
                    <Text>IPV4 Address: {gateway.ipv4Address}</Text>
                    {gateway.devices?.length > 0 &&
                        <GatewayDevicesList
                            devices={gateway.devices}
                            handleRemoveDevice={handleRemoveDevice} />
                    }
                    <Button
                        colorScheme='teal'
                        isDisabled={gateway.devices.length >= 10}
                        size={"md"}
                        variant='outline'
                        marginBlockStart={"12px"}
                        type="button"
                        onClick={() => setGatewayDeviceModalOpen(true)}>Add Device</Button>
                </section>
            }
            <AddGatewayDeviceModal
                isOpen={isGatewayDeviceModalOpen}
                onClose={() => setGatewayDeviceModalOpen(false)}
                handleSubmitDevice={handleSubmitDevice}
            />
            {noData && <Text margin={"20px"} textAlign={"center"}>No Gateway Found!</Text>}
        </Fragment>
    )
}
export default GatewayDetials;