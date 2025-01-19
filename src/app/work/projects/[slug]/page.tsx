'use client';
import { usePathname } from 'next/navigation';
import { projects } from '@/data/work';

const Page = () => {
    const pathname = usePathname();
    const slug = pathname.slice(pathname.lastIndexOf('/') + 1, pathname.length);
    const projectData = projects[slug];

    return (
        <>
            {
                projectData ?
                    <div>
                        <img src={projectData.imgSrc} alt={projectData.imgAlt}/>
                        <div className='flex gap-4 items-baseline'>
                            <h3>{projectData.title}</h3>
                            <h4>{projectData.date}</h4>
                        </div>

                        <p>{projectData.description}</p>
                    </div>
                    :
                    <>
                        <h3>Looks like you've reached a page for a project that doesn't exist.</h3>
                        <a href='/work'>View projects</a>
                    </>
            }
        </>
    );
}

export default Page;