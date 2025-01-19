export interface SkillItem {
    name: string;
    icon: string;
}

export interface Section {
    title: string;
    items: SkillItem[];
}

export interface Project {
    title: string;
    description: string;
    imgSrc: string;
    date: string;
}

export const sections: Section[] = [
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
];

export const projects: Project[] = [
    {
        title: 'Idols.gg',
        description: 'Compete against others in predicting the outcome of tournament stats',
        imgSrc: '/idolsgg',
        date: '2023'
    }
];