import { ReactNode } from 'react';

interface ToggleButtonProps {
    onToggleOn?: () => void;
    onToggleOff?: () => void;
    children?: ReactNode;
    isActive?: boolean;
}

const ToggleButton = ({ onToggleOn, onToggleOff, children, isActive=false }: ToggleButtonProps) => {
    const handleClick = () => {
        if (isActive && onToggleOff) {
            onToggleOff();
        } else if (!isActive && onToggleOn) {
            onToggleOn();
        }
    }

    return (
        <button
            type='button'
            role='switch'
            aria-checked={isActive}
            onClick={handleClick}
            className={`border-container rounded-md py-1.5 px-3 text-sm ${isActive && 'active'}`}
        >
            {children}
        </button>
    );
}

export default ToggleButton;