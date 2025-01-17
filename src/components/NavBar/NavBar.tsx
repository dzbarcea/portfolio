import NavLink from '@/components/NavBar/NavLink';

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
    return (
        <div className='flex gap-2 overflow-x-auto no-scrollbar'>
            {pages.map((page) => (
                <NavLink key={page.text} to={page.to}>{page.text}</NavLink>
            ))}
        </div>
    );
}

export default NavBar;