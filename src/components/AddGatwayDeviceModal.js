import React, { Fragment } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { AddGatewayDeviceFields } from "./AddGatwayDevice";

export function AddGatewayDeviceModal({ isOpen, onClose }) {
    return (
        <Fragment>
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
                                    <Button colorScheme="teal" marginBlock={"15px"} variant={"outline"} size={"md"}>Submit</Button>
                                </Form>
                            )}
                        </Formik>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Fragment>
    )
}