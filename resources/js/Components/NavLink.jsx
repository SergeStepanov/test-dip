import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={className + (active ? " page-nav__day_chosen " : " ")}
        >
            {children}
        </Link>
    );
}
