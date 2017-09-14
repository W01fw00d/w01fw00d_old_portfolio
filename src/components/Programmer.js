import React, { Component } from 'react';
import '../assets/Programmer.css';

class Programmer extends Component {
  render () {
      
    const names = ['Gabriel'],
          surnames = ['Romay', 'Machado'],
          linkedin = 'https://www.linkedin.com/in/gabriel-romay-machado-40050a114',
          alias = 'W01fw00d',
          github = 'https://github.com/W01fw00d';
      
    return (
        <div className="Programmer">
            <h3>Name: <a target="_blank" href={linkedin}>{names.join(' ') + ' ' + surnames.join(' ')}</a> </h3>
            <h3>Github: <a target="_blank" href={github}>{alias}</a> </h3>
        </div>
    );
  }
}

export default Programmer;