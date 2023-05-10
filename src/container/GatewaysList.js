import React, { Fragment, useEffect } from "react";
import { Link, CardFooter, Text, CardHeader, Card, Heading, CardBody, SimpleGrid, Button, StackDivider } from "@chakra-ui/react";
import { getAllGateways } from "../apis/gateway";


const GatewayList = () => {
    const [gateways, setgateways] = React.useState([]);
    const [noData, setNoData] = React.useState(null);
    useEffect(() => {
        getAllGateways()
            .then(({ data }) => {
                setgateways(data);
            })
            .catch(error => setNoData(error.message))
    }, []);
    return (
        <section>
            <header className="App-header">
                <Heading textAlign={"center"} marginBlock={"15px"}>Gateways Management</Heading>
            </header>
            {gateways.length > 0 &&
                <SimpleGrid spacing={8} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
                    {gateways.map((gateway) => (
                        <Card key={gateway.serialNumber} textAlign={"center"}>
                            <CardHeader>
                                <Heading size='md'>{gateway.name}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>Serial Number: {gateway.serialNumber}</Text>
                                <Text>IPV4 Address: {gateway.ipv4Address}</Text>
                            </CardBody>
                            <CardFooter>
                                <Link margin="auto" className="border-link" href={`/gateway/${gateway.id}`} colorScheme='teal' width={"50%"} textAlign={"center"} variant='outline'>
                                    View
                                </Link>
                            </CardFooter>
                        </Card>
                    ))
                    }
                </SimpleGrid>
            }
            {noData && <Text margin={"20px"} textAlign={"center"}>No Gateway Found!</Text>}
        </section>
    )
}
export default GatewayList;