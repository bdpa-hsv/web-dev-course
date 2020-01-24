/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
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

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
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
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            {/* <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button> */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background="dark">
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center' }}>
        <h2>Reasons to Learn Web Development</h2>
        <MarkdownBlock>Everything is going to the web</MarkdownBlock>
        <MarkdownBlock>Pretend you are smarter than everyone</MarkdownBlock>
        <MarkdownBlock>Get Paid BOOKOO BUCKS</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              ` Javascript is hugely in demand. In fact, it’s one of the most in-demand languages of the year and 
              is likely to remain so for some time. It has almost become a prerequisite for most technical roles 
              these days and serves as a great foundation to help you keep up with other in-demand languages. `,
            image: `${baseUrl}img/undraw_dev_productivity_umsq.svg`,
            imageAlign: 'left',
            title: 'Learn to Code Like the Pros',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'React is one of the most popular front end development frameworks. Facebook, Instagram, and Netflix are all built using React',
            image: `${baseUrl}img/undraw_social_girl_562b.svg`,
            imageAlign: 'right',
            title: 'Learn to Develop the React Way',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="dark">
        {[
          {
            content: `HTML and CSS are the frameworks used to build websites. 
            If you can understand how they work together, you’re much better off when it comes to design, 
            marketing, and several other professions. You don’t need to be an expert, but being able to understand 
            how to utilize these languages can help you build an optimized, user-friendly website for your business. 
            Without knowing at least the basics, you’ll struggle for better results.`,
            image: `${baseUrl}img/undraw_online_everywhere_cd90.svg`,
            imageAlign: 'right',
            title: 'Learn The Building Blocks of Web Development',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'High School Coding Competion',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'HSCC',
          },
          {
            content: 'IT Showcase',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'IT Showcase',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
