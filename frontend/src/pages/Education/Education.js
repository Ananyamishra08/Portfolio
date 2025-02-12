import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography, Paper } from "@mui/material";
// import { SiReact, SiBook, SiSchool } from "react-icons/si"; // Imported necessary icons
import { FaBook } from "react-icons/fa";
import "./education.css";

const education = [
  {
    id: 1,
    date: "2021 - 2025",
    title: "Graduation",
    course: "B.Tech in Electronics and Telecommunication Engineering",
    subtitle: "IIIT BBSR",
    icon: <FaBook />, // React Icon for College
  },
  {
    id: 2,
    date: "2020-2021",
    title: "Higher Secondary Education",
    course: "Science (PCMB)",
    subtitle: "DAV Public School, Cuttack",
    icon: <FaBook />, // Book Icon for Higher Secondary
  },
  {
    id: 3,
    date: "2018 - 2019",
    title: "Secondary Education",
    course: "CBSE",
    subtitle: "DAV Public School, Cuttack",
    icon: <FaBook />, // School Icon for Secondary Education
  },
];

const Education = () => {
  return (
    <div className="edu" id="education">
      <div className="container education">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="text-uppercase"
        >
          Education Details
        </Typography>
        <hr />
        <Timeline position="alternate">
          {education.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
                className="education-date"
              >
                {exp.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">{exp.icon}</TimelineDot>
                {index !== education.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Paper elevation={3} sx={{ padding: "10px" }}>
                  <Typography variant="h6">{exp.title}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {exp.course}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="subtitle
                  "
                  >
                    {exp.subtitle}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default Education;
