import { ReactNode } from 'react';

interface HoverCardProps {
    children?: ReactNode;
}

const HoverCard = ({ children }: HoverCardProps) => {
    return (
        <div className='hover-container rounded-lg'>
            {children}
        </div>
    );
}

export default HoverCard;