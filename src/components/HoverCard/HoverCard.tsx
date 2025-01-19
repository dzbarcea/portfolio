import { ReactNode } from 'react';

interface HoverCardProps {
    children?: ReactNode;
    href?: string;
}

const HoverCard = ({children, href}: HoverCardProps) => {
    const contents = (
        <div className='hover-container rounded-lg'>
            {children}
        </div>
    );

    return (
        href ? <a href={href}>{contents}</a> : contents
    );
}

export default HoverCard;