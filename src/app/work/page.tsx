import { Icon } from '@iconify/react';
import { sections, projects  } from '@/data/work';

const Page = () => {
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
                                    <li key={item.name} className='hover-container p-2 rounded-lg'>
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
                        {Object.keys(projects).map((project, index) => (
                            <li key={index} className='flex flex-col gap-1 hover-container p-4 rounded-lg'>
                                <a href={`/work/projects/${project}`}>
                                    <div className='flex justify-between'>
                                        <h4 className='font-bold'>{projects[project].title}</h4>
                                        <h4>{projects[project].date}</h4>
                                    </div>
                                    <p>{projects[project].description}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Page;