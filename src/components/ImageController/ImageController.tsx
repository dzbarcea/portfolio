import {useState} from 'react';
import ToggleButton from '@/components/ToggleButton/ToggleButton';

const images = [
    {
        text: 'Music',
        alt: 'Music img',
        src: 'music.jpg'
    },
    {
        text: 'Cooking',
        alt: 'Music img',
        src: 'music.jpg'
    },
    {
        text: 'Bouldering',
        alt: 'Music img',
        src: 'music.jpg'
    },
];

const ImageController = () => {
    const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
    const defaultImgPath = '/cat-image.png';
    const defaultImgAlt = 'Cat Image';

    const resetActiveIndex = () => {
        setActiveIndex(undefined);
    }

    return (
        <>
            <div className='flex flex-wrap gap-2'>
                {images.map((image, index) => (
                    <ToggleButton
                        key={index}
                        onToggleOn={() => setActiveIndex(index)}
                        onToggleOff={resetActiveIndex}
                    >
                        {image.text}
                    </ToggleButton>
                ))}
            </div>
            <img
                src={activeIndex ? images[activeIndex].src : defaultImgPath}
                alt={activeIndex ? images[activeIndex].alt : defaultImgAlt}
            />
        </>
    );
}

export default ImageController;