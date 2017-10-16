import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export class App extends React.Component {
  render() {


    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];

    
    const navLinks = [] 

    pages.forEach(page => { 
      
      const a = (
        <div> 
          <a href={'/' + page}> 
            {this.props.capital ? page.toUpperCase() : page} 
          </a>
        </div>
      ) 

      if (navLinks.length > this.props.count) return;

      navLinks.push(a);

    });

    this.props.myfunc(navLinks)
    return navLinks
  }
}

export var counts = 10


