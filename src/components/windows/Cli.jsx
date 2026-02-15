import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({windowName,setWindowsState}) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={{
            about: {
              fn: () => {
                return `Hi, I'm Sandeep Sahu!
A passionate Web Developer specializing in React, Node.js, and modern web technologies. \n`;
              },
              description: "About me",
            },
            projects: {
              fn: () => {
                return `1. Portfolio Website - React + TailwindCSS
2. E-commerce App - MERN Stack
3. Chat Application - Socket.io + Node.js\n`;
              },
              description: "List of projects",
            },
            skills: {
              fn: () => {
                return `Frontend: React, Next.js, TailwindCSS
Backend: Node.js, Express, MongoDB
Tools: Git, Docker, VS Code\n`;
              },
              description: "Technical skills",
            },
            contact: {
              fn: () => {
                return `Email: sandeepsahu@example.com
LinkedIn: linkedin.com/in/sandeepsahu
GitHub: github.com/sandeepsahu\n`;
              },
              description: "Contact information",
            },
          }}
          welcomeMessage={`Welcome to Sandeep Sahu Portfolio Terminal!
Available commands:
about | projects | skills | contact | help\n`}
          promptLabel={"sandeepsahu:~$"}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
