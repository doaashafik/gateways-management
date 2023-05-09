import React from "react";

export const AddGateway = React.lazy(() => import("../container/AddGateway"));
export const AddGatewayDevice = React.lazy(() => import("../container/AddGatewayDevice"));
export const GatewayDetails = React.lazy(() => import("../container/GatewayDetails"));
export const GatewaysList = React.lazy(() => import("../container/GatewaysList"));