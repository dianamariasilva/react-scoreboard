class Model {
    constructor(){
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
    this.todos = [];
    this.inputValue = null;
    this.callback = null;
    this.index = 0;
    };

  subscribe(render) {
    this.callback = render;
  }
   
  notify() {
    this.callback();
  }

  inform() {
    console.log(this.todos.map(e => e.text));
    this.render();
  }

  addPlayer(text) {
    this.todos.push({ 
        name: name, 
        score: 0 
    });
    this.inform();
  }
  
  addTodo(text) {
      this.todos.push({
         id: Utils.uuid(),
         text: text,
         completed: false
      });
      this.inform();
  }
  
  updateTodo(index, todo) {
      this.todos[index] = todo;
      this.inform();
  }
  
  removeTodo(todo) {
      this.todos = this.todos.filter(item => item !== todo);
      this.inform();
  }
}

const Header = props => {
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
      const onOptionSelect = (e) =>  {
        console.log('value: ', option);
        model.addPlayer(option, index);
     };
      return(
        <div>
          <div key={position}>
            <div className="player">
              <div className="player-name">{value.name}</div>
              <div className="player-score counter">
                <div onClick = {onOptionSelect} className="counter-action decrement">-</div>
                <div className="counter-score">{value.score}</div>
                <div className="counter-action increment">+</div>
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
      <form action="">
        <input type="text" placeholder="Enter a name"></input>
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
ReactDOM.render(<Application title="Scoreboard" players = {model.PLAYERS}/>, document.getElementById('container'));
model.subscribe(render);
render();