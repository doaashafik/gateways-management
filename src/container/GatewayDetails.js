import { Heading, Text, Button } from "@chakra-ui/react"
import React, { Fragment, useEffect, useState } from "react"
import { addGateWayDevice, deleteGateWayDevice, getGatewayDetials } from "../apis/gateway";
import AddGatewayDeviceModal from "../components/AddGatwayDeviceModal";
import { useParams } from 'react-router-dom';
import DeleteGatewayDeviceAlert from "../components/DeleteGatewayDeviceAlert";
import { ListGatewayDevices } from "../components/ListGatewayDevices";


const deviceDeletedInit = {
    isOpen: false,
    uidNumber: null
};
const GatewayDetials = () => {
    const [gateway, setGateway] = useState(null);
    const [isGatewayDeviceModalOpen, setGatewayDeviceModalOpen] = React.useState(false);
    const [deviceDeleted, setDeviceDeleted] = React.useState(deviceDeletedInit);
    const [noData, setNoData] = React.useState(null);
    const { id } = useParams();
    /* Actions */
    const handleSubmitDevice = (values, { setSubmitting }) => {
        let updatedGateway = {
            ...gateway,
            devices: [...gateway.devices, { ...values, uidNumber: Number(values.uidNumber) }]
        };
        addGateWayDevice(id, updatedGateway).then((data) => {
            setSubmitting(false);
            setGateway(updatedGateway);
            setGatewayDeviceModalOpen(false)
        });
    }
    const handleDeleteDevice = () => {
        let gatewayDeleteDevice = {
            ...gateway,
            devices: gateway.devices.filter(device => device.uidNumber !== deviceDeleted.uidNumber)
        };
        deleteGateWayDevice(id, gatewayDeleteDevice).then(() => {
            setDeviceDeleted(deviceDeletedInit)
            setGateway(gatewayDeleteDevice)
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
                        <ListGatewayDevices
                            devices={gateway.devices}
                            handleDeleteDevice={(uidNumber) => setDeviceDeleted({
                                isOpen: true,
                                uidNumber
                            })} />
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
            <DeleteGatewayDeviceAlert
                isOpen={deviceDeleted.isOpen}
                onClose={() => setDeviceDeleted(deviceDeletedInit)}
                handleDeleteDevice={handleDeleteDevice}
            />
            {noData && <Text margin={"20px"} textAlign={"center"}>No Gateway Found!</Text>}
        </Fragment>
    )
}
export default GatewayDetials;