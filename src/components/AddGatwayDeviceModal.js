import React, { Fragment } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Spinner
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { AddGatewayDeviceFields } from "./AddGatwayDevice";
import { gatewayDeviceSchema } from "../container/AddGateway/AddGatewayValidation";

function AddGatewayDeviceModal({ isOpen, onClose, handleSubmitDevice }) {

    return (
        <Fragment>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Device</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Formik
                            onSubmit={handleSubmitDevice}
                            validateOnBlur={false}
                            validateOnChange={false}
                            initialValues={{
                                status: "offline",
                                uidNumber: "",
                                vendor: "",
                                creationDate: ""
                            }}
                            validationSchema={gatewayDeviceSchema}>
                            {({ errors, setFieldValue, isSubmitting }) => (
                                <Form>
                                    <AddGatewayDeviceFields
                                        errors={errors}
                                        handleOnChange={(e) => setFieldValue(e.target.name, e.target.value)}
                                        fieldsName={{
                                            vendor: "vendor",
                                            status: "status",
                                            uidNumber: "uidNumber",
                                            creationDate: "creationDate"
                                        }} />
                                    <Button
                                        colorScheme="teal"
                                        marginBlock={"15px"}
                                        variant={"outline"}
                                        size={"lg"}
                                        isLoading={isSubmitting}
                                        loadingText={"is Submitting"}
                                        type="submit">Submit</Button>
                                </Form>
                            )}
                        </Formik>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Fragment>
    )
}
export default AddGatewayDeviceModal;