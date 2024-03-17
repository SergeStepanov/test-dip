import ApplicationLogo from "@/Components/ApplicationLogo";
import { Head, Link } from "@inertiajs/react";
import HeaderUser from "@/Components/HeaderUser";
import "@/Pages/User/UserPages.css";

export default function GuestLayout({ children }) {
    return (
        <>
            <Head title="ИдёмВКино" />
            <HeaderUser />

            {children}
        </>
    );
}
