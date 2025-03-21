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
    shortDescription: string;
    imgSrc: string;
    imgAlt: string;
    date: string;
    relatedSkills: SkillItem[];
    url?: string;
}

export const Skills: Record<string, SkillItem> = {
    // Languages
    TYPESCRIPT: {name: 'TypeScript', icon: 'skill-icons:typescript'},
    JAVASCRIPT: {name: 'JavaScript', icon: 'skill-icons:javascript'},
    HTML: {name: 'HTML', icon: 'skill-icons:html'},
    CSS: {name: 'CSS', icon: 'skill-icons:css'},
    PYTHON: {name: 'Python', icon: 'skill-icons:python-dark'},
    JAVA: {name: 'Java', icon: 'skill-icons:java-dark'},

    // Frontend
    REACT: {name: 'React', icon: 'skill-icons:react-dark'},
    NODE: {name: 'Node', icon: 'skill-icons:nodejs-dark'},
    NEXTJS: {name: 'Next.js', icon: 'skill-icons:nextjs-dark'},
    SVELTE: {name: 'Svelte', icon: 'skill-icons:svelte'},
    TAILWIND: {name: 'Tailwind', icon: 'skill-icons:tailwindcss-dark'},

    // Backend
    EXPRESS: {name: 'Express', icon: 'skill-icons:expressjs-dark'},
    MONGODB: {name: 'MongoDB', icon: 'skill-icons:mongodb'},

    // Tools
    GIT: {name: 'Git', icon: 'skill-icons:git'},
    FIGMA: {name: 'Figma', icon: 'skill-icons:figma-dark'},
}

export const sections: Section[] = [
    {
        title: 'Languages',
        items: [
            Skills.TYPESCRIPT,
            Skills.JAVASCRIPT,
            Skills.HTML,
            Skills.CSS,
            Skills.PYTHON,
            Skills.JAVA
        ]
    },
    {
        title: 'Frontend',
        items: [
            Skills.REACT,
            Skills.NODE,
            Skills.NEXTJS,
            Skills.SVELTE,
            Skills.TAILWIND
        ]
    },
    {
        title: 'Backend',
        items: [
            Skills.EXPRESS,
            Skills.MONGODB
        ]
    },
    {
        title: 'Tools',
        items: [
            Skills.GIT,
            Skills.FIGMA
        ]
    },
];

export const projects: Record<string, Project> = {
    'idols': {
        title: 'Idols.gg',
        shortDescription: 'Compete against others in predicting the outcome of e-sports tournament stats',
        imgSrc: '/images/idolsgg.png',
        imgAlt: `Idols.gg Pick'ems page`,
        date: '2022/23',
        relatedSkills: [
            Skills.JAVASCRIPT,
            Skills.REACT,
            Skills.NODE,
            Skills.HTML,
            Skills.CSS,
            Skills.MONGODB,
            Skills.EXPRESS,
            Skills.FIGMA,
            Skills.GIT,
        ],
        url: 'https://idols.gg'
    },
    'poetry-flow': {
        title: 'Poetry Flow',
        shortDescription: 'Explore poetry in a new and fun way',
        imgSrc: '/images/poetry-flow.png',
        imgAlt: `Poetry Flow explore function`,
        date: '2025',
        relatedSkills: [
            Skills.TYPESCRIPT,
            Skills.SVELTE,
            Skills.NODE,
            Skills.HTML,
            Skills.CSS,
            Skills.TAILWIND,
            Skills.PYTHON,
            Skills.FIGMA,
            Skills.GIT,
        ],
        url: 'https://poetry-flow.com'
    },
    'habit-bind': {
        title: 'HabitBind',
        shortDescription: 'Improve motivation & get things done using the principle of Intentional Binding',
        imgSrc: '/images/habit-bind.png',
        imgAlt: `HabitBind action selection page`,
        date: '2025',
        relatedSkills: [
            Skills.TYPESCRIPT,
            Skills.REACT,
            Skills.NODE,
            Skills.HTML,
            Skills.CSS,
            Skills.FIGMA,
            Skills.GIT,
        ],
        url: 'https://habitbind.com'
    },
    'portfolio': {
        title: 'Portfolio Website',
        shortDescription: 'The site you are viewing right now!',
        imgSrc: '/portfolio',
        imgAlt: `Portfolio website about page`,
        date: '2025',
        relatedSkills: [
            Skills.TYPESCRIPT,
            Skills.REACT,
            Skills.NEXTJS,
            Skills.NODE,
            Skills.HTML,
            Skills.CSS,
            Skills.FIGMA,
            Skills.GIT,
            Skills.TAILWIND,
        ],
    },
    'discord-music-bot': {
        title: 'Discord Music Bot',
        shortDescription: 'A self-hosted music bot for playing audio from Youtube and Spotify, coded using Discord.js',
        imgSrc: '/images/discord-bot.svg',
        imgAlt: `Discord Music Bot`,
        date: '2024',
        relatedSkills: [
            Skills.JAVASCRIPT,
            Skills.NODE,
            Skills.EXPRESS,
            Skills.MONGODB,
            Skills.GIT,
        ],
    },
}