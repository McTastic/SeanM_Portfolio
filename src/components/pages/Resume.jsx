import ResumePDF from "../../utils/SeanM_Res.pdf";
import "../../css/resume.css"

const Resume = () =>{
    return (
        <>
        <div className="resume">
        <iframe title="Sean's Resume"src={ResumePDF} width="50%" height="1000px">
        </iframe>
        </div>
        </>
    ) 
}

export default Resume;