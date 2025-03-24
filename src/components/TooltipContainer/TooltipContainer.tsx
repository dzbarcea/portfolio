import { ReactNode } from 'react';

interface TooltipContainerProps {
    children?: ReactNode;
    className?: string;
    text: string;
    delayIn?: number;
    delayOut?: number;
}

const TooltipContainer = ({children, className, text, delayIn = 400, delayOut = 100} : TooltipContainerProps) => {
    return (
        <div className='group relative'>
            <div className={className}>
                {children}
            </div>
            <div className={`pointer-events-none
                absolute bottom-0 left-1/2 translate-y-6 -translate-x-1/2
                z-10 opacity-0
                transition-opacity duration-200
                delay-[${delayOut}ms]
                group-hover:opacity-100
                group-hover:pointer-events-auto
                group-hover:delay-[${delayIn}ms]
                bg-dark text-accent text-xs rounded-md px-1.5 py-0.5`}
            >
                {text}
            </div>
        </div>
    );
}

export default TooltipContainer;