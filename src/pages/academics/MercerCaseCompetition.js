import React from 'react';
import { Container } from 'react-bootstrap';
import '../../shared-styling.css';
import BackButton from '../../components/BackButton';
import mercerTeam from '../../images/mercerTeam.jpeg';

export default function MercerCaseCompetition() {
    return (
        <div className="page-styling">
            <BackButton />
            <Container className="py-5">
                <h1 className="mb-4 text-center">Mercer Case Competition</h1>
                <p className = "mb-4 text-narrow"> Mercer’s Actuarial Science Case Competition at the University of Texas  –  Austin, TX, Fall 2023  </p>

                { /* SLIDES */}
                {/* <div style={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    width: '68.6%',
                    margin: '4rem auto 0'
                }}>
                    <iframe
                        src="https://docs.google.com/presentation/d/1Odl9RLu1lbOweqEfV6fuy7X4u8H9czK9VqxgGnsibVk/embed"
                        width="100%"
                        height="500"
                        allowFullScreen
                        style={{ display: 'block' }}
                    />
                </div> */}
                <div style={{
                    width: '68.6%',
                    margin: '2rem auto 0',
                    borderRadius: '24px',
                    overflow: 'hidden'
                }}>
                    <img
                        src={mercerTeam}
                        alt="Mercer Case Competition Team"
                        style={{ width: '70%', height: 'auto', display: 'block', marginLeft: '10vw' }}
                    />
                </div>

                <p className = "mb-4 text-narrow"> <br/> <br/>
                    Won 1st place and was awarded a scholarship and networking dinner with Mercer; analyzed raw healthcare data and performed background research to identify supply and demand trends across pharmaceuticals, labor markets, and healthcare plans.  <br />
                    Identified the most critical problems to propose a future business strategy plan: presented and supported conclusions with generated statistical models, graphics, and past market research.
                </p>

            </Container>
        </div>
    );
}