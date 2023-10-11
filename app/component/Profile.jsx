import Image from 'next/image';
import 'bootstrap-icons/font/bootstrap-icons.css'
import profile from '@/public/juan-headshot.jpg'
import unf from '@/public/unf.jpg'
import colombia from '@/public/colombia.webp'
import hobbies from '@/public/hobbies.png'

const imageStyle = {
    height: '200px',
}

export default function Profile() {
    return (
        <div className="card mb-3 mx-auto border border-black" id="about" style={{ width: "100vw" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <Image src={profile} className="img-fluid rounded-start" alt="Juan" />
                </div>
                <div className="col-md-8">
                    <div className="card-body ">
                        <h5 className="card-title">About Me</h5>
                        <p className="card-text text-break lh-lg fw-light">I am a student at the University of North Florida pursuing a major in Information Systems and a minor in
                            business adminstration. I created a passion for computing after buying my first programming book after highschool. I am glad I was curious enough to find out
                            more about computing becuase today I am hooked! I never knew how accessable the possibilites and exciting this field was growing up. I am a first generation immigrant
                            from Colombia and also the first in my family to continue my education and pursue a bachelors degree.</p>


                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card">
                                    <Image src={unf} className="card-img-top" alt="University of North Florida" style={imageStyle} />
                                    <div class="card-body">
                                        <h5 class="card-title">Education</h5>
                                        <p class="card-text">I am currently enrolled as a student at UNF College of Computing, Engineering,
                                            and Construction, ABET Accredited Bachelor of Science in Computing and information systems. To get more information 
                                            about UNF and the program click anywhere inside this box.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <Image src={colombia} class="card-img-top" alt="Colombia" style={imageStyle} />
                                    <div class="card-body">
                                        <h5 class="card-title">Origin</h5>
                                        <p class="card-text">I was born and partly raised in Colombia, Cartagena a historic
                                            city known for its tourism and having the largest port in South America.
                                             Even though I left at the age of seven I learned to 
                                            speak my native language and still visit family and friends whenever I can.</p>
                                            
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <Image src={hobbies} class="card-img-top" alt="Hobbies" style={imageStyle} />
                                    <div class="card-body">
                                        <h5 class="card-title">Hobbies</h5>
                                        <p class="card-text">I am a coffee aficionado. When I am not studying I focus on my mental and physical
                                         health by disconnecting and doing some
                                        type of fitness.
                                        I love music and try my best to play it as well. I have a guitar that I enjoy playing when I am by my self mainly. <i class="bi bi-emoji-laughing"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="card-text"><small class="text-body-secondary">Last updated 10/10/2023</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}