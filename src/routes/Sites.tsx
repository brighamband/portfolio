import LaunchSharpIcon from "@mui/icons-material/LaunchSharp";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Card, Container, IconButton } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { sites } from "../assets/data";
import { BigTooltip, COLORS, PageTop } from "../global";
import { Theme } from "@mui/material";

const useLocalStyles: any = makeStyles((theme: Theme) => ({
  header: {
    color: COLORS.white,
  },
  url: {
    color: COLORS.white,
    padding: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(4),
    margin: theme.spacing(4),
  },
}));

const Sites = () => {
  const local = useLocalStyles();

  return (
    <main>
      <Container maxWidth="md">
        <PageTop pageTitle="My Websites & Projects" />
        {sites.map((site) => (
          <Card key={site.url} className={local.card}>
            <h2>{site.name}</h2>
            <p>{site.description}</p>
            {site.url && (
              <BigTooltip
                title={
                  <>
                    <h3 className={local.header}>Site:</h3>
                    <code className={local.url}>{site.url}</code>
                  </>
                }
              >
                <IconButton
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LaunchSharpIcon />
                </IconButton>
              </BigTooltip>
            )}
            {site.srcCode && (
              <BigTooltip
                title={
                  <>
                    <h3 className={local.header}>Source Code:</h3>
                    <code className={local.url}>{site.srcCode}</code>
                  </>
                }
              >
                <IconButton
                  href={site.srcCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </IconButton>
              </BigTooltip>
            )}
          </Card>
        ))}
      </Container>
    </main>
  );
};

export default Sites;
