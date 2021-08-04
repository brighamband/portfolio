import React from "react";
import { Box, Container, Grid, IconButton } from "@material-ui/core";
import profile from "../assets/profile.jpg";
import { BigTooltip, PageTop, WebVideo } from "../global";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Home = () => (
  <Container maxWidth="md" className="content">
    <PageTop pageTitle="Welcome!" />
    <Grid container spacing={5} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={8}>
        <p>
          Hi, my name is <strong>Brigham Andersen</strong>. I'm a student at
          Brigham Young University getting a Bachelor's of Science in Computer
          Science: Software Engineering and minoring in Business.
        </p>
        <p>
          I love solving the problem we hate most --
          <i> wasting time and money</i>. This passion drives my career,
          centered on using technology to boost business productivity.
        </p>
        <p>
          I'm addicted to giving my all and am looking forward to combining that
          passion with my skills in software engineering and business to help
          you!
        </p>
      </Grid>
      <Grid item xs={8} md={4}>
        <div className="profile" />
        <img className="profile" src={profile} alt="Me" />
      </Grid>
    </Grid>
    <Box my={8}>
      <h2>
        Latest Content{" "}
        <BigTooltip title="Check out my YouTube channel">
          <IconButton
            href="https://www.youtube.com/channel/UC5h98VfEfhqHkSMlt4ejCeg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon />
          </IconButton>
        </BigTooltip>
      </h2>
      <WebVideo
        title="Web Dev (HTML/CSS) Crash Course"
        url="https://www.youtube.com/embed/vGIRW00pB9w"
      />
      <WebVideo
        title="Web Dev Snapshot"
        url="https://www.youtube.com/embed/jSeLgZsF5_U"
      />
    </Box>
  </Container>
);

export default Home;
