import React, { Component } from 'react';
import ReactGA, { OutboundLink } from 'react-ga';

import './Supporters.css';

class Supporters extends Component {
  constructor() {
    super();

    ReactGA.pageview('/supporters');

    this.patrons = patrons.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (b.name < a.name) return 1;
      return 0;
    });
  }

  render() {
    const $supporters = this.patrons.map(patron => {
      const key = patron.name;
      return <Supporter key={key} {...patron} />;
    });

    return (
      <main>
        <section className="section">
          <h2 className="section__title">
            The Lovely List of Prominent Patrons
          </h2>
          <p className="section__text">Thanks to all the supporters!</p>
          <p className="section__text">
            If you would like to see your name here, donate $3 or more via{' '}
            <OutboundLink
              to="https://patreon.com/nickpierson"
              eventLabel="patreon"
            >
              Patreon
            </OutboundLink>.
          </p>
          <ul className="supporters">{$supporters}</ul>
        </section>
      </main>
    );
  }
}

class Supporter extends Component {
  render() {
    const { name, image, adText, adLink } = this.props;

    return (
      <li className="supporter">
        <img
          alt={`Avatar for ${name}`}
          className="supporter__image"
          src={image}
        />
        <div className="supporter__text">
          <span className="supporter__name">{name}</span>
          {adText && (
            <span className="supporter__ad">
              wants to advertise their <a href={adLink}>{adText}</a>.
            </span>
          )}
        </div>
      </li>
    );
  }
}

const patrons = [
  {
    name: 'Masaaki Hagino',
    image: 'https://c8.patreon.com/2/200/12606563'
  },
  {
    name: 'Penguin Spheniscidae',
    image: 'https://c8.patreon.com/2/200/15942084'
  }
];

export default Supporters;
