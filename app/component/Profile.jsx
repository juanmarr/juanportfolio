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
        <div className="card mb-3 mx-auto border border-black" id="about" style={{ width: "99%" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <Image src={profile} className="img-fluid rounded-start" alt="Juan" style={{ height: '650px' }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body ">
                        <h5 className="card-title">About Me</h5>
                        <p className="card-text text-break lh-lg fw-light">

                            I am currently a student at the University of North Florida, where I am pursuing a major in Information Systems
                            and a minor in Business Administration. My journey into the world of computing began when I bought my first programming
                            book after high school. I am grateful that my curiosity led me to explore the realm of computing because, today, I am truly
                            passionate about it. Growing up, I had no idea how accessible and exciting the possibilities in this field could be.
                            As a first-generation immigrant from Colombia, I take pride in being the first in my family to pursue higher education
                            and work towards earning a bachelor's degree.
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
                            
                            <div class="col">
                                <div class="card">
                                    <Image src={colombia} class="card-img-top" alt="Colombia" style={imageStyle} />
                                    <div class="card-body">
                                        <h5 class="card-title">Origin</h5>
                                        <p class="card-text">
                                            I was born and partly raised in Colombia, specifically in Cartagena,
                                             a historic city renowned for its tourism and boasting the largest port in South America. 
                                             Despite departing at the age of seven, I continue to visit my family and friends whenever possible.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <Image src={hobbies} class="card-img-top" alt="Hobbies" style={imageStyle} />
                                    <div class="card-body">
                                        <h5 class="card-title">Hobbies</h5>
                                        <p class="card-text">
                                            I'm a devoted coffee aficionado. When I'm not immersed in my studies,
                                             I prioritize my mental and physical well-being by taking a break and engaging in various forms of fitness. 
                                             My passion extends to music, and I make an effort to play it to the best of my abilities.
                                            <i class="bi bi-emoji-laughing"></i>
                                        </p>
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