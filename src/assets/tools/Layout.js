import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header />
            <div className="page-content" style={{ paddingTop: '70px' }}>
                <Outlet />
            </div>
            
        </>
    )
}
export default Layout;