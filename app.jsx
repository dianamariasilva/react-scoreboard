class Model {
  constructor () {
    this.PLAYERS = [
      {
        name: "Jim Hoskins",
        score: 31,
        id: 1,
      },
        {
        name: "Andree Hoskins",
        score: 35,
        id: 2,
      },
        {
        name: "Alena Hoskins",
        score: 42,
        id: 3,
      },
    ];
    this.inputValue = null;
    this.todos = [];
    this.render = undefined;
  }

  subscribe(render) {
    this.render = render;
  }
  
  inform() {
    console.log(this.todos.map(e => e.text));
    this.render();
  }

  onScoreChange (index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  updateTodo (index, todo) {
    this.todos[index] = todo;
    this.inform();
  }

  onAddPlayer (name) {
    this.state.players.push({ name: name, score: 0 });
    this.setState(this.state);
  }

  onRemovePlayer (index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  },
}


const Header = ({model}) => {
  return(
    <div className="header">
    <table>
      <tbody>
      <tr>
        <td>
          <p>PLAYERS:{props.players.length}</p>
          <p>TOTAL POINTS: {props.score}</p>
        </td>
      </tr>
      </tbody>
    </table>
    <h1> Scoreboard</h1>
    <div className="stopwatch">
        <h2>STOPWHATCH</h2>
        <p className="stopwatch-time">0</p>
        <button className="">START</button>
        <button>RESET</button>
    </div>
    </div>
  )
}

function divList(list){
  return(
    list.map((value, position) =>{
      const add = (e) =>  {
        console.log('value: ', option);
        model.addTodo(text);
     };
  
      return(
        <div>
          <div key={position}>
            <div className="player">
              <div className="player-name">{value.name}</div>
              <div className="player-score counter">
                <button onClick = {add} className="counter-action decrement">-</button>
                <div className="counter-score">{value.score}</div>
                <button className="counter-action increment">+</button>
              </div>
            </div>
          </div>
        </div>
      )
    })
  )
}

const PlayerList = props => {
  return(
    <div>  
      {divList(props.players)}
    </div>
  )
}

const PlayerForm = props => {
  return(
    <div className="add-player-form">
      <form action=""
        onSubmit={e => {
            e.preventDefault();
            model.addTodo(model.inputValue);
        }}
      >
        <input 
           onChange={e => (model.inputValue = e.target.value)} 
           type="text" 
           placeholder="Enter a name"
           value =
           ></input>
        <input type="submit" value="ADD PLAYER"></input>
      </form>
    </div>
  )
}

const Application = ({title, players}) => {
   return (
     <div className ="scoreboard">
      <Header className="header" players={players}/>
      <PlayerList className="stats" players={players}/>
      <PlayerForm />
      </div>      
   ) ;
}

let model = new Model();
let counter = 1;

ReactDOM.render(<Application title="Scoreboard" players = {PLAYERS}/>, document.getElementById('container'));