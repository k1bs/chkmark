import React from 'react'

const HowTo = () => {
  return (
    <div className='howto-container'>
      <h1>Using chk(mark)</h1>
      <p>Markdown isn't just for READMEs anymore!</p>
      <p>Take the Markdown you already know and use to to make your notes come to life.</p>
      <p><a href='https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet%C3%82'>Markdown</a> allows you to use Headers, insert codeblocks, emphasize and embolden text, and include images inline.</p>
      <p>Simply click the <code>+</code> icon to create a new note, then use Markdown to style your new note as you wish!</p>
      <h1>For Example</h1>
      <p>For instance, entering something like:</p>
      <pre><code>[I'm a link](www.google.com)</code></pre>
      <p>Gives you something like this:</p>
      <a href='https://www.google.com' rel='nofollow'>I'm a link</a><br />
      <p>Happy hacking!</p>
    </div>
  )
}

export default HowTo
