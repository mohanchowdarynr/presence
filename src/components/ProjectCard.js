import React from 'react'

const ProjectCard = ({name,link,overview}) => {
    return (
        <div className="flex flex-col h-52 text-center my-4 bg-white shadow-xl">
            <p className="text-2xl my-1 sm:mt-10 mt-2 font-bold text-blue-500">{name}</p>
            <p className="text-lg my-1 mt-4 text-gray-400 overflow-hidden">{overview}</p>
            <a href={link} className="w-28 text-center mx-auto bg-gray-600 text-white px-1 my-3 sm:mt-10 mt-2">Live Link</a>
        </div>
    )
}

export default ProjectCard
