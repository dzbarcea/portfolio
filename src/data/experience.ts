export interface CardInfo {
    title: string;
    subtitle?: string;
    date: string;
    description: string;
}

export const experienceItems: CardInfo[] = [
    {
        title: 'Koolisoo Studios',
        subtitle: 'Startup Co-Founder & Software Engineer',
        date: 'Apr 2023 - Present',
        description: 'At Koolisoo, I operate as a lead product and UI/UX designer as well as Full Stack Engineer, combining' +
            ' my creative and technical skills.'
    },
    {
        title: 'Rover Store',
        subtitle: 'Software Engineer Contractor',
        date: 'Mar 2024 - Nov 2024',
        description: 'Collaborated with stakeholders to upgrade and modernize a legacy inventory management system.'
    },
    {
        title: 'Moge Tee',
        subtitle: 'Crew Member',
        date: 'Aug 2021 - Mar 2023',
        description: 'Worked in a high-pressure, fast paced environment in a customer-facing role, serving tea to thousands of customers.'
    }
];

export const educationItems: CardInfo[] = [
    {
        title: 'University of Maryland Global Campus',
        subtitle: 'B.S. Web Development & Digital Design',
        date: 'May 2023 - Dec 2024',
        description: 'Coursework in modern web technologies and design principles.'
    },
    {
        title: 'University of Edinburgh',
        subtitle: 'B.A. International Business & Chinese (Partial)',
        date: 'Sep 2019 - Nov 2022',
        description: 'Awarded Best Presenter in 2020 by Dean of Business School for excellent communication.'
    }
];
