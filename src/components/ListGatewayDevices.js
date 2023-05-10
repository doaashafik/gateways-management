import { Fragment } from "react"
import { Heading, Text, CardBody, Card, CardHeader, Button, SimpleGrid } from "@chakra-ui/react"


export const ListGatewayDevices = ({ devices, handleDeleteDevice }) => {
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
                                onClick={() => handleDeleteDevice(device.uidNumber)}>Remove Device</Button>
                        </CardBody>
                    </Card>
                ))}
            </SimpleGrid>

        </Fragment>
    )
}