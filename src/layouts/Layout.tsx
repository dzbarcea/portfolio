import '@/styles/globals.css';
import { ReactNode } from 'react';

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='flex flex-col pt-16 px-6'>
            <h1>David Zbarcea</h1>
            <h2>Fullstack Developer & UI Designer</h2>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Layout;