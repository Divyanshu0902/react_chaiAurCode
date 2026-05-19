// for injecting anything in DOM, React looks at eveything as an Object
// It injects an object and then looks for what attributes to inject.
// So for our Custom React we are going to follow the same.


const reactElement = {
    type: 'a',     // it tells react what type of element it is- i.e. div/p/h1 etc.
    props: {
        href: 'http://www.wikipedia.com',
        target: '_blank',
    },
    children: 'Click me to visit Wikipedia',
}

function customRender(reactElement, mainContainer){
/*
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;
    domElement.href = reactElement.props.href;
    domElement.target = reactElement.props.target;

    mainContainer.appendChild(domElement);
*/

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    
    for (const key in reactElement.props) {
        if (key === "children") continue;
        
        domElement.setAttribute(key, reactElement.props[key]);
    }
    mainContainer.appendChild(domElement);
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);

