// import ImageController from '@/components/ImageController/ImageController';

import Link from 'next/link';

const Page = () => {
    return (
        <div className='flex items-start flex-col gap-2 pt-4 text-xl lg:w-1/2'>
            <p>Hey, I&apos;m David. I build clean, user-friendly websites that blend solid code with smart design.</p>
            <p>With 3 years of experience in development and UI/UX, I love bringing creative ideas to life through thoughtful problem-solving.</p>
            <p>Take a look at some of my work, or contact me via email or socials.</p>

            <div className='flex place-self-center md:place-self-auto gap-2 pt-2'>
                <Link href='/work' className='border-container clickable py-2 px-4 rounded-full'>View My Work</Link>
                <Link href='/contact' className='border-container clickable py-2 px-4 rounded-full'>Contact Me</Link>
            </div>
        </div>
    );
}

export default Page;