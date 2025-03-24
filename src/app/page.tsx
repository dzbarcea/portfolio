'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


const Page = () => {
    const { push } = useRouter();

    useEffect(() => {
        push('/about');
    }, []);

    return <></>;
}

export default Page;