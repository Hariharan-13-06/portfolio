import React from 'react';
import Project from './Project';
import Grid from '@material-ui/core/Grid';

import './ProjectList.css';

const ProjectList = () => {

    const project = [
        {
            id: 1,
            title: 'Todo',
            github: 'https://github.com/Hariharan-13-06/Todo-Application',
            img: 'https://i.imgur.com/OvMZBs9.jpg',
            desc: 'This is a Todo App created to track the activity that are yet to complete and completed one. I have created this using React as frontend and Firebase for Database.',
            hostLink: ''
        },
        {
            id: '2',
            title: 'Expense Tracker',
            github: 'https://github.com/Hariharan-13-06/Expense-Tracker-With-Database',
            img : 'https://onplanners.com/sites/default/files/styles/template_fancy/public/template-images/printable-everyday-expense-tracker-template.png',
            desc: 'This is a Expense Tracker App which is created using React. This is used to track how much money we get, how much money we spend and our balance amount.',
            hostLink: 'https://hari-expense-tracker-complete.netlify.app/'
        },
        {
            id: '3',
            title: 'Messenger Clone',
            github: 'https://github.com/Hariharan-13-06/Messenger_chatbox',
            img : 'https://i.pcmag.com/imagery/articles/00C0IuFGAFnsqHSWpprg6t3-20.1614869898.fit_lim.jpg',
            desc: 'This is a clone of Messenger which is created using React. Used Material UI components and Firebase for Realtime Database.',
            hostLink: ''
        }
   ]

    return (
        <div className="projectList">
            <p className="project-title">PROJECTS</p>
            <div className="grid">
            {
                project.map(p => (
                    <Project key={p.id} title={p.title} github={p.github} img={p.img} desc={p.desc} hostLink={p.hostLink}/>
                ))
            }
            </div>
        </div>
    )
}

export default ProjectList;
