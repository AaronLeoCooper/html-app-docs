const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={this.props.siteConfig.cdnUrl}>
              Download
            </Button>
            <Button href={docUrl('getting-started.html')}>
              Getting Started
            </Button>
            <Button href={docUrl('api-htmlapp.html')}>
              API Reference
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {title, baseUrl} = siteConfig;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Container
            id="example"
            padding={['bottom', 'top']}
            background="light"
          >
            <GridBlock
              align="center"
              layout="threeColumn"
              contents={[
                {
                  title: 'Minimal API',
                  content: 'No clutter. Just the useful bits to make your HTML interactive.',
                },
                {
                  title: 'Super lightweight',
                  content: 'Weighing in at less than 2kb minzipped, network impact is negligible.',
                },
                {
                  title: 'Zero dependencies',
                  content: `${title} is dependency-free and has full unit test coverage. It's rock solid.`,
                }
              ]}
            />
          </Container>
          <Container
            id="example"
            padding={['bottom', 'top']}
            className="flex"
          >
            <GridBlock
              align="center"
              contents={[
                {
                  title: "It's just HTML + JavaScript",
                  content: `If you're building a simple website, you *probably* don't need a framework.
${title} provides an opinionated means of binding JavaScript logic with tagged HTML elements.`,
                }
              ]}
            />
            <div
              className="example-iframe"
              dangerouslySetInnerHTML={{
                __html: '<iframe src="https://codesandbox.io/embed/j48o555oxv?autoresize=1&fontsize=14&hidenavigation=1&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>'
              }}
            />
          </Container>
        </div>
      </div>
    );
  }
}

module.exports = Index;
