import React, { useEffect } from "react";
import { Link, CardFooter, Text, CardHeader, Card, Heading, CardBody, SimpleGrid, Button, StackDivider } from "@chakra-ui/react";
import { getAllGateways } from "../apis/gateway";


const GatewayList = () => {
    const [getways, setGetways] = React.useState([]);
    useEffect(() => {
        getAllGateways()
            .then(({ data }) => setGetways(data))
            .catch(error => console.log(error))
    }, []);
    return (
        <section>
            <header className="App-header">
                <Heading textAlign={"center"} marginBlock={"15px"}>Gateways Management</Heading>
            </header>
            {getways.length > 0 ?
                <SimpleGrid spacing={8} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
                    {getways.map((gateway) => (
                        <Card key={gateway.serialNumber} textAlign={"center"}>
                            <CardHeader>
                                <Heading size='md'>{gateway.name}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>Serial Number: {gateway.serialNumber}</Text>
                                <Text>IPV4 Address: {gateway.ipv4Address}</Text>
                            </CardBody>
                            <CardFooter>
                                <Link margin="auto" className="border-link" href={`/gateway/${gateway.serialNumber}`} colorScheme='teal' width={"50%"} textAlign={"center"} variant='outline'>
                                    View
                                </Link>
                            </CardFooter>
                        </Card>
                    ))
                    }
                </SimpleGrid>
                : <Text margin={"20px"} textAlign={"center"}>No Gateway Found!</Text>
            }
        </section>
    )
}
export default GatewayList;