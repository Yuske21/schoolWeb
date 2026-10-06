import { Outlet } from "react-router-dom";
import "./PrivateLayout.css";

function PrivateLayout() {
    return (
        <div className="private-layout">
            <Outlet />
        </div>
    );
}

export default PrivateLayout;