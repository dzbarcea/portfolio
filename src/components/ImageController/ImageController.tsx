import {useEffect, useRef, useState} from 'react';
import ToggleButton from '@/components/ToggleButton/ToggleButton';

const images = [
    {
        text: 'Music',
        alt: 'Music img',
        src: 'music.jpg'
    },
    {
        text: 'Cooking',
        alt: 'Cooking img',
        src: 'music.jpg'
    },
    {
        text: 'Bouldering',
        alt: 'Bouldering img',
        src: 'music.jpg'
    },
];

const defaultImgPath = '/cat-image.png';
const defaultImgAlt = 'Cat Image';

const ImageController = () => {
    const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
    const [imgSrc, setImgSrc] = useState(defaultImgPath);
    const [imgAlt, setImgAlt] = useState(defaultImgAlt)
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        console.log(activeIndex);
    }, [activeIndex]);

    const toggleOn = (index: number) => {
        const image = images[index];
        setActiveIndex(index);
        setImgSrc(image.src);
        setImgAlt(image.alt);

        // TODO: scroll img into view
        if (imgRef.current) {
            imgRef.current.scrollIntoView();
        }
    }

    const toggleOff = () => {
        setActiveIndex(undefined);
        setImgSrc(defaultImgPath);
        setImgAlt(defaultImgAlt);

        // TODO: scroll img into view
        if (imgRef.current) {
            imgRef.current.scrollIntoView();
        }
    }

    return (
        <>
            <div className='flex flex-wrap gap-2'>
                {images.map((image, index) => (
                    <ToggleButton
                        key={index}
                        onToggleOn={() => toggleOn(index)}
                        onToggleOff={() => toggleOff()}
                        isActive={activeIndex === index}
                    >
                        {image.text}
                    </ToggleButton>
                ))}
            </div>
            <img
                ref={imgRef}
                src={imgSrc}
                alt={imgAlt}
            />
        </>
    );
}

export default ImageController;