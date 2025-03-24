'use client';
import { Icon } from '@iconify/react';
import { sections, projects } from '@/data/work';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import TooltipContainer from '@/components/TooltipContainer/TooltipContainer';

const Page = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [hoveringSkill, setHoveringSkill] = useState<string | undefined>(undefined);
    const [hoveringProjectSkills, setHoveringProjectSkills] = useState<string[]>([]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseEnterSkill = (itemName: string) => {
        // Disable mouseEnter functionality on anything below a large device
        // Prevents from interfering with onClick for selecting/deselecting
        if (windowWidth < 1024) {
            return;
        }
        setHoveringSkill(itemName);
    }

    const handleMouseLeaveSkill = () => {
        // Disable mouseLeave functionality on anything below a large device
        // Prevents from interfering with onClick for selecting/deselecting
        if (windowWidth < 1024) {
            return;
        }
        setHoveringSkill(undefined);
    }

    const handleClickSkill = (itemName: string) => {
        const index = selectedSkills.indexOf(itemName);
        if (index > -1) {
            setSelectedSkills(selectedSkills => selectedSkills.toSpliced(index, 1));
        } else {
            setSelectedSkills(selectedSkills => [...selectedSkills, itemName]);
        }
    }

    const handleMouseEnterProject = (skillNames: string[]) => {
        setHoveringProjectSkills(skillNames);
    }

    const handleMouseLeaveProject = () => {
        setHoveringProjectSkills([]);
    }

    return (
        <div className='flex flex-col flex-1 gap-4 overflow-y-auto lg:flex-row-reverse lg:overflow-y-hidden'>
            <div className='flex flex-col gap-2 lg:flex-1'>
                <h3>Skills</h3>
                <div className='flex flex-wrap gap-x-8 gap-y-2'>
                    {sections.map(section => (
                        <div key={section.title} className='flex flex-col gap-1'>
                            <h4>{section.title}</h4>
                            <ul className='grid grid-cols-3 gap-2 2xl:grid-cols-4'>
                                {section.items.map((item) => {
                                    const isHighlighted = hoveringProjectSkills && hoveringProjectSkills.includes(item.name);
                                    const isSelected = !isHighlighted && selectedSkills.includes(item.name);
                                    const isFaded = !isSelected && !isHighlighted && (hoveringSkill || selectedSkills.length > 0 || hoveringProjectSkills.length > 0);

                                    return (
                                        <TooltipContainer key={item.name} text={item.name}>
                                            <li
                                                className={`container clickable p-2 rounded-lg ${isHighlighted && 'highlighted'} ${isSelected && 'selected'} ${isFaded && 'faded'}`}
                                                onMouseEnter={() => handleMouseEnterSkill(item.name)}
                                                onMouseLeave={handleMouseLeaveSkill}
                                                onClick={() => handleClickSkill(item.name)}
                                            >
                                                <Icon icon={item.icon} className='text-2xl'/>
                                            </li>
                                        </TooltipContainer>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-2 pb-8 lg:flex-[2]'>
                <h3>Projects</h3>
                <ul className='flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:overflow-y-auto'>
                    {Object.keys(projects).map((project, index) => {
                        const skillNames = Object.values(projects[project].relatedSkills).map(skill => skill.name);

                        const isHighlighted = projects[project].relatedSkills.some(item => item.name === hoveringSkill);
                        const isSelected = !isHighlighted && projects[project].relatedSkills.some(item => selectedSkills.includes(item.name));
                        const isFaded = !isSelected && !isHighlighted && (hoveringSkill || selectedSkills.length > 0 || hoveringProjectSkills.length > 0);

                        return (
                            <li key={index}
                                onMouseEnter={() => handleMouseEnterProject(skillNames)}
                                onMouseLeave={handleMouseLeaveProject}
                            >
                                <Link
                                    href={`/work/projects/${project}`}
                                    className={`flex h-full flex-col md:items-end md:flex-row lg:items-start lg:flex-col gap-2 border-container clickable p-4 rounded-lg ${isSelected && 'selected'} ${isHighlighted && 'highlighted'} ${isFaded && 'faded'}`}
                                >
                                    <img src={projects[project].imgSrc} alt={projects[project].imgAlt} className='rounded-lg aspect-[2/1] object-cover md:w-1/2 lg:w-full'/>
                                    <div className='flex flex-col gap-1'>
                                        <div className='flex justify-between'>
                                            <h4 className='font-bold'>{projects[project].title}</h4>
                                            <h4>{projects[project].date}</h4>
                                        </div>
                                        <p>{projects[project].shortDescription}</p>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Page;