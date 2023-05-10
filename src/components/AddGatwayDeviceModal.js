import React, { Fragment } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { AddGatewayDeviceFields } from "./AddGatwayDevice";

export function AddGatewayDeviceModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Fragment>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Device</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Formik onSubmit={() => { }}>
                            {({ values }) => (
                                <Form>
                                    <AddGatewayDeviceFields fieldsName={{
                                        vendor: `vendor`,
                                        status: `status`,
                                        uidNumber: `uidNumber`
                                    }} />
                                    <Button>Submit</Button>
                                </Form>
                            )}
                        </Formik>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Fragment>
    )
}