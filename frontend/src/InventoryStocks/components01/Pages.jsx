import { CssBaseline, Typography } from "@material-ui/core";
import { SupplierMang } from "./SupplierManagement/SupplierMang";
import { StockMang } from "./StockManagement/StockMang";
import { InventoryMang} from "./InventoryManagement/InventoryMang";
// import {InventoryMang} from "./InventoryManagement/InventoryMang";


// Define components for different pages
export function DashboardPage() {
    return(<SupplierMang/>)
}

export function SamplePage() {
    return (<StockMang/>)
}

export function ProfilePage() {
    return (<InventoryMang/>)
}

export function LogoutPage() {
    return <Typography variant="h5">Contacts Page Content Inventory Management</Typography>;
}