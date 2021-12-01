import React from 'react';
import './Skills.css';
import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <div className="container">
            <h2>My Skills</h2>
            <SkillCard skill='90%' on='HTML5' desc=''  />
            <SkillCard skill='80%' on='CSS3' desc='' />
            <SkillCard skill='85%' on='JavaScript' desc='' />
            <SkillCard skill='75%' on='React.js' desc='' />
            <SkillCard skill='80%' on='Node.js' desc='' />

        </div>
    );
};

export default Skills;