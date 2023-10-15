export default function Projects() {
    return (
        <>
            <div class="card" id='projects'>
                <div class="card-body">
                    <h2 className="shadow bg-dark p-3 mb-5 bg-body-tertiary rounded" data-bs-theme="grey">Projects</h2>
                    <div className="p-3">
                        <h3>Data Analytics Senior Project</h3>
                        <p>The following link is to my Senior Data Analytics Project. We conducted tests on whether the suicide rate increased due to certain independent variables; the results were quite surprising.</p>
                        <button className="btn btn-dark"><a href="https://colab.research.google.com/drive/1snVsn3XCNbvoJA3Dqb7c5hvjnIuuOcKZ?usp=sharing" target="_blank">View Project</a></button>
                    </div>
                    <div className="p-3">
                        <h3>Java and SQL command line tool Project</h3>
                        <p>This project was made to make queries to a relational database easier. My classmates and I created a menu for a student management database
                            with various options so anybody can use this project to perform SQL queries
                            from the command line without having to know any SQl or Java programming.
                        </p>
                        <button className="btn btn-dark"><a href="https://github.com/juanmarr/intro-to-db-project" target="_blank">View Project</a></button>

                    </div>

                    <div className="p-3">
                        <h3>Java server and client program</h3>
                        <p>This project we create a server and clients function to communicate data back and forth. This project was tested by
                            creating mutliple users and executing multiple commands.
                        </p>
                        <button className="btn btn-dark"><a href="https://github.com/juanmarr/server-client" target="_blank">View Project</a></button>
                    </div>

                    <div className="p-3">
                        <h3>UI/UX design</h3>
                        <p>Recently I have been trying to improve my UI/UX design skills by learning Figma. I choose Figma because it 
                            is becoming an industry standard. This is one of my first demos of a webpage. I am currently working 
                            on a job application interface for an interface design class that I will post at the end of the semester.
                        </p>
                        <button className="btn btn-dark"><a href="https://www.figma.com/file/u2yfmsqXYOndhLu3oUso04/web-design-practice?type=design&node-id=0%3A1&mode=design&t=4iXPb5ZqUTPcYHFL-1" target="_blank">View Project</a></button>

                    </div>
                    <div className="p-3">
                        <h3>Cyber Security</h3>
                        <p>This year I have been working on <a href="https://seedsecuritylabs.org/Labs_20.04/" target="_blank">Seedlabs assignments</a> on a virtual machine running ubuntu linux. I am 
                            very interested in cyber security and feel that every information systems major should understand 
                            the basics of cryptography and secure networks. here are some screentshots of a few assignments I have completed so far.
                        </p>
                        <button className="btn btn-dark"><a href="https://docs.google.com/document/d/1z4Pv3XuZvc1WGh20C6-413xHX3YEiSKKKIRvBii-r4U/edit?usp=sharing" target="_blank">View Project</a></button>
                    </div>



                    <div>
                    <p className="card-text mt-5"><small class="text-body-secondary">Go to my github for more projects</small></p>
                    </div>

                </div>
            </div>


        </>

    )
}
