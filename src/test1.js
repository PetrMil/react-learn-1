import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    
    const navLinks = [] 

    pages.forEach(page => { 
      
      const a = (
        <div> 
          <a href={'/' + page}> 
            {page} 
          </a>
        </div>
      ) 

      navLinks.push(a);

    });

    return navLinks
  }
}


export default App