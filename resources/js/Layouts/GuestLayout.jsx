import ApplicationLogo from "@/Components/ApplicationLogo";
import { Head, Link } from "@inertiajs/react";
import "../Pages/User/UserPages.css";
import HeaderUser from "@/Components/HeaderUser";

export default function Guest({ children }) {
    return (
        <>
            <Head title="ИдёмВКино" />
            <HeaderUser />

            {children}
        </>
    );
}
