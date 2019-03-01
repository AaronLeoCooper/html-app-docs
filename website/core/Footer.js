const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('installation.html', this.props.language)}>
              Installation
            </a>
            <a href={this.docUrl('getting-started.html', this.props.language)}>
              Getting Started
            </a>
          </div>
          <div>
            <h5>API Reference</h5>
            <a href={this.docUrl('api-overview.html', this.props.language)}>
              Overview
            </a>
            <a href={this.docUrl('api-htmlapp.html', this.props.language)}>
              HTMLApp
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.sourceRepoUrl}>
              GitHub
            </a>
            <a href={this.props.config.npmUrl}>
              NPM
            </a>
            <a href={`${this.props.config.sourceRepoUrl}/archive/master.zip`}>
              Download
            </a>
          </div>
        </section>
        <section className="copyright">
          {this.props.config.copyright}
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
