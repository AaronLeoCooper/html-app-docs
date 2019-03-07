const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}.html`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    const { config: siteConfig } = this.props;

    const { footerLinks } = siteConfig;

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
          {
            footerLinks.map(({ title, links }) => (
              <div key={title}>
                <h5>{title}</h5>
                {
                  links.map(({ doc, link, label }) => (
                    <a
                      key={label}
                      href={link || this.docUrl(doc, this.props.language)}
                      target={link ? '_blank' : undefined}
                    >
                      {label}
                    </a>
                  ))
                }
              </div>
            ))
          }
        </section>
        <section className="copyright">
          {this.props.config.copyright}
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
