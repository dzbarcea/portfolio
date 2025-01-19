'use client';

import { usePathname } from 'next/navigation';

const Page = () => {
    const pathname = usePathname();
    const slug = pathname.slice(pathname.lastIndexOf('/') + 1, pathname.length);

    return (
        <>
            <h2>{slug}</h2>
        </>
    );
}

export default Page;