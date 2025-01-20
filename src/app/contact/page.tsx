import {Icon} from '@iconify/react';

const Page = () => {
    return (
        <div className='flex flex-col flex-1 gap-4 overflow-y-auto lg:flex-row'>
            <div className='flex flex-col gap-2 items-start lg:flex-1'>
                <h3>Email</h3>

                <div className='border-container rounded-lg hover:highlighted cursor-default'>
                    <a className='flex items-center gap-1 p-2' href='mailto:david.e.zbarcea@gmail.com'>
                        david.e.zbarcea@gmail.com
                        <Icon icon='ci:external-link'/>
                    </a>
                </div>
            </div>

            <div className='flex flex-col gap-2 items-start lg:flex-1'>
                <h3>Social Media</h3>

                <div className='flex flex-wrap gap-2 items-start'>
                    <div className='border-container rounded-lg hover:highlighted cursor-default'>
                        <a className='flex items-center gap-1 p-2' href='https://www.linkedin.com/in/david-z-b495b9140/'
                           target='_blank'>
                            LinkedIn
                            <Icon icon='ci:external-link'/>
                        </a>
                    </div>
                    <div className='border-container rounded-lg hover:highlighted cursor-default'>
                        <a className='flex items-center gap-1 p-2' href='https://github.com/dzbarcea' target='_blank'>
                            GitHub
                            <Icon icon='ci:external-link'/>
                        </a>
                    </div>
                    <div className='border-container rounded-lg hover:highlighted cursor-default'>
                        <a className='flex items-center gap-1 p-2' href='https://www.instagram.com/dzbarcea/'
                           target='_blank'>
                            Instagram
                            <Icon icon='ci:external-link'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;