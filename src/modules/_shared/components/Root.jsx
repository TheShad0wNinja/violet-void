import { Outlet } from "react-router";
import Header from "./Header";

function Root() {
    return (
        <>
            <Header/>
            <Outlet /> 
        </>
    )
}

export default Root;