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
            <div className='flex flex-col pt-16 px-6 gap-2 h-full overflow-hidden md:px-16 lg:pt-32 xl:px-32 2xl:px-64'>
                <div className='mb-4'>
                    <h1>David Zbarcea</h1>
                    <h2>Fullstack Developer & UI Designer</h2>
                </div>
                <NavBar/>

                {/* Main Content */}
                {children}
            </div>
        </body>

        </html>
    );
}

export default Layout;