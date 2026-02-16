import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../shared-styling.css";
import "./Webmap.css";

const WEBMAP = {
  home: { label: "Home", to: "/" },
  sections: [
    { label: "About", to: "/about", children: [] },
    { label: "Academics", to: "/academics", children: [] },
    { label: "Projects", to: "/projects", children: [] },
    {
      label: "Interests",
      to: "/interests",
      children: [
        { label: "GraphicDesign", to: "/graphic-design" },
        { label: "Movies", to: "/movies" },
        { label: "Reading", to: "/reading" },
        { label: "Piano", to: "/piano" },
      ],
    },
  ],
};

function NodeLink({ to, children, className = "" }) {
  return (
    <Link to={to} className={`webmap-link ${className}`}>
      {children}
    </Link>
  );
}

export default function Webmap() {
  return (
    <div className="page-styling">
      <Container className="py-5">
        <h1 className="mb-4 text-center">Webmap</h1>

        <div className="webmap-tree">
          {/* ROOT */}
          <div className="webmap-root">
            <div className="webmap-node">
              <NodeLink to={WEBMAP.home.to} className="webmap-title">
                {WEBMAP.home.label}
              </NodeLink>
            </div>
          </div>

          {/* CHILDREN OF ROOT */}
          <div className="webmap-children">
            {WEBMAP.sections.map((section) => (
              <div className="webmap-branch" key={section.label}>
                <div className="webmap-node">
                  <NodeLink to={section.to} className="webmap-title webmap-underline">
                    {section.label}
                  </NodeLink>

                  {section.children?.length > 0 && (
                    <ul className="webmap-list">
                      {section.children.map((child) => (
                        <li key={child.label}>
                          <NodeLink to={child.to} className="webmap-child">
                            {child.label}
                          </NodeLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="webmap-note text-center mt-4">
          More pages will be added as I build out the site.
        </p>
      </Container>
    </div>
  );
}
