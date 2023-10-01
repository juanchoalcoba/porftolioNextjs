import React from 'react'
import ProjectCard from './ProjectCard'
import { FaUniversity } from 'react-icons/fa'

const projectsData = [
    {
        id: 1,
        title: "Fundamentos de Desarrollo",
        description: "Linkedin Course",
        image: "/images/certifications/Fundamentos.jfif",
        tag: ["All", "Web"]
    },
    {
        id: 2,
        title: "Javascript Intermediate | HackerRank",
        description: "HackerRank Certifications",
        image: "/images/certifications/javascriptIntermediate.png",
        tag: ["All", "Web"]
    },
    {
        id: 3,
        title: "React Certificate | CODERHOUSE",
        description: "CoderHouse Certification",
        image: "/images/certifications/ReactCertificate.jfif",
        tag: ["All", "Web"]
    },
]




const Certifications = () => {
    return (
        <>
            <h2 className='text-center text-4xl font-bold  text-white mt-8'>
                <button>
                    <FaUniversity />
                </button>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-4">
                {projectsData.map((project) => (
                    <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image} 
                    />
                    ))}
            </div>
        </>
    )
}

export default Certifications