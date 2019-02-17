const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function About(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        'doc1.html',
      )})`,
      title: 'Browse Docs',
    },
    {
      content: 'Ask questions about the documentation and project',
      title: 'Join the community',
    },
    {
      content: "Find out what's new with this project",
      title: 'Stay up to date',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>About {siteConfig.title}</h1>
          </header>
          <p>
            This project was born out of a desire to build simple websites and web apps
            without needing to resort to a full-blown JavaScript framework, DOM rendering
            library or build setup.
          </p>
          <p>
            {siteConfig.title} was built and maintained by myself, Aaron Leo Cooper. I blog
            about things occasionally over at <a href="https://webdevdiaries.com">webdevdiaries.com</a>.
          </p>
        </div>
      </Container>
    </div>
  );
}

module.exports = About;
