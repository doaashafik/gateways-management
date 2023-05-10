import { Heading, Text, CardBody, Card, CardHeader, SimpleGrid } from "@chakra-ui/react"
import { Fragment } from "react"

const GatewayDetails = ({ gateway }) => {
    return (
        <section>
            <Heading as="h1">
                Gateway {gateway.name}
            </Heading>
            <Text>Serial Number: {gateway.serialNumber}</Text>
            <Text>IPV4 Address: {gateway.ipv4Address}</Text>
            {gateway.devices.length > 0 && <Fragment>
                <Heading as="h4" marginBlock={"15px"} size="md">Peripheral Devices</Heading></Fragment>}
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                {gateway.devices.map((device) => (
                    <Card>
                        <CardHeader>
                            <Heading size='md'>{device.vendor}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>UID Number: {device.uidNumber}</Text>
                            <Text>Creation Date: {device.creationDate}</Text>
                        </CardBody>
                    </Card>
                ))
                }
            </SimpleGrid>
        </section>
    )
}
export default GatewayDetails