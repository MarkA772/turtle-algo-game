import React from 'react';

function Directions() {
  return (<>
  <h3>Welcome to my Turtle App</h3>

  Type some commands into the input box and press ctrl+enter to make the turtle draw and move!

  <h4 className='info-header'>Commands:</h4>
  <p className='info-block'>
    <span className='command-name'>forward [n]:</span> Move turtle n pixels forward
  </p>
  <p className='info-block'>
    <span className='command-name'>back [n]:</span> Move turtle n pixels backwards
  </p>
  <p className='info-block'>
    <span className='command-name'>right [n]:</span> Turn turtle n degrees right
  </p>
  <p className='info-block'>
    <span className='command-name'>left [n]:</span> Turn turtle n degrees left
  </p>
  <p className='info-block'>
    <span className='command-name'>clear:</span> Reset screen
  </p>
  <p className='info-block'>
    <span className='command-name'>penup:</span> Turtle will move without drawing
  </p>
  <p className='info-block'>
    <span className='command-name'>pendown:</span> Turtle will draw when it moves
  </p>
  <p className='info-block'>
    <span className='command-name'>loop [n] &#123;[commands]&#125;:</span> Loop through commands n times.
    <br/>eg. <code>loop 4 &#123;forward 100 right 90&#125;</code>
  </p>
  <h4 className='info-header'>Links:</h4>
  <p className='info-block'>This app is a simplified version of LOGO's&nbsp;
  <a
    href="https://en.wikipedia.org/wiki/Turtle_graphics"
    target="_blank"
  >
    turtle graphics
  </a></p>
  <p className='info-block'>Check out a more complete interpreter&nbsp;
    <a
      href="https://www.calormen.com/jslogo/#"
      target="_blank"
    >
    here!
  </a></p>
  <h4 className='info-header'>Shortcuts:</h4>
  <p className='info-block'>
    <span className='command-name'>fd:</span> forward<br/>
    <span className='command-name'>bk:</span> back<br/>
    <span className='command-name'>rt:</span> rt<br/>
    <span className='command-name'>lt:</span> left<br/>
    <span className='command-name'>clr:</span> clear<br/>
    <span className='command-name'>pu:</span> penup<br/>
    <span className='command-name'>pd:</span> pendown<br/>
    <span className='command-name'>lp:</span> loop<br/>
  </p>
  </>);
}

export default Directions;