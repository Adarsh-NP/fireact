import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title left-align">Project Title - {id}</span>
                    <p className='left-align'>Quis commodo fugiat nulla aute minim. Cupidatat magna exercitation cupidatat proident in incididunt cupidatat minim consectetur dolore adipisicing proident. Nisi nulla pariatur aute magna proident. Reprehenderit aliqua ex mollit nostrud. Nulla sint culpa consequat commodo cupidatat pariatur pariatur reprehenderit anim voluptate amet veniam.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div className='left-align'>Posted By Addy</div>
                    <div className='left-align'>25th July 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
