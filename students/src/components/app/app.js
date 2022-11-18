import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import TodoList from '../todo-list/todo-list';
import TodoAddForm from '../todo-add-form/todo-add-form';

import './app.css';


const data = [{text: 'homework', key: 1}, 
              {text: 'sleep', key: 2}, 
              {text: 'study', key: 3}]


function App() {
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <TodoList data={data}/>
        <TodoAddForm/>
    </div>
  );
}

export default App;