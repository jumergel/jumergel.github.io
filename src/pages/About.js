import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../shared-styling.css'; // Import shared styles

export default function About() {
  return (
    <div className="page-styling">
      <Container className="py-5">
        <h1 className="mb-4 text-center">About</h1>
          <p>I am an ambitious double major in mathematics and computer science at UT Austin. I seek out challenge and am open to a variety of opportunities. My career interests are primarily in algorithms, operating systems, cyber security, machine learning, and quantitative finance. What draws me to these fields are the critical intersection of mathematics and computer science and the role of clever or complex logical ideas being at the basis of a solid understanding. I am open to other opportunities that would improve my technical abilities or critical thinking.   </p>
          <br></br><p>From when I first took a computer science class, I knew it was what I wanted to do. I am most motivated by the ability to build something out of nothing. Computer science gave me a way to use my mathematical background to create something.</p>
            <p>Understanding the computer's architecture and how it all starts from on and off switches and becomes more complex has helped me further my understanding of computer science and is very fascinating to me. Then I took Operating Systems, and I fell in love with computer science all over again. When I was working on my individual toy operating system, everything else seemed to fade away. My favorite parts were those relating to complex logic; forseeing future problems, writing and understanding the full system at once, and dealing with nasty race conditions was what I excelled at. It allowed me to write clean, logical code that was exponentially easier to trace through, which would become critical as I implemented more and more pieces of the operating system. Implementing preemptive multithreading, interrupt scheduling, and improving my system by incorporating helper threads to achieve O(1) time was thrilling to me. I am looking for a similar challenging experience where I can contribute to the fullest of my capabilities.  </p>
         <br></br> <p> I love life and constantly invest my time improving myself in various ways. However, I am ready to commit my time to a more serious life project and I would like to see the impact my work can make.  </p>
      </Container>

      <Container className="py-5">
        <h1 className="mb-4 text-center">Interests</h1>
        <p> My favorite thing besides coding is surfing. It may seem very different - but both give me constant challenge and intense focus. Both require creativity of testing out new approaches and analyzing possible refinements in future attempts. The result of fixing a bug, or catching a wave, give the same addictive satisfaction and feels meditative to me.  </p>         
        <p>I have been pursuing music and dance throughout my lifetime, through piano and ballet, and this has become a meaningful part of my life. For me it is not only a form of expression, but a way to connect with others.  </p> 
        <br></br><p> I have now found a similar enjoyment through starting this website and learning html, css, and javascript as a way to destress from rigorous classes. I've now rebuilt it and incorporated React Bootstrap. It's fun to have the flexibility to plan my own format, design, and content, through a more calm form of coding. I plan on making many additions and adding more complex features in the future! </p>           
        <p> I devote myself fully to everything I am a part of. In this way I can learn the most from every experience and gain valuable intangible skills such as working with a variety of people, tackling unique challenges, deepening my understanding of concepts, keeping my creativity active with a fresh perspective on the world. I am someone who can find a strong interest in any task or project and can communicate this motivation to others. Everyday, I make an effort to live the most honest and healthy life to maintain my passion for life and create positive impacts on others. </p>   
      </Container>

      <Container className="py-5">
        <h1 className="mb-4 text-center">Experience</h1>
        <p>Please see my resume: <a href="https://docs.google.com/document/d/1VrelxX6Bv1ghKwh_gz-P3fmNR4_bVHgjSQ2ZtdeBUjk/edit?usp=sharing" target="_blank">Resume</a></p>
        <p> Or access my academics webpage <a href="https://jumergel.github.io/academics" target="_blank">My Experiences</a></p>
      </Container>

      <Container className="py-5">
        <h1 className = "mb-4 text-center"> Technical Skills</h1>
        <ul>
            <li>Java</li>
            <li>Python</li>
            <li>LaTeX</li>
            <li>HTML, CSS</li>
            <li>Javascript</li>
            <li>Assembly</li>
            <li>C</li>
            <li>C++</li>
            <li>Kotlin</li>
            <li>Swift</li>
            <li>React Bootstrap</li>
            <li>Using APIs</li>
            <li>Git</li>
            <li>Linux</li>

        </ul>
      </Container>

    </div>
  );
}