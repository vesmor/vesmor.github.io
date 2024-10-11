import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

import {PersonIcon, BackpackIcon } from "@radix-ui/react-icons"
import {SideBarButton } from "@/components/SideBarButton"


const SideBar: React.FC = () => {
    return (
        <div className="sidebar bg-foreground text-secondary-foreground p-4 h-screen w-60 flex flex-col justify-between">
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
                        <Link to="/about">
                            <SideBarButton className='focus:'>
                                <PersonIcon className="mr-2 h-4 w-4" /> About
                            </SideBarButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            <SideBarButton>
                                <BackpackIcon className="mr-2 h-4 w-4" /> Projects
                            </SideBarButton>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bottom-links flex justify-around">
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">GitHub</a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
            </div>
        </div>
    );
};

export default SideBar;
