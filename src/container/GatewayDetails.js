import { Heading, Text, CardBody, Card, CardHeader, Button, SimpleGrid } from "@chakra-ui/react"
import React, { Fragment, useEffect, useState } from "react"
import { getGatewayDetials } from "../apis/gateway";
import { AddGatewayDeviceModal } from "../components/AddGatwayDeviceModal";
import { useParams } from 'react-router-dom';

const GatewayDetials = () => {
    const [gateway, setGateway] = useState(null);
    const [isGatewayDeviceModalOpen, setGatewayDeviceModalOpen] = React.useState(false);
    const [noData, setNoData] = React.useState(null);
    const { id } = useParams();

    useEffect(() => {
        getGatewayDetials(id)
            .then(({ data }) => {
                setGateway(data);
                setNoData(null);
            })
            .catch(error => {
                console.log(error)
                setNoData(error.message);
            })
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
                        <Fragment>
                            <Heading as="h4" marginBlock={"15px"} size="md">Peripheral Devices</Heading></Fragment>}
                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                        {gateway.devices?.map((device) => (
                            <Card>
                                <CardHeader>
                                    <Heading size='md'>{device.vendor}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>UID Number: {device.uidNumber}</Text>
                                    <Text>Creation Date: {new Date(device.creationDate)}</Text>
                                </CardBody>
                            </Card>
                        ))
                        }
                    </SimpleGrid>
                    <Button colorScheme='teal' size={"md"} variant='outline'
                        marginBlockStart={"12px"} type="button" onClick={() => setGatewayDeviceModalOpen(true)}>
                        Add Device
                    </Button>
                    <AddGatewayDeviceModal
                        isOpen={isGatewayDeviceModalOpen}
                        onClose={() => setGatewayDeviceModalOpen(false)} />
                </section> 
                }
            {noData && <Text margin={"20px"} textAlign={"center"}>No Gateway Found!</Text>}
        </Fragment>
    )
}
export default GatewayDetials;