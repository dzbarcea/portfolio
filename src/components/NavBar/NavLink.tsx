'use client';

import {ReactNode} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    children?: ReactNode;
    to: string;
}

const NavLink = ({ children, to }: NavLinkProps) => {
    const pathname = usePathname();

    return (
        <Link href={to} className={`hover-container px-4 py-2 text-sm font-semibold rounded-full ${pathname === to && 'active'}`}>
            {children}
        </Link>
    );
}

export default NavLink;