import {ReactNode} from 'react';

interface NavLinkProps {
    children?: ReactNode;
    to: string;
    active?: boolean;
}

const NavLink = ({ children, to, active=false }: NavLinkProps) => {
    return (
        <a href={to} className={`hover-container px-4 py-2 font-semibold rounded-full ${active && 'active'}`}>
            {children}
        </a>
    );
}

export default NavLink;