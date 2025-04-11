import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Loader = lazy(() => import ("./Loader"));

// Lazy load the components
const Home = lazy(() => import("./Home"));
const Auth = lazy(() => import("./Auth"));
const Dashboard = lazy(() => import("./Dashboard"));

export default function Router() {
    const routes = [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Auth />,
        },
        {
            path: "/panel",
            element: <Dashboard />,
        },
    ];

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        path={route.path}
                        element={route.element}
                        key={index}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}
