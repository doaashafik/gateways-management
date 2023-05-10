import React, { useEffect } from "react";
import { Link, CardFooter, Text, CardHeader, Card, Heading, CardBody, SimpleGrid, Button } from "@chakra-ui/react";
import { getGateWays } from "../apis/gateway";


const GatewayList = () => {
    const [getways, setGetways] = React.useState([]);
    useEffect(() => {
        getGateWays()
            .then((data) => setGetways(data))
            .catch(error => console.log(error))
    }, []);
    return (
        <section>
            <header className="App-header">
                <Heading textAlign={"center"} marginBlock={"15px"}>Gateways Management</Heading>
            </header>
            {getways.length > 0 ?
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    {getways.map((gateway) => (
                        <Card>
                            <CardHeader>
                                <Heading size='md'>{gateway.name}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>Serial Number: {gateway.serialNumber}</Text>
                                <Text>IPV4 Address: {gateway.ipv4Address}</Text>
                            </CardBody>
                            <CardFooter>
                                <Link href={`/gateway/${gateway.serialNumber}`} colorScheme='teal' size={"sm"} variant='outline'>
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