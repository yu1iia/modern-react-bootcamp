// random mood component

// function getMood() {
//     const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
//     return moods[Math.floor(Math.random() * moods.length)];
// }
// class JSXDemo extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>My current mood is: {getMood()}</h1>
//             </div>
//         );
// }
// }

// ReactDOM.render(<JSXDemo/>, document.getElementById('root'))

//number picker component
function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num === 7) {
            msg = <div>
                <h2>CONGRATS!</h2>
            </div>
        }
        else {
            msg = <p>Sorry you lose!</p>
        }
           
        return (
            <div>
                <h1>Your number is...{num}</h1>
                {msg}
            </div>
        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
