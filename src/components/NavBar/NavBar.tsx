import NavLink from '@/components/NavBar/NavLink';

const pages = [
    {
        text: 'About',
        to: '/about'
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
    return (
        <div className='flex shrink-0 mb-2 gap-2 overflow-x-auto no-scrollbar'>
            {pages.map((page) => (
                <NavLink key={page.text} to={page.to}>{page.text}</NavLink>
            ))}
        </div>
    );
}

export default NavBar;