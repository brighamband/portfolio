import GitHubIcon from '@material-ui/icons/GitHub';
import { Container } from '@material-ui/core';
import { projects } from '../data';
import SectionTop from '../components/SectionTop';
import IconLink from '../components/IconLink';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <section id='projects'>
      <Container maxWidth='md'>
        <SectionTop
          title='My Projects'
          iconLink={
            <IconLink
              icon={<GitHubIcon />}
              link='https://github.com/brighamband?tab=repositories'
              tooltipTitle='Check out all my GitHub repos'
            />
          }
        />
        {projects.map((proj) => (
          <ProjectCard project={proj} />
        ))}
      </Container>
    </section>
  );
}

export default Projects;
