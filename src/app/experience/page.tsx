import { Icon } from '@iconify/react';
import HoverCard from '@/components/HoverCard/HoverCard';
import { CardInfo, educationItems, experienceItems } from '@/data/experience';

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