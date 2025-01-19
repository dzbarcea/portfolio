'use client';
import { Icon } from '@iconify/react';
import { sections, projects  } from '@/data/work';
import Link from 'next/link';
import {useState} from 'react';

const Page = () => {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [hovering, setHovering] = useState<string | undefined>(undefined);

    const handleMouseEnter = (itemName: string) => {
        setHovering(itemName);
    }

    const handleMouseLeave = () => {
        setHovering(undefined);
    }

    return (
        <>
            <div className='flex flex-col gap-2'>
                <h3>Skills</h3>
                <div className='flex flex-wrap gap-x-8 gap-y-2'>
                    {sections.map(section => (
                        <div key={section.title} className='flex flex-col gap-1'>
                            <h4>{section.title}</h4>
                            <ul className='grid grid-cols-3 gap-2'>
                                {section.items.map((item) => (
                                    <li
                                        key={item.name}
                                        className='container clickable p-2 rounded-lg'
                                        onMouseEnter={() => handleMouseEnter(item.name)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Icon icon={item.icon} className='text-2xl'/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className='flex flex-col gap-2'>
                    <h3>Projects</h3>
                    <ul>
                        {Object.keys(projects).map((project, index) => {
                            const isHighlighted = projects[project].relatedSkills.some(item => item.name === hovering);

                            return (
                            <li key={index}>
                                <Link
                                    href={`/work/projects/${project}`}
                                    className={`flex flex-col gap-1 border-container clickable p-4 rounded-lg ${isHighlighted && 'highlighted'}`}
                                >
                                    <div className='flex justify-between'>
                                        <h4 className='font-bold'>{projects[project].title}</h4>
                                        <h4>{projects[project].date}</h4>
                                    </div>
                                    <p>{projects[project].description}</p>
                                </Link>
                            </li>
                        )})}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Page;