import { Card } from '../CourseCard/CourseCard'
import './TrainingPage.css'

import React from 'react'


function TrainingPage() {
  return (
    <>
    <h1 className='header'>Training Courses</h1>
    <center><h7 className = "description">Comprehensive training programs: Front-end development, back-end coding, <br />graphic design artistry, and beyond. Advance your skills.</h7></center>
    <h1></h1>
    <div className="card-row">
        <Card 
        imgLink = "https://images.pexels.com/photos/2517330/pexels-photo-2517330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imgAlt = "CardImage"
        CourseTitle = "Electronics Assembly and Soldering Techniques"
        CourseDescription = "Overview: This hands-on course introduces students to the methods and tools used in the assembly of electronic components onto PCBs. Key topics include soldering techniques (both through-hole and surface mount), inspection, and rework procedures. The course often emphasizes quality assurance, safety standards, and the proper handling of electronic components."
        EnrolLink = "/Course1"/>
        <Card
        imgLink = "https://images.pexels.com/photos/6432109/pexels-photo-6432109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imgAlt = "CardImage"
        CourseTitle = "Printed Circuit Board (PCB) Design and Fabrication"
        CourseDescription = "Overview: This course typically teaches the fundamentals of designing and manufacturing printed circuit boards, focusing on layout design, component placement, and routing. Students learn about various PCB fabrication techniques, materials, and the software tools used in the industry. The course might also cover topics such as signal integrity, thermal management, and testing procedures to ensure functionality and reliability."
        EnrolLink = "/Course2" />
        <Card 
        imgLink = "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=600"
        imgAlt = "CardImage"
        CourseTitle = "Introduction to Electronics:"
        CourseDescription = "Overview: This course provides a primer on the basic components and functions of electronic devices. You'll learn about resistors, capacitors, diodes, transistors, and other fundamental electronic components. The course typically covers how these components are used in various devices and simple circuits."
        EnrolLink = "/Course3"/>
        <Card 
        imgLink = "https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg?auto=compress&cs=tinysrgb&w=600"
        imgAlt = "CardImage"
        CourseTitle = "Introduction to Microcontrollers"
        CourseDescription = "Overview: Microcontrollers are the heart of many modern electronic devices. This course typically teaches the basics of microcontroller architecture, programming, and interfacing. Practical sessions might involve programming a simple microcontroller like Arduino or Raspberry Pi to perform basic tasks."
        EnrolLink = "/Course4" />
    </div>
    <div className="card-row">
        <Card 
        imgLink = "https://images.pexels.com/photos/3912367/pexels-photo-3912367.jpeg?auto=compress&cs=tinysrgb&w=600"
        imgAlt = "CardImage"
        CourseTitle = "Electronics Prototyping"
        CourseDescription = "Overview: Prototyping is crucial in the design process. This course focuses on methods for quickly and effectively creating prototypes to test theories and designs. Techniques such as rapid prototyping, 3D printing, and iterative design are often covered."
        EnrolLink = "/Course5"/>
        <Card 
        imgLink = "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imgAlt = "CardImage"
        CourseTitle = "Digital Electronics"
        CourseDescription = "Overview: This course introduces the principles of digital electronics, which are foundational for modern electronics manufacturing. Topics generally include logic gates, flip flops, microprocessors, and how digital memory works. This course is crucial for understanding more complex electronic systems and computer engineering."
        EnrolLink = "/Course6" />
        <Card 
        imgLink = "https://images.pexels.com/photos/9242803/pexels-photo-9242803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imgAlt = "CardImage"
        CourseTitle = "Electronics Manufacturing Processes"
        CourseDescription = "Overview: This course offers a broad overview of the manufacturing processes used in the electronics industry, including PCB fabrication, component assembly, and testing. It provides insights into the end-to-end process of producing electronic devices."
        EnrolLink = "/Course7" />
        <Card 
        imgLink = "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imgAlt = "CardImage"
        CourseTitle = "Basic Circuit Analysis"
        CourseDescription = "Overview: Aimed at teaching how to read and understand electrical schematics and wiring diagrams, this course focuses on the principles of circuit design and analysis. It often includes hands-on labs where students can build and test simple circuits using breadboards and basic electronic tools."
        EnrolLink = "/Course8" />
    </div>
    </>
  )
}

export default TrainingPage