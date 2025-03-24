import {Icon} from '@iconify/react';
import Link from 'next/link';

const Page = () => {
    return (
        <div className='flex flex-col flex-1 gap-4 overflow-y-auto md:flex-row'>
            <div className='flex flex-col gap-2 items-start md:flex-1'>
                <h3>Email</h3>

                <div className='border-container rounded-lg hover:highlighted cursor-default'>
                    <Link className='flex items-center gap-1 p-2' href='mailto:david.edward.zbarcea@gmail.com'>
                        david.edward.zbarcea@gmail.com
                        <Icon icon='ci:external-link'/>
                    </Link>
                </div>
            </div>

            <div className='flex flex-col gap-2 items-start md:flex-1'>
                <h3>Social Media</h3>

                <div className='flex flex-wrap gap-2 items-start'>
                    <div className='border-container rounded-lg hover:highlighted cursor-default'>
                        <Link className='flex items-center gap-1 p-2' href='https://www.linkedin.com/in/david-z-b495b9140/'
                           target='_blank'>
                            LinkedIn
                            <Icon icon='ci:external-link'/>
                        </Link>
                    </div>
                    <div className='border-container rounded-lg hover:highlighted cursor-default'>
                        <Link className='flex items-center gap-1 p-2' href='https://gitlab.com/dzbarcea' target='_blank'>
                            GitLab
                            <Icon icon='ci:external-link'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;