import {ReactNode, useState} from 'react';

interface ToggleButtonProps {
    onToggleOn?: () => void;
    onToggleOff?: () => void;
    children?: ReactNode;
}

const ToggleButton = ({ onToggleOn, onToggleOff, children }: ToggleButtonProps) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);

        if (isActive && onToggleOn) {
            onToggleOn();
        } else if (!isActive && onToggleOff) {
            onToggleOff();
        }
    }

    return (
        <button
            role='switch'
            aria-checked={isActive}
            onClick={handleClick}
            className={`hover-container rounded-md py-1.5 px-3 text-sm ${isActive && 'active'}`}
        >
            {children}
        </button>
    );
}

export default ToggleButton;