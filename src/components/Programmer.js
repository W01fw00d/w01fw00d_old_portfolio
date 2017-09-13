import React, { Component } from 'react';

class Programmer extends Component {
  render () {
      
    const names = ['Gabriel'],
          surnames = ['Romay', 'Machado'],
          linkedin = 'https://www.linkedin.com/in/gabriel-romay-machado-40050a114',
          alias = 'W01fw00d',
          github = 'https://github.com/W01fw00d';
      
    return (
        <ul>
            <h2>Name: <a target="_blank" href={linkedin}>{names.join(' ') + ' ' + surnames.join(' ')}</a> </h2>
            <h2>Github: <a target="_blank" href={github}>{alias}</a></h2>
        </ul>
    );
  }
}

export default Programmer;