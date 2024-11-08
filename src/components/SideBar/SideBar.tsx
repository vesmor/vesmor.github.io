import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

import {PersonIcon, BackpackIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import {SideBarButton } from "@/components/SideBar/SideBarButton"
import { MailIcon } from 'lucide-react';


const SideBar: React.FC = () => {
    return (
        <div className="sidebar z-3 p-4 h-full w-60 left-0 top-0 m-0 fixed overflow-x-hidden
                        bg-foreground text-white  
                        flex flex-col justify-between">
            <div>
                <div className='top-header mb-14'>
                    <a href='/'>
                        <img src='assets/images/standin_profile64.png' alt="Profile" className="profile-pic w-40 h-32 rounded-3xl mx-auto mb-4 " />
                    </a>
                    
                    <div className='name'>
                        <h1 className=" text-center text-xl font-bold">Sev Charles</h1>
                    </div>
                    
                    <div className="blurb text-center mb-4 text-gray-600">
                        <p>Computer Science student and Software Engineer creating solutions across software and hardware.</p>
                    </div>
                </div>
                <ul className="nav-links space-y-2 mb-4">
                    <li>
                        <Link to="/about" className='hover:border-transparent'>
                            <SideBarButton className='text-white'>
                                <PersonIcon className="mr-2 h-4 w-4 text-white" /> About
                            </SideBarButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className='hover:border-transparent'>
                            <SideBarButton className='text-white'>
                                <BackpackIcon className="mr-2 h-4 w-4 text-white" /> Projects
                            </SideBarButton>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bottom-links relative flex justify-around">
                {/* <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">GitHub</a> */}
                <SideBarButton className='flex items-center justify-center hover:bg-foreground hover:border-none '>
                <a href="https://github.com/vesmor" target="_blank" rel="noopener noreferrer" className='text-inherit'>
                    <GitHubLogoIcon className="w-6 h-6 hover:text-gray-600 text-white" />
                </a>
                </SideBarButton>
                {/* <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">LinkedIn</a> */}
                <SideBarButton className='flex items-center justify-center hover:bg-foreground hover:border-none '>
                    <a href="https://www.linkedin.com/in/sev-charles/" target="_blank" rel="noopener noreferrer" className='text-inherit'>
                        <LinkedInLogoIcon className="w-6 h-6 hover:text-gray-600 text-white" />
                    </a>
                </SideBarButton>
                
                <SideBarButton className='flex items-center justify-center hover:bg-foreground hover:border-none '>
                    <a href="mailto:romsev.charles@gmail.com" className='text-inherit'>
                        <MailIcon className="w-6 h-6 hover:text-gray-600 text-white" />
                    </a>
                </SideBarButton>
            </div>
        </div>
    );
};

export default SideBar;
