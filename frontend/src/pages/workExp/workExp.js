import React from "react";
import { motion } from "framer-motion";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography, Paper } from "@mui/material";
import { FaLaptopCode, FaServer } from "react-icons/fa";
import "./workExp.css";

const experiences = [
  {
    id: 1,
    date: "June 2024 - July 2024",
    title: "Frontend Intern",
    company: "NALCO, Angul",
    description: [
      "-Collaborated in a team to develop a guesthouse booking website using React.js for frontend and GSAP for animations.",
      "-Optimized performance and response times using static-json databases.",
      "-Recognized by the team for delivering a high-quality and user-friendly interface.",
    ],
    icon: FaLaptopCode,
  },
  {
    id: 2,
    date: "Jan 2024 - Feb 2024",
    title: "Open Source Contributor",
    company: "JGEC WINTER OF CODE",
    description: [
      "-Collaborated with maintainers to enhance code quality, add new features, and contribute to multiple repositories.",
      "-Acknowledged as a key contributor in repositories like Openpedia, Solve It, and MyTwit for impactful contributions.",
      "-Contributed 5+ pull requests merged into production.",
    ],
    icon: FaServer,
  },
];

const WorkExperience = () => {
  return (
    <motion.div
      className="work"
      id="work"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container work-exp col-12 mt-3 mb-1 text-center">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Work Experience
        </motion.h2>
        <hr />
        <Timeline position="alternate">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <TimelineItem key={exp.id}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {exp.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <IconComponent size={20} />
                  </TimelineDot>
                  {index !== experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Paper elevation={3} sx={{ padding: "10px" }}>
                      <Typography variant="h6">{exp.title}</Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {exp.company}
                      </Typography>
                      <Typography variant="body2">{exp.description}</Typography>
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
