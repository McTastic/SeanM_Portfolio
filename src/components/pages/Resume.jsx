import ResumePDF from "../../utils/Resume.pdf";
import "../../css/resume.css"

const Resume = () =>{
    return (
        <>
        <div className="resume">
        <iframe title="Sean's Resume"src={ResumePDF} width="75%" height="1000em">
        </iframe>
        </div>
        </>
    ) 
}

export default Resume;