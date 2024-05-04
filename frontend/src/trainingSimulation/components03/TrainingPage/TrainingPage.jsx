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
        imgLink = "https://miro.medium.com/v2/resize:fit:1400/1*s80xLYgbrwbXgEuuDBR5mw.jpeg"
        imgAlt = "CardImage"
        CourseTitle = "Front-End Development"
        CourseDescription = "Learn front-end development essentials in our course. From HTML and CSS to JavaScript, gain the skills to build responsive and user-friendly websites. Perfect for beginners and those looking to advance their coding abilities."
        EnrolLink = "/Course1"/>
        <Card
        imgLink = "https://assets-global.website-files.com/61897bbb80b04406f137091a/619e894984f97c88358c3581_blog-01.png"
        imgAlt = "CardImage"
        CourseTitle = "Back-End Development"
        CourseDescription = "Learn front-end development essentials in our course. From HTML and CSS to JavaScript, gain the skills to build responsive and user-friendly websites. Perfect for beginners and those looking to advance their coding abilities."
        EnrolLink = "/Course2" />
        <Card 
        imgLink = "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/August/Graphic-designer1.jpg"
        imgAlt = "CardImage"
        CourseTitle = "Graphic Designing"
        CourseDescription = "Learn front-end development essentials in our course. From HTML and CSS to JavaScript, gain the skills to build responsive and user-friendly websites. Perfect for beginners and those looking to advance their coding abilities."
        EnrolLink = "/Course3"/>
        <Card 
        imgLink = "https://pbblogassets.s3.amazonaws.com/uploads/2016/07/EDIT-COVER.jpg"
        imgAlt = "CardImage"
        CourseTitle = "Video Editing"
        CourseDescription = "Learn front-end development essentials in our course. From HTML and CSS to JavaScript, gain the skills to build responsive and user-friendly websites. Perfect for beginners and those looking to advance their coding abilities."
        EnrolLink = "/Course4" />
    </div>
    <div className="card-row">
        <Card 
        imgLink = "https://ideausher.com/wp-content/uploads/2022/07/covr-image-50_result.webp"
        imgAlt = "CardImage"
        CourseTitle = "App Development"
        CourseDescription = "Learn front-end development essentials in our course. From HTML and CSS to JavaScript, gain the skills to build responsive and user-friendly websites. Perfect for beginners and those looking to advance their coding abilities."
        EnrolLink = "/Course5"/>
        <Card 
        imgLink = "https://blog.hubspot.com/hs-fs/hubfs/content%20creation.png?width=595&height=400&name=content%20creation.png"
        imgAlt = "CardImage"
        CourseTitle = "Content Creation"
        CourseDescription = "Learn front-end development essentials in our course. From HTML and CSS to JavaScript, gain the skills to build responsive and user-friendly websites. Perfect for beginners and those looking to advance their coding abilities."
        EnrolLink = "/Course6" />
        <Card 
        imgLink = "https://blog.academyart.edu/wp-content/uploads/2020/07/Wei-Chieh-Wang-Piccolo.jpg"
        imgAlt = "CardImage"
        CourseTitle = "3D Animation"
        CourseDescription = "Learn front-end development essentials in our course. From HTML and CSS to JavaScript, gain the skills to build responsive and user-friendly websites. Perfect for beginners and those looking to advance their coding abilities."
        EnrolLink = "/Course7" />
        <Card 
        imgLink = "https://pbblogassets.s3.amazonaws.com/uploads/2015/11/Cinematography-Manual.jpg"
        imgAlt = "CardImage"
        CourseTitle = "Cinematography"
        CourseDescription = "Learn front-end development essentials in our course. From HTML and CSS to JavaScript, gain the skills to build responsive and user-friendly websites. Perfect for beginners and those looking to advance their coding abilities."
        EnrolLink = "/Course8" />
    </div>
    </>
  )
}

export default TrainingPage