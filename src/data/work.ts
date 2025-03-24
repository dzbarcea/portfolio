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
    longDescription: string[];
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
    NODE: {name: 'Node.js', icon: 'skill-icons:nodejs-dark'},
    NEXTJS: {name: 'Next.js', icon: 'skill-icons:nextjs-dark'},
    SVELTE: {name: 'Svelte', icon: 'skill-icons:svelte'},
    TAILWIND: {name: 'TailwindCSS', icon: 'skill-icons:tailwindcss-dark'},

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
        longDescription: [
            'A web application for e-sports fans to compete in predicting the outcomes of professional tournaments. We reached 854 users in the first week of release and returned with a new version' +
            ' around the same time the following year.',

            'My responsibilities on this project included product design, leading UX/UI direction for the site, and full stack development for all of the application\'s features.',
        ],
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
        longDescription: [
            'I built Poetry Flow to help people replace scrolling on TikTok and Youtube Shorts with more enriching content.' +
            ' The site features an infinite-scrolling collection of over 38,000 poems of various styles and lengths to explore.',

            'In this project, I challenged myself to build an application in a framework I was unfamiliar with (Svelte) in a limited time frame.' +
            ' The project came together in less than a week, and I tackled new problems like web scraping and infinite scrolling behavior.'
        ],
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
        longDescription: [
            'HabitBind is an application I built to help people like myself reinforce good habits, improve follow-through, and' +
            ' promote intentionality, through the psychological principle of Intentional Binding.',

            'This project was an exercise in designing and developing a user experience which was satisfying and easy to use.' +
            ' The most challenging aspect was educating users on the principle behind the application; making the information' +
            ' available but not intrusive was difficult, but I achieved this through informative tooltips that link to a "learn" page.',

            'IB posits that through a process of' +
            ' intentionally selecting an action, predicting an outcome, and reflecting afterwards, the brain perceives the' +
            ' action and result as occurring closer to one another. In other words, it reinforces that your actions directly lead to outcomes,' +
            ' increasing your sense of agency.',


        ],
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
        longDescription: [
            'This digital portfolio was built using Next.js and TypeScript. The goal was to give you a seamless experience,' +
            ' optimizing site performance and putting my work in the spotlight with a minimal but elegant UI and sharp' +
            ' interactions.',
        ],
        imgSrc: '/images/portfolio.png',
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
        url: 'https://github.com/dzbarcea/portfolio'
    },
    'discord-music-bot': {
        title: 'Discord Music Bot',
        shortDescription: 'A self-hosted music bot for playing audio from Youtube and Spotify, coded using Discord.js',
        longDescription: [
            'A simple music bot built with Discord.js that I host locally for playing music using Spotify. It includes the' +
            ' unique feature to save playlists or tracks under a nickname, allowing you to quickly switch between playlists' +
            ' with a single command or click of a button.',

            'The bot\'s UI operates entirely within Discord, sending a message to a channel which acts as a small dashboard' +
            ' for controlling music, complete with buttons for play/pause, shuffle, changing playlists, and more.'
        ],
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