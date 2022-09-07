import React from 'react'
import "./Experience.css"
import { themeContext } from '../Context'
import { useContext } from 'react'

const Experience = () => {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="experience" id="Experience">
        <div className="achievement">
        <div className="circle">3+
        </div>
        <span>
            Years of</span>
            <span>Experience</span>
            </div>
        <div className="achievement">
        <div className="circle">5+
        </div>
        <span>
            Completed</span>
            <span>Projects</span>
            </div>
        <div className="achievement">
        <div className="circle">4+
        </div>
        <span>
            B2B</span>
            <span>Work</span>

            </div>
            </div>
  )
}

export default Experience