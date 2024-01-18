import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

function MyApp(){
    return(
        <div>
            <h1>this is function </h1>
        </div>
    )
}
const reactElement = {
    type: 'a',
    props: {
        href :'https://google.com',
        target: '_blank'
    },
    children:'click me to  visit google'
}


const myReactElement = (
    <a href="https://google.com " target = '_blank '> visit google</a>
)

const customReact = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit google '
)

ReactDOM.createRoot(document.getElementById('root')).render(
    

    myReactElement
    // customReact,
    // reactElement


    // <App/>,
    // <Chai/>,
    // <MyApp />,
  
)
