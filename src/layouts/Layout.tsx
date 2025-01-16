import '@/styles/globals.css';
import { ReactNode } from 'react';
import NavBar from '@/components/NavBar';

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='flex flex-col pt-16 px-6 gap-4'>
            <h1>David Zbarcea</h1>
            <h2>Fullstack Developer & UI Designer</h2>
            <NavBar/>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Layout;