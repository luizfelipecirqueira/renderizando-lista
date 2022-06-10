import { Pessoa } from "./components/Pessoa";

const App = () => {
  
  let list = [
    {name:'Luiz', age: 28},
    {name:'Felipe', age: 30},
    {name:'Pedro', age: 25},
    {name:'Samantha', age: 35},
    {name:'João', age: 18}
  ];
  
  
  return (
    <div>
      <h2>Lista de Presença</h2>
      <ul>
        {
          list.map((item, index) => (
            <Pessoa key={index} data={item} />
          ))
        }  
      </ul>    
    </div>
  );
}

export default App;
