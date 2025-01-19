import '@/styles/globals.css';
import { ReactNode } from 'react';
import NavBar from '@/components/NavBar/NavBar';

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <html lang='en'>

        <head>
            <title>David Zbarcea</title>
        </head>

        <body>
            <div className='flex flex-col pt-16 px-6 gap-4 h-full overflow-hidden'>
                <div className='mb-4'>
                    <h1>David Zbarcea</h1>
                    <h2>Fullstack Developer & UI Designer</h2>
                </div>
                <NavBar/>

                {/* Main Content */}
                <div className='flex flex-col flex-1 gap-4 overflow-y-auto'>
                    {children}
                </div>
            </div>
        </body>

        </html>
    );
}

export default Layout;