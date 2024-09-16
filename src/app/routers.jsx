import { createBrowserRouter } from "react-router-dom";
import MainPage from '../pages/mainPage/mainPage'
import TablePage from '../pages/tablePage/tablePage'
import NoPage from '../pages/noPage/noPage'


export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainPage /> 
    },
    {
        path: '/table',
        element: <TablePage /> 
    },
    {
        path: '/result',
        element: <NoPage /> 
    }
]);