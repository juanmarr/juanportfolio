export default function Projects() {
    return (
        <>
         <h2 className="shadow bg-dark p-3 mb-5 bg-body-tertiary rounded" data-bs-theme="grey">Projects</h2>
         <div>
            <h3>Data Analytics Senior Project</h3>
            <p>The following link is to my Senior Data Analytics Project. We conducted tests on whether the suicide rate increased due to certain independent variables; the results were quite surprising.</p>
            <button className="btn btn-dark"><a href="https://colab.research.google.com/drive/1snVsn3XCNbvoJA3Dqb7c5hvjnIuuOcKZ?usp=sharing" target="_blank">View Project</a></button>
        </div>
        <div>
        <h3>Java and SQL command line tool Project</h3>
        <p>This project was made to make queries to a relational database easier. My classmates and I created a menu for a student management database
             with various options so anybody can use this project to perform SQL queries
            from the command line without having to know any SQl or Java programming. 
        </p>
        <button className="btn btn-dark"><a href="https://github.com/juanmarr/intro-to-db-project" target="_blank">View Project</a></button>

        </div>
        
        <div>
        <h3>Java server and client program</h3>
        <p>This project we create a server and client and use function to communicate data back and forth. This project was tested by 
            creating mutliple users and executing multiple commands. 
        </p>
        <button className="btn btn-dark"><a href="https://github.com/juanmarr/server-client" target="_blank">View Project</a></button>
        </div>

        </>
       
    )
}