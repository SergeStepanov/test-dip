import GuestLayout from "@/Layouts/GuestLayout";
import { usePage } from "@inertiajs/react";
import PaymentPageContent from "./PaymentPageContent";
import TicketPageContent from "./TicketPageContent";

export default function PaymentTicketPage() {
    const { ticket } = usePage().props;
    // console.log(ticket);

    return (
        <GuestLayout>
            <main>
                {ticket.qrCode.trim() === "" ? (
                    <PaymentPageContent />
                ) : (
                    <TicketPageContent />
                )}
            </main>
        </GuestLayout>
    );
}
