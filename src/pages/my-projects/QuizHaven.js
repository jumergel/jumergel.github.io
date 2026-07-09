import React from 'react';
import { Container } from 'react-bootstrap';
import '../../shared-styling.css';
import BackButton from '../../components/BackButton';
import homescreen from '../../images/homescreen_quizhaven.png';
import loginScreen from '../../images/login_quizhaven.png';
import startQuiz from '../../images/startquiz.png';
import testScore from '../../images/test_score.png';
import statsPage from '../../images/stats_page.png';
import studyingQuizhaven from '../../images/studying_quizhaven.png';
import whatToStudy from '../../images/what_to_study.png';
import nextQuestion from '../../images/next_question.png';

const screenshots = [
    { src: homescreen, alt: 'Home Screen', caption: 'Home' },
    { src: loginScreen, alt: 'Login Screen', caption: 'Login' },
    { src: startQuiz, alt: 'Start Quiz', caption: 'Start Quiz' },
    { src: studyingQuizhaven, alt: 'Studying', caption: 'Study Mode' },
    { src: whatToStudy, alt: 'What to Study', caption: 'What to Study' },
    { src: nextQuestion, alt: 'Next Question', caption: 'Next Question' },
    { src: testScore, alt: 'Test Score', caption: 'Test Score' },
    { src: statsPage, alt: 'Stats Page', caption: 'Progress & Stats' },
];

export default function QuizHaven() {
    return (
        <div className="page-styling">
            <BackButton />
            <Container className="pt-2 pb-5">
                <h1 className="mb-4 text-center">Quiz Haven</h1>

                <p>
                    A personalized AI-centered study tool that adapts teaching to the user
                    and delivers personalized quizzes.
                </p>

                { /* CANVA PRESENTATION */}
                <div style={{
                    width: '68.6%',
                    margin: '2rem auto 0',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    position: 'relative',
                    paddingTop: '38.55%'  /* 56.25% of 68.6% to maintain 16:9 ratio */
                }}>
                    <iframe
                        loading="lazy"
                        src="https://www.canva.com/design/DAHO5wc8i3U/zcc_DJaG2eByR--oPdquWg/view?embed"
                        allowFullScreen
                        allow="fullscreen"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none'
                        }}
                    />
                </div>

                { /* SCREENSHOTS GRID */}
                <div style={{
                    width: '68.6%',
                    margin: '2rem auto 0',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1.2rem'
                }}>
                    {screenshots.map((img, idx) => (
                        <div key={idx} style={{ textAlign: 'center' }}>
                            <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                            <p style={{
                                fontSize: '0.8rem',
                                color: '#888',
                                marginTop: '0.5rem',
                                width: '100%'
                            }}>
                                {img.caption}
                            </p>
                        </div>
                    ))}
                </div>

            </Container>
        </div>
    );
}