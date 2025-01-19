import { Icon } from '@iconify/react';
import HoverCard from '@/components/HoverCard/HoverCard';

interface CardInfo {
    title: string;
    subtitle?: string;
    date: string;
    description: string;
}

const experienceItems: CardInfo[] = [
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

const educationItems: CardInfo[] = [
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

const ExperienceCard = ({title, date, subtitle, description}: CardInfo) => {
    return (
        <HoverCard>
            <div className='flex flex-col gap-2 p-2'>
                <div>
                    <div className='flex-between'>
                        <h4>{title}</h4>
                        <h5>{date}</h5>
                    </div>
                    {subtitle && <p className='text-sm font-bold'>{subtitle}</p>}
                </div>

                <p>{description}</p>
            </div>
        </HoverCard>
    );
}

const Page = () => {
    return (
        <>
            <div className='flex flex-col gap-2'>
                <div className='flex-between items-center'>
                    <h3>Experience</h3>
                    <a className='flex flex-wrap text-lg' download href='/resume-files/TEST_RESUME.pdf'>
                        <h5>Resume</h5>
                        <Icon icon='material-symbols:download-rounded'/>
                    </a>
                </div>

                {experienceItems.map((item, index) => (
                    <ExperienceCard title={item.title} date={item.date} subtitle={item.subtitle} description={item.description} key={index}/>
                ))}
            </div>

            <div className='flex flex-col gap-2'>
                <div className='flex-between items-center'>
                    <h3>Education</h3>
                    <a className='flex flex-wrap text-lg' download href='/resume-files/TEST_RESUME.pdf'>
                        <h5>Resume</h5>
                        <Icon icon='material-symbols:download-rounded'/>
                    </a>
                </div>

                {educationItems.map((item, index) => (
                    <ExperienceCard title={item.title} date={item.date} subtitle={item.subtitle} description={item.description} key={index}/>
                ))}
            </div>
        </>
    );
}

export default Page;