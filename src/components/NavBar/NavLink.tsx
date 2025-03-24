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
        <Link href={to} className={`border-container clickable px-3 py-1.5 text-xs font-semibold rounded-full hover:selected ${pathname.includes(to) && 'selected'}`}>
            {children}
        </Link>
    );
}

export default NavLink;