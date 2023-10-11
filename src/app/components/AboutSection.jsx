"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul role="list"  className='marker:text-sky-400  list-disc pl-5 space-y-3 text-slate-400'>
                <li>Javascript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul role="list"  className='marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400'>
                <li>Fullstack Academy of Code</li>
                <li>Bachelor Degree LTI</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul role="list"  className='marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400'>
                <li>Javascript Intermediate Hackerrank</li>
                <li>Goolge Professional Cloud Developer</li>
            </ul>
        )
    }
] 

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className='text-white mt-[100px]'>
            <div className='md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <div>
                <Image
                    src='/images/perfil.png'
                    alt='about'
                    width={280}
                    height={280}
                    priority={true}
                    className='top-0 w-[280px] rounded-xl'
                />       
                
                </div>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full mb-8 '>
                    <h2 className='text-4xl text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I am Front-end Developer with a passion for creating interactive and responsive web applications.
                        I have experience wirking with Javascript, React, Redux, Node.js, SQL, Express, HTML, CSS, Taiwind and Git.
                        I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton 
                        selectTab={() => handleTabChange("certifications")} 
                        active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>

    )
}
export default AboutSection