'use client';
import { usePathname } from 'next/navigation';
import { projects } from '@/data/work';
import {Icon} from '@iconify/react';
import TooltipContainer from '@/components/TooltipContainer/TooltipContainer';
import Link from 'next/link';

const Page = () => {
    const pathname = usePathname();
    const slug = pathname.slice(pathname.lastIndexOf('/') + 1, pathname.length);
    const projectData = projects[slug];

    return (
        <div className='flex flex-col items-start gap-4 overflow-hidden'>
            <Link className='flex text-xl items-center hover:underline hover:-translate-y-0.5 duration-100' href='/work'>
                <Icon icon='material-symbols:arrow-back-rounded'/>
                Back to Projects
            </Link>
            {
                projectData ?
                    <div className='flex items-start flex-col gap-8 lg:flex-row overflow-y-auto'>
                        {projectData.url ?
                            <Link href={projectData.url} target='_blank'
                               className='flex-1 overflow-hidden rounded-xl relative group border border-accent-darker'>
                                <img
                                    src={projectData.imgSrc}
                                    alt={projectData.imgAlt}
                                    className='object-cover aspect-[2/1] lg:aspect-[3/2] hover-image'
                                />
                                <div
                                    className='opacity-0 bg-background cursor-pointer hover:opacity-80 duration-100 absolute z-99 top-0 flex justify-center items-center h-full w-full text-6xl'>
                                    <Icon icon='ci:external-link'/>
                                </div>
                            </Link>
                            :
                            <div className='flex-1 border border-accent-darker rounded-xl'>
                                <img
                                    src={projectData.imgSrc}
                                    alt={projectData.imgAlt}
                                    className='object-cover aspect-[2/1] lg:aspect-[3/2]'
                                />
                            </div>
                        }
                        <div className='flex flex-col flex-1 gap-2'>
                            <div className='flex items-baseline gap-4 pb-2'>
                                {projectData.url ?
                                    <Link href={projectData.url} target='_blank'
                                       className='hover:underline hover:-translate-y-1 duration-100'>
                                        <h1 className='text-4xl md:text-6xl'>{projectData.title}</h1>
                                    </Link> :
                                    <h1>{projectData.title}</h1>
                                }
                                <h2>{projectData.date}</h2>
                            </div>
                            <div className='flex gap-4 text-2xl pb-6'>
                                {projectData.relatedSkills.map((skill, index) => (
                                    <TooltipContainer key={index} text={skill.name}>
                                        <Icon icon={skill.icon}/>
                                    </TooltipContainer>
                                ))}
                            </div>
                            {projectData.longDescription.map((line, index) => <p key={index}>{line}</p>)}
                        </div>


                    </div>
                    :
                    <>
                        <h3>Looks like you've reached a page for a project that doesn't exist.</h3>
                        <Link href='/work'>View projects</Link>
                    </>
            }
        </div>
    );
}

export default Page;