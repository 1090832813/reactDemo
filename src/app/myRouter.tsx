'use client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Info from "./Info";
import RequireAuth from "./RequireAuth";
import DataTable from "./table";
import Counter from "./Counter";
let router = createBrowserRouter([
    {
        path: '/login',
        element: <Login></Login>,
        loader: () => {
            return "我是loader"
        }
    }, {
        path: '/',
        element: <RequireAuth>
            <Home></Home>
        </RequireAuth>,
        children: [
            {
                path: "/info",
                element: <Info></Info>
            }, {
                path: "/table",
                element: <DataTable></DataTable>
            }, {
                path: "/counter",
                element: <Counter></Counter>
            },
        ]
    }
])
export default function MyRouter() {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}