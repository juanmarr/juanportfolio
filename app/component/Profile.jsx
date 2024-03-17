import Image from 'next/image';
import 'bootstrap-icons/font/bootstrap-icons.css'
import profile from '@/public/juanheadshot.jpg'
import unf from '@/public/unf.jpg'
import AiHackathon from '@/public/AiHackathon.jpg'

// const imageStyle = {
//     height: '20vh',
//     maxWidth: '15vh'
// }

export default function Profile() {
    return (
        <>
            <Image src={profile} className="img-fluid rounded-circle mx-auto d-block my-5" alt="Juan" style={{ maxHeight: '20vh', maxWidth: '15vh' }} />

            <div className="clearfix">
                <a href='https://www.unf.edu/ccec/' style={{ textDecoration: 'none', color: 'inherit' }} target='_blank' >
                    <Image src={unf} className="img-fluid col-md-4 float-md-end mb-3 ms-md-3" alt="University of North Florida" style={{ maxHeight: '50vh', maxWidth: '90vh' }} /></a>

                <Image src={AiHackathon} className="img-fluid col-md-4 float-md-end mb-3 ms-md-3" alt="AI for good hackathon" style={{ maxHeight: '50vh', maxWidth: '90vh' }} />
                

                <div className='mb-5 mx-3'>
                    <h5 className='display-6'>About me</h5>
                    <p className='lead'>   While pursuing my undergraduate studies,
                        I seek to obtain a position where I will
                        be able to further develop my technical skills
                        and progress into future leadership roles.
                    </p>


                </div>

                <div className='mb-5 mx-3'>
                    <h5 className='display-6'>Education</h5>
                    <p className='lead'>
                        I am currently enrolled as a student at UNF College of Computing, Engineering,
                        and Construction, ABET Accredited Bachelor of Science in Computing and information systems. To get more information
                        about UNF and the program click the image of UNF.
                    </p>
                </div>
                <div className='mb-5 mx-3'>
                    <h5 className='display-6'>Life Experiences</h5>
                    <p className='lead'>
                    Participating in an AI for Good hackathon was a transformative experience. 
                    Our team collaborated with a non-profit organization, leveraging AI to analyze 
                    data and devise strategies for enhancing program retention and diversity. Despite 
                    the time constraint of 48 hours, we successfully navigated the challenge, fostering 
                    teamwork and innovation among individuals who were previously strangers. Presenting our 
                    findings in front of stakeholders provided a valuable opportunity for personal growth, particularly 
                    in honing leadership skills and overcoming my apprehension about impromptu presentations. This event 
                    not only expanded my technical proficiency but also propelled me out of my comfort zone, facilitating 
                    newfound confidence in addressing audiences under pressure.

                    </p>
                </div>

            </div>



            {/* <div className='row mb-3 mx-auto'>
                <h5 className='display-6'>About me</h5>
            </div>

            <div className='row mb-3 mx-auto'>
                <p className='lead'>   While pursuing my undergraduate studies,
                    I seek to obtain a position where I will
                    be able to further develop my technical skills
                    and progress into future leadership roles.
                </p>I am currently enrolled as a student at UNF College of Computing, Engineering,
                                and Construction, ABET Accredited Bachelor of Science in Computing and information systems. To get more information
                                about UNF and the program click anywhere inside this box
            </div>

            <div className="mb-3 mx-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    
                    <div className="col-lg-4">
                        <div className="card-body">
                            <h5 className="card-title">Education</h5>
                            <p className="card-text">.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <a href='https://www.unf.edu/ccec/' style={{ textDecoration: 'none', color: 'inherit' }} target='_blank' />
                        <Image src={unf} className="card-img-top" alt="University of North Florida" style={{ height: '12rem' }} />
                    </div>
                </div>
            </div>
 */}



            {/* 
            <div className='row mb-3 mx-auto'>
                <div className="card mx-auto" style={{width: '18rem'}}>
                    <a href='https://www.unf.edu/ccec/' style={{ textDecoration: 'none', color: 'inherit' }} target='_blank'><Image src={unf} className="card-img-top" alt="University of North Florida" style={{height: '18rem'}} />
                        <div className="card-body">
                            <h5 className="card-title">Education</h5>
                            <p className="card-text">I am currently enrolled as a student at UNF College of Computing, Engineering,
                                and Construction, ABET Accredited Bachelor of Science in Computing and information systems. To get more information
                                about UNF and the program click anywhere inside this box.</p>
                        </div>
                    </a>
                </div>
            </div> */}



            {/* <div className="card mb-3 mx-auto border border-black" id="about" style={{ width: "99%" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    
                </div>
                <div className="col-md-8">
                    <div className="card-body ">
                        <h5 className="card-title">About Me</h5>
                        <p className="card-text text-break lh-lg fw-light">

                            I am currently a student at the University of North Florida, where I am pursuing a major in Information Systems
                            and a minor in Business Administration. My journey into the world of computing began when I bought my first programming
                            book after high school. I am grateful that my curiosity led me to explore the realm of computing because, today, I am truly
                            passionate about it. Growing up, I had no idea how accessible and exciting the possibilities in this field could be. I look forward to
                            graduating this year in May, 2024
                        </p>

                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card">
                                   <a href = 'https://www.unf.edu/ccec/' style={{textDecoration:'none', color:'inherit'}} target='_blank'><Image src={unf} className="card-img-top" alt="University of North Florida" style={imageStyle} />
                                    <div class="card-body">
                                        <h5 class="card-title">Education</h5>
                                        <p class="card-text">I am currently enrolled as a student at UNF College of Computing, Engineering,
                                            and Construction, ABET Accredited Bachelor of Science in Computing and information systems. To get more information
                                            about UNF and the program click anywhere inside this box.</p> 
                                    </div>
                                    </a> 
                                </div>
                            </div>
                            
                    
                        </div>
                        <p className="card-text"><small class="text-body-secondary">Last updated 10/10/2023</small></p>
                    </div>
                </div>
            </div>
        </div> */}
        </>

    )
}