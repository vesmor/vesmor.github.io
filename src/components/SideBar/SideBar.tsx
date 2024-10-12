import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

import {PersonIcon, BackpackIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import {SideBarButton } from "@/components/SideBar/SideBarButton"
import { MailIcon } from 'lucide-react';


const SideBar: React.FC = () => {
    return (
        <div className="sidebar p-4 h-full w-60 left-0 top-0 m-0 fixed overflow-x-hidden
                        bg-foreground text-secondary-foreground  
                        flex flex-col justify-between">
            <div>
                <div className='top-header mb-14'>
                    
                    <img src='assets/images/standin_profile64.png' alt="Profile" className="profile-pic w-40 h-32 rounded-3xl mx-auto mb-4 " />
                    
                    <div className='name'>
                        <h1 className=" text-center text-xl font-bold">Sev Charles</h1>
                    </div>
                    
                    <div className="blurb text-center mb-4">
                        <p>Computer Science student and Software Engineer creating solutions across software and hardware.</p>
                    </div>
                </div>
                <ul className="nav-links space-y-2 mb-4">
                    <li>
                        <Link to="/about" className='hover:border-transparent'>
                            <SideBarButton>
                                <PersonIcon className="mr-2 h-4 w-4" /> About
                            </SideBarButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className='hover:border-transparent'>
                            <SideBarButton>
                                <BackpackIcon className="mr-2 h-4 w-4" /> Projects
                            </SideBarButton>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bottom-links relative flex justify-around">
                {/* <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">GitHub</a> */}
                <SideBarButton className='flex items-center justify-center hover:bg-foreground hover:border-none '>
                <a href="https://github.com/vesmor" target="_blank" rel="noopener noreferrer" className='text-inherit'>
                    <GitHubLogoIcon className="w-6 h-6 hover:text-gray-600" />
                </a>
                </SideBarButton>
                {/* <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">LinkedIn</a> */}
                <SideBarButton className='flex items-center justify-center hover:bg-foreground hover:border-none '>
                    <a href="https://www.linkedin.com/in/sev-charles/" target="_blank" rel="noopener noreferrer" className='text-inherit'>
                        <LinkedInLogoIcon className="w-6 h-6 hover:text-gray-600" />
                    </a>
                </SideBarButton>
                
                <SideBarButton className='flex items-center justify-center hover:bg-foreground hover:border-none '>
                    <a href="mailto:romsev.charles@gmail.com" className='text-inherit'>
                        <MailIcon className="w-6 h-6 hover:text-gray-600" />
                    </a>
                </SideBarButton>
            </div>
        </div>
    );
};

export default SideBar;
