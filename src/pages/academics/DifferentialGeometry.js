import React from 'react';
import { Container } from 'react-bootstrap';
import '../../shared-styling.css';
import BackButton from '../../components/BackButton';
import groupPhoto from '../../images/differential_geometry_group.jpeg';
import paperImage from '../../images/differential_geometry.png';

export default function DifferentialGeometry() {
    return (
        <div className="page-styling">
            <BackButton />
            <Container className="pt-2 pb-5">
                <h1 className="mb-4 text-center">Differential Geometry Research</h1>

                <p className="text-center">
                    Rising Researcher's Award — Mathematics Department, Fall 2024
                </p>

                { /* PDF */}
                <div className="zoom-hover" style={{ width: '48%', margin: '4rem auto 0' }}>
                    <div style={{ borderRadius: '24px', overflow: 'hidden' }}>
                        <img
                            src={paperImage}
                            alt="Differential Geometry Paper"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>
                </div>

                { /* GROUP PHOTO */}
                <div style={{
                    width: '48%',
                    margin: '2rem auto 0',
                    borderRadius: '24px',
                    overflow: 'hidden'
                }}>
                    <img
                        src={groupPhoto}
                        alt="Differential Geometry Research Group"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>
            </Container>
        </div>
    );
}