// const react = React.createElement('h1',{ id:'heading'},"hello react")
// console.log(react)
//  const reactroot = ReactDOM.createRoot(document.getElementById('root'))
//  reactroot.render(react)

 //how the structure create  inside the  react.

//  <div id="parent">
//     <div id=çhild>
//     <h1>I am h1 tag</h1>
//     </div>


//  </div>


const parent = React.createElement('div', {id:'parent'}, 
 [
    React.createElement('div', {id:'child'},
   [React.createElement('h1',{id:'h1'},"i am h1 tag",)
   ,React.createElement('h1',{id:'h1'},"i am h2 tag",)]),
   React.createElement('div', {id:'child2'},
   [React.createElement('h1',{id:'h1'},"i am h1 tag",)
   ,React.createElement('h1',{id:'h1'},"i am h2 tag",)])
 ])

const reactroot = ReactDOM.createRoot(document.getElementById('root'))
reactroot.render(parent)
console.log(parent)