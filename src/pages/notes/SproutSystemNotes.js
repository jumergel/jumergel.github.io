import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../../shared-styling.css';
import BackButton from '../../components/BackButton';

const sections = [
    {
        title: 'PlantPresets.ts',
        body: `Contains all specifications between different plant types. Each plant is defined as a data object with its L-system string, growth parameters, and visual settings — no complex logic, just configuration. Adding a new plant type is as simple as adding a new object. Features like leaf density are controlled by multiplying a probability value by a per-plant field, so each plant can have varied density without changing core logic.`
    },
    {
        title: 'LSystem.ts',
        body: `Takes an axiom string and rewrites it a fixed number of iterations using the plant's rules. Each character is either replaced by its rule or kept as-is. A single "A" can expand into thousands of characters in just a few iterations — encoding the entire branching structure of a plant. The final string is parsed into a list of Module objects for Turtle3D to walk. The "/" symbol either spins randomly in 3D space or stays flat depending on the use3D flag, so no two 3D plants look identical.`
    },
    {
        title: 'Turtle3D.ts',
        body: `Walks the Module list like a turtle moving through 3D space with a position and three perpendicular orientation axes (H, L, U). F creates a branch cylinder, L places a leaf, and [ / ] push and pop state for branching. Deeper branches are progressively shorter via step.scale(m.s * Math.pow(lengthShrink, state.depth)). A tropism function bends branches so they sag naturally under gravity. Each branch and leaf records a birthOrder for use in the growth animation.`
    },
    {
        title: 'PlantMesh.ts',
        body: `Converts turtle geometry into GPU-ready array buffers. Branches are modeled as tapered cylinders — two rings of vertices at different radii connected by triangles, so branches narrow naturally at the ends. Leaves are small flat polygons of various shapes placed at branch endpoints and along branches. Leaf shapes are generated from a circle template with modifications — for example, a sin(5t) function gives the oak leaf shape its characteristic lobed outline.`
    },
    {
        title: 'App.ts',
        body: `Coordinates all components: creates the GUI, manages all plants, and handles WebGL render passes. All plants share one combined GPU buffer. When a plant is added, its geometry is merged in and branch vertex offsets are applied so triangles don't overlap. Solid branches are drawn first with depth writing on, then leaves with depthMask(false) so transparent leaf edges don't cut holes in leaves behind them.`
    },
    {
        title: 'Gui.ts',
        body: `Handles all user input — camera orbit via mouse drag, zooming, arrow key movement, and clicking the ground to plant a tree. Click-to-plant uses ray casting: the 2D pixel is converted into a 3D ray from the camera, then solved for where it hits y=0. Drags under 8 pixels are ignored to prevent accidental camera shifts, and the didRealDrag flag prevents accidental planting while dragging.`
    },
    {
        title: 'Shaders.ts',
        body: `Stores raw GLSL shader programs for the floor, branch, leaf, and sun — each with a vertex and fragment shader. Branch shading uses Lambertian lighting: dot(N,L) measures how directly the surface faces the light (1 = fully lit, 0 = edge). An ambient term of 0.35 keeps dark sides visible. The leaf shader uses a higher ambient term so leaves remain visible from all angles.`
    },
    {
        title: 'Growth Animation',
        body: `Each plant maintains a growthProgress value from 0 to 1 that ticks each frame. Branch geometry is linearly interpolated between start and end points for smooth growth. Leaves appear only after their parent branch's birthOrder threshold is reached, preventing leaves from appearing before their branch. Each leaf is assigned a stable index at creation time so its geometry doesn't shift each frame as the array grows — this fixed a bug where leaves were animating erratically like jellyfish.`
    },
    {
        title: 'Challenges & Future Work',
        body: `Key challenges included unnaturally thick high-level branches (fixed by adjusting taper rates), unnatural identical tree shapes (fixed by randomizing azimuth rotation per plant), and balancing 2D vs 3D behavior (solved with a use3D flag per preset). Future directions include preventing ingrown branches, biasing branch and leaf growth toward the light source, more volumetric leaves with better gradient shading, and more leaf placement options.`
    }
];

