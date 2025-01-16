import '@/styles/globals.css';
import { ReactNode } from 'react';
import NavBar from '@/components/NavBar/NavBar';

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='flex flex-col pt-16 px-6 gap-4 min-h-full'>
            <h1>David Zbarcea</h1>
            <h2>Fullstack Developer & UI Designer</h2>
            <NavBar/>

            {/* Main Content */}
            <div className='flex flex-col flex-1 gap-4'>
                {children}
            </div>
        </div>
    );
}

export default Layout;