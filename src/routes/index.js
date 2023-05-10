

import React from "react";
import { Routes, Route } from "react-router-dom";
import * as LazyLoad from "./LazyLoads";


export default function RouteManager() {
    return (
        <React.Suspense fallback={<></>}>
            <Routes>
                <Route path="/" element={<LazyLoad.GatewaysList />} />
                <Route path="gateway/:id" element={<LazyLoad.GatewayDetails />} />
                <Route path="add-gateway" element={<LazyLoad.AddGateway />} />
                <Route path="*" element={() => <p className="text-center">Not Found</p>} />
            </Routes >
        </React.Suspense>
    )
}