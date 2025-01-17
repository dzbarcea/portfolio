import { Icon } from '@iconify/react';

interface SkillItem {
    name: string;
    icon: string;
}

interface Section {
    title: string;
    items: SkillItem[];
}

const sections: Section[] = [
    {
        title: 'Languages',
        items: [
            {name: 'TypeScript', icon: 'skill-icons:typescript'},
            {name: 'JavaScript', icon: 'skill-icons:javascript'},
            {name: 'HTML', icon: 'skill-icons:html'},
            {name: 'CSS', icon: 'skill-icons:css'},
            {name: 'Python', icon: 'skill-icons:python-dark'},
            {name: 'Java', icon: 'skill-icons:java-dark'},
        ]
    },
    {
        title: 'Frontend',
        items: [
            {name: 'React', icon: 'skill-icons:react-dark'},
            {name: 'Node', icon: 'skill-icons:nodejs-dark'},
            {name: 'Next.js', icon: 'skill-icons:nextjs-dark'},
            {name: 'Svelte', icon: 'skill-icons:svelte'},
            {name: 'Tailwind', icon: 'skill-icons:tailwindcss-dark'},

        ]
    },
    {
        title: 'Backend',
        items: [
            {name: 'Express', icon: 'skill-icons:expressjs-dark'},
            {name: 'MongoDB', icon: 'skill-icons:mongodb'},
        ]
    },
    {
        title: 'Tools',
        items: [
            {name: 'Git', icon: 'skill-icons:git'},
            {name: 'Figma', icon: 'skill-icons:figma-dark'},
        ]
    },
]

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
                <h3>Projects</h3>
            </div>
        </>
    );
}

export default Page;