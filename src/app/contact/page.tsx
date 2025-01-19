import {Icon} from '@iconify/react';
import HoverCard from '@/components/HoverCard/HoverCard';

const Page = () => {
    return (
        <>
            <div className='flex flex-col gap-2 items-start'>
                <h3>Email</h3>

                <HoverCard>
                    <a className='flex items-center gap-1 p-2' href='mailto:david.e.zbarcea@gmail.com'>
                        david.e.zbarcea@gmail.com
                        <Icon icon='ci:external-link'/>
                    </a>
                </HoverCard>
            </div>

            <div className='flex flex-col gap-2 items-start'>
                <h3>Social Media</h3>

                <div className='flex flex-wrap gap-2 items-start'>
                    <HoverCard>
                        <a className='flex items-center gap-1 p-2' href='https://www.linkedin.com/in/david-z-b495b9140/' target='_blank'>
                            LinkedIn
                            <Icon icon='ci:external-link'/>
                        </a>
                    </HoverCard>
                    <HoverCard>
                        <a className='flex items-center gap-1 p-2' href='https://github.com/dzbarcea' target='_blank'>
                            GitHub
                            <Icon icon='ci:external-link'/>
                        </a>
                    </HoverCard>
                    <HoverCard>
                        <a className='flex items-center gap-1 p-2' href='https://www.instagram.com/dzbarcea/' target='_blank'>
                            Instagram
                            <Icon icon='ci:external-link'/>
                        </a>
                    </HoverCard>
                </div>
            </div>
        </>
    );
}

export default Page;