export default function SproutSystemNotes() {
    const [open, setOpen] = useState(null);

    const toggle = (idx) => setOpen(open === idx ? null : idx);

    return (
        <div className="page-styling">
            <BackButton />
            <Container className="pt-2 pb-5">
                <h1 className="mb-2 text-center">Sprout System</h1>
                <p className="text-center" style={{ color: '#888', marginBottom: '0.5rem' }}>
                    Technical Notes
                </p>

                <p style={{ marginTop: '2rem' }}>
                    A procedural plant generation system built in WebGL using L-systems — a formal
                    grammar that models plant branching by repeatedly rewriting strings of symbols.
                    Plants grow via animation, support multiple presets, and are rendered with
                    Lambertian lighting, tapered branch cylinders, and per-plant leaf density.
                </p>

                {/* FILE OVERVIEW */}
                <h2 style={{ marginTop: '3rem', fontSize: '1.4rem' }}>File Structure</h2>
                <p style={{ marginTop: '0.5rem', color: '#555', fontSize: '0.92rem', lineHeight: '1.9' }}>
                    App.ts → Gui.ts (camera, mouse, planting)<br />
                    App.ts → Plant.ts → LSystem.ts (string rewriter)<br />
                    App.ts → Plant.ts → Turtle3D.ts (3D geometry walker)<br />
                    App.ts → PlantMesh.ts (GPU buffers)<br />
                    App.ts → PlantPresets.ts (plant definitions)<br />
                    App.ts → Shaders.ts (GLSL shaders)
                </p>

                {/* SYMBOL TABLE */}
                <h2 style={{ marginTop: '2.5rem', fontSize: '1.4rem' }}>L-System Symbols</h2>
                <table style={{
                    width: '70%',
                    margin: '1rem auto 0',
                    borderCollapse: 'collapse',
                    fontSize: '0.9rem'
                }}>
                    {[
                        ['F', 'Draw forward (branch segment)'],
                        ['A', 'Grow — rewritable symbol'],
                        ['L', 'Place leaf'],
                        ['+', 'Pitch up'],
                        ['−', 'Pitch down'],
                        ['/', 'Azimuth turn (random in 3D)'],
                        ['[', 'Push turtle state'],
                        [']', 'Pop turtle state'],
                    ].map(([sym, meaning], i) => (
                        <tr key={i} style={{ borderBottom: '0.5px solid rgba(0,0,0,0.08)' }}>
                            <td style={{ padding: '0.5rem 1rem', fontFamily: 'monospace', fontWeight: 600, color: '#9CB0CE' }}>{sym}</td>
                            <td style={{ padding: '0.5rem 1rem', color: '#555' }}>{meaning}</td>
                        </tr>
                    ))}
                </table>

                {/* ACCORDION SECTIONS */}
                <h2 style={{ marginTop: '3rem', fontSize: '1.4rem' }}>Module Breakdown</h2>
                <div style={{ marginTop: '1rem' }}>
                    {sections.map((s, idx) => (
                        <div key={idx} className="accordion-entry" style={{ marginLeft: '15%', maxWidth: '70%' }}>
                            <div
                                className="accordion-row"
                                onClick={() => toggle(idx)}
                                style={{ cursor: 'pointer', padding: '0.75rem 0' }}
                            >
                                <span className="accordion-label" style={{ fontWeight: 500 }}>{s.title}</span>
                                <span className="accordion-chevron" style={{
                                    transform: open === idx ? 'rotate(180deg)' : 'none'
                                }}>⌄</span>
                            </div>
                            {open === idx && (
                                <div className="accordion-body">
                                    <p>{s.body}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </Container>
        </div>
    );
}