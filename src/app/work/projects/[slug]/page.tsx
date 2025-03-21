'use client';
import { usePathname } from 'next/navigation';
import { projects } from '@/data/work';
import {Icon} from '@iconify/react';

const Page = () => {
    const pathname = usePathname();
    const slug = pathname.slice(pathname.lastIndexOf('/') + 1, pathname.length);
    const projectData = projects[slug];

    return (
        <div className='flex flex-col items-start gap-4'>
            <a className='flex text-xl items-center hover:underline hover:-translate-y-0.5 duration-100' href='/work'>
                <Icon icon='material-symbols:arrow-back-rounded'/>
                Back to Projects
            </a>
            {
                projectData ?
                    <div className='flex flex-col gap-8 lg:flex-row'>
                        <div className='flex-1'>
                            <img src={projectData.imgSrc} alt={projectData.imgAlt}
                                 className='object-cover rounded-xl aspect-[2/1] lg:aspect-[3/2]'/>
                        </div>
                        <div className='flex flex-col flex-1 gap-4'>
                            <div className='flex items-baseline gap-4'>
                                {projectData.url ?
                                    <a href={projectData.url} target='_blank' className='hover:underline hover:-translate-y-1 duration-100'>
                                        <h1>{projectData.title}</h1>
                                    </a> :
                                    <h1>{projectData.title}</h1>
                                }
                                <h2>{projectData.date}</h2>
                            </div>
                            <p>{projectData.shortDescription}</p>
                        </div>


                    </div>
                    :
                    <>
                        <h3>Looks like you've reached a page for a project that doesn't exist.</h3>
                        <a href='/work'>View projects</a>
                    </>
            }
        </div>
    );
}

export default Page;