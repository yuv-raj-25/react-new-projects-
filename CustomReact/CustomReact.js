function customRender(reactElement , mainconatiner){
    /*
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML  = reactElement.children

    domElement.setAttribute('herf',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    // conatainer.appendChild(domElement);
    mainConatiner.appendChild(domElement);

    */

    const domElement =  document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    
    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
        
        
    }

    mainConatiner.appendChild(domElement)


    
}

const reactElement = {
    type: 'a',
    props: {
        href :'https://google.com',
        target: '_blank'
    },
    children:'click me to  visit google'
}


const mainConatiner =document.querySelector('#root');

customRender(reactElement, mainConatiner)
