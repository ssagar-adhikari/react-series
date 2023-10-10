import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

function MyApp() {
  return (
    <div>
      <h1>Custom App / Learn</h1>
    </div>
  );
}
// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'hhtps://google.com',
//     target: '_blank',
//   },
//   children: 'Click Me to visit google',
// };
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
)
const anotherUser = 'sagar adhiakri';
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // MyApp()
  <App/>
  // reactElement
  // anotherElement
);
