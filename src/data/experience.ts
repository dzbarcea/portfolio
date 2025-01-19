export interface CardInfo {
    title: string;
    subtitle?: string;
    date: string;
    description: string;
}

export const experienceItems: CardInfo[] = [
    {
        title: 'Koolisoo Studios',
        subtitle: 'Startup Co-Founder & Design Lead',
        date: 'Apr 2023 - Present',
        description: 'Description Text'
    },
    {
        title: 'Rover Store',
        subtitle: 'Fullstack Engineer Contractor',
        date: 'Mar 2024 - Nov 2024',
        description: 'Description Text'
    },
    {
        title: 'Moge Tee',
        subtitle: 'Crew Member',
        date: 'Aug 2021 - Mar 2023',
        description: 'Description Text'
    }
];

export const educationItems: CardInfo[] = [
    {
        title: 'University of Maryland Global Campus',
        subtitle: 'B.S. Web & Digital Design',
        date: 'May 2023 - Dec 2024',
        description: 'Description Text'
    },
    {
        title: 'University of Edinburgh',
        subtitle: 'B.A. International Business & Chinese',
        date: 'Sep 2019 - Nov 2022',
        description: 'Description Text'
    }
];
