import { Outlet } from "react-router";
import Header from "./header";

function Root() {
    return (
        <>
            <Header/>
            <Outlet /> 
        </>
    )
}

export default Root;