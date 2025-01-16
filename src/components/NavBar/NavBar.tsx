import NavLink from '@/components/NavBar/NavLink';
import {useEffect, useState} from 'react';

const pages = [
    {
        text: 'About',
        to: '/'
    },
    {
        text: 'Work',
        to: '/work'
    },
    {
        text: 'Experience',
        to: '/experience'
    },
    {
        text: 'Contact',
        to: '/contact'
    }
];

const NavBar = () => {
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        setCurrentPage(window.location.pathname);
    }, []);

    return (
        <div className='flex gap-2'>
            {pages.map((page) => (
                <NavLink key={page.text} to={page.to} active={currentPage === page.to}>{page.text}</NavLink>
            ))}
        </div>
    );
}

export default NavBar;