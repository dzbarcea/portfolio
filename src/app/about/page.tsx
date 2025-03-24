// import ImageController from '@/components/ImageController/ImageController';

import Link from 'next/link';

const Page = () => {
    return (
        <div className='flex items-start flex-col gap-2 pt-4 text-xl lg:w-1/2'>
            <p>Hi, I’m David. I’m passionate about writing clean, efficient code and developing websites that
                satisfy and engage users.</p>
            <p>With 3 years of experience in Fullstack Development and UI/UX Design, I thrive in
                environments where creativity and problem-solving come together. Click below to see
                some of the projects I've worked on.</p>

            <Link href='/work' className='border-container clickable py-2 px-4 rounded-full'>View My Work</Link>
        </div>
    );
}

export default Page;