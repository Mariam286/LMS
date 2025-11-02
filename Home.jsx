import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image1 from './pexels-luis-gomes-166706-546819.jpg'
import Image2 from './pexels-markusspiske-2004161.jpg'
import Image3 from './pexels-fauxels-3183165.jpg'
import Image4 from './pexels-shkrabaanthony-5475750.jpg'


function Home() {

const [courses] = useState([
  { id: 1, name: "Data Structures and Algorithms", code: "CS101", description: "Study arrays linked lists trees graphs sorting searching algorithm analysis efficiency principles." },
  { id: 2, name: "Web Development", code: "CS202", description: "Build web applications using HTML CSS React Node.js Express REST APIs deployment." },
  { id: 3, name: "Database Systems", code: "CS303", description: "Design and query relational databases with SQL normalization transactions indexing NoSQL basics." },
  { id: 4, name: "Operating Systems", code: "CS404", description: "Learn processes threads concurrency memory management scheduling file systems OS design principles." },
  { id: 5, name: "Computer Networks", code: "CS505", description: "Understand network architectures protocols TCP/IP routing switching sockets fundamentals and security basics." },
  { id: 6, name: "Digital Logic Design", code: "CS606", description: "Cover Boolean algebra combinational sequential circuits flip-flops state machines and hardware design." },
  { id: 7, name: "Artificial Intelligence", code: "CS707", description: "Introduction to AI search algorithms knowledge representation reasoning planning and decision-making basics." },
  { id: 8, name: "Machine Learning", code: "CS808", description: "Study supervised unsupervised methods evaluation metrics model selection optimization and neural networks." },
  { id: 9, name: "Computer Graphics", code: "CS909", description: "Explore rendering pipeline transformations rasterization shading lighting textures and 2D 3D fundamentals." },
  { id: 10, name: "Introduction to Cybersecurity", code: "CS010", description: "Cover security principles threat models cryptography secure coding vulnerabilities mitigations risk assessment." },
]);

// inject CSS so each card's button sits at the very bottom
React.useEffect(() => {
  const style = document.createElement("style");
  style.innerHTML = `
    .card.h-100 .card-body { display: flex; flex-direction: column; }
    .card.h-100 .card-body .btn { margin-top: auto; }
  `;
  document.head.appendChild(style);
  return () => document.head.removeChild(style);
}, []);
  const [page, setPage] = useState("home");
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [student, setStudent] = useState({
    id: "",
    name: "",
    faculty: "",
    departement: "",
    level: "",
    email: "",
  });


  const handleStudentChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.name && student.id && student.faculty) {
  
      alert("Student added!");
    } else {
      alert("Please fill all fields");
    }
  };

 const handleRegisterCourse = (course) => {
   if (!registeredCourses.find((c) => c.id === course.id)) {
     setRegisteredCourses([...registeredCourses, course]);
     alert(`Registered for ${course.name}`);
   } else {
     alert("Already registered!");
   }
 };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand fw-bold">UNI University</span>
          <div className="d-flex">
            <button className="btn btn-link text-white" onClick={() => setPage("home")}>Home</button>
            <button className="btn btn-link text-white" onClick={() => setPage("courses")}>Courses</button>
            <button className="btn btn-link text-white" onClick={() => setPage("register")}>Login</button>
            <button className="btn btn-link text-white" onClick={() => setPage("profile")}>Profile</button>
          </div>
        </div>
      </nav>

      <div className="container py-5 flex-grow-1">
        {page === "home" && (
          <div className="text-center">
            <h1 className="fw-bold mb-3">Welcome to UNI University</h1>
            <p className="lead mb-4">
              Browse available courses, register as a student, and track your registered courses — all in one place.
            </p>



    <Container className="mt-4 fluid">
      <Row className="mb-4">
        <Col className="mb-4">

  <Card style={{ width:"100%" }} className="flex-row">
      <Card.Img variant="left" src={Image4}  style={{width: "200px" , height:"300px"}}/>
      <Card.Body  className="d-flex flex-column justify-content-between">
        <div className="d-flex flex-column gap-5">  
             <Card.Title>Digital Logic Design</Card.Title>
        <Card.Text>
       Cover Boolean algebra combinational sequential circuits flip-flops state machines and hardware design.
        </Card.Text></div>
    
       <Button variant="primary " onClick={() => setPage("courses")}>Explore↗</Button>
      </Card.Body>
       
    </Card>

</Col>
    <Col className="mb-4">

  <Card style={{ width:"100%" }} className="flex-row">
      <Card.Img variant="left" src={Image2}  style={{width: "200px" , height:"300px"}}/>
      <Card.Body  className="d-flex flex-column justify-content-between">
        <div className="d-flex flex-column gap-5">  
             <Card.Title>Operating Systems</Card.Title>
        <Card.Text>
        Learn processes threads concurrency memory management scheduling file systems OS design principles.
        </Card.Text></div>
    
       <Button variant="primary " onClick={() => setPage("courses")}>Explore↗</Button>
      </Card.Body>
       
    </Card>

</Col>
      </Row>
      <Row className="mb-4">  
    <Col className="mb-4">

  <Card style={{ width:"100%" }} className="flex-row">
      <Card.Img variant="left" src={Image3}  style={{width: "200px" , height:"300px"}}/>
      <Card.Body  className="d-flex flex-column justify-content-between">
        <div className="d-flex flex-column justify-content-center">  
             <Card.Title>Artificial Intelligence</Card.Title>
        <Card.Text>
    Introduction to AI search algorithms knowledge representation reasoning planning and decision-making basics.
        </Card.Text></div>
    
       <Button variant="primary " onClick={() => setPage("courses")}>Explore↗</Button>
      </Card.Body>
       
    </Card>

</Col>
    <Col className="mb-4">

  <Card style={{ width:"100%" }} className="flex-row">
      <Card.Img variant="left" src={Image1}  style={{width: "200px" , height:"300px"}}/>
      <Card.Body  className="d-flex flex-column justify-content-between">
        <div className="d-flex flex-column justify-content-center">  
             <Card.Title>Computer Networks</Card.Title>
        <Card.Text>
  Understand network architectures protocols TCP/IP routing switching sockets fundamentals and security basics.
        </Card.Text></div>
    
       <Button variant="primary " onClick={() => setPage("courses")}>Explore↗</Button>
      </Card.Body>
       
    </Card>

</Col>
    <Col className="mb-4">

  <Card style={{ width:"100%" }} className="flex-row">
      <Card.Img variant="left" src={Image4}  style={{width: "200px" , height:"300px"}}/>
      <Card.Body  className="d-flex flex-column justify-content-between">
        <div className="d-flex flex-column justify-content-center">  
             <Card.Title>Introduction to Cybersecuirty</Card.Title>
        <Card.Text>
        Cover security principles threat models cryptography secure coding vulnerabilities mitigations risk assessment.
        </Card.Text></div>
    
       <Button variant="primary " onClick={() => setPage("courses")} >Explore↗</Button>
      </Card.Body>
       
    </Card>

</Col>
      </Row>
    </Container>
            <button className="btn btn-primary btn-lg" style={{width:"50%", height:"60px"}} onClick={() => setPage("courses")}>
              Explore more Courses
            </button>
          </div>
        )}

        {page === "courses" && (
          <div>
            <h2 className="text-center mb-4">Available Courses</h2>
            <div className="row">
             {courses.map((course) => (
    <div key={course.id} className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <h6 className="card-subtitle text-muted mb-2">{course.code}</h6>
                <p className="card-text">{course.description}</p>
                <button
                    className="btn btn-success w-100"
                    onClick={() => handleRegisterCourse(course)}
                >
                    Register
                </button>
            </div>
        </div>
    </div>
))}
            </div>
          </div>
        )}

        {page === "register" && (
          <div className="card shadow-sm p-4">
            <h2 className="mb-3">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={student.name}
                  onChange={handleStudentChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Faculty</label>
                <input
                  type="text"
                  name="faculty"
                  className="form-control"
                  placeholder="Enter your faculty"
                  value={student.faculty}
                  onChange={handleStudentChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Departement</label>
                <input
                  type="text"
                  name="departement"
                  className="form-control"
                  placeholder="Enter your department"
                  value={student.departement}
                  onChange={handleStudentChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Level</label>
                <input
                  type="number"
                  name="level"
                  className="form-control"
                  placeholder="Enter your level"
                  value={student.level}
                  onChange={handleStudentChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={student.email}
                  onChange={handleStudentChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Student ID</label>
                <input
                  type="text"
                  name="id"
                  className="form-control"
                  placeholder="Enter your student ID"
                  value={student.id}
                  onChange={handleStudentChange}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        )}

        {page === "profile" && (
          <div className="card shadow-sm p-4">
            <h2 className="mb-3">My Profile</h2>
            {student.name ? (
              <>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Faculty:</strong> {student.faculty}</p>
                <p><strong>Department:</strong> {student.departement}</p>
                <p><strong>Level:</strong> {student.level}</p>
                <p><strong>Email:</strong> {student.email}</p>
                <p><strong>Student ID:</strong> {student.id}</p>
                <hr />
                <h5>Registered Courses:</h5>
                {registeredCourses.length > 0 ? (
                  <ul>
                    {registeredCourses.map((c) => (
                      <li key={c.id}>{c.code} - {c.name}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted">No courses registered yet.</p>
                )}
              </>
            ) : (
              <p className="text-muted">Please complete your registration first.</p>
            )}
          </div>
        )}
      </div>

      <footer className="bg-light text-center py-3 border-top">
        <p className="mb-0">&copy; {new Date().getFullYear()} UniCourse. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
