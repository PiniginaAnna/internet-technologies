import './todo-list-item.css';
import { Component } from 'react';

    
class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            process: false,
            done: false
        };
    };

    onProcess = () => {
        this.setState(state => ({
            process: !state.process
        }));
    };

    onDone = () => {
        this.setState(state => ({
            done: !state.done
        }));
    };

    render() {
        let clsNames = 'list-group-item d-flex justify-content-between';
        if (this.state.process) {
            clsNames += ' process';
        };
        if (this.state.done) {
            clsNames += ' done';
        };
        return (
            <li className={clsNames}>
                <span className="list-group-item-label">{this.props.text}</span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-hourglass btn-sm "
                            onClick={this.onProcess}>
                            <i class="fa-solid fa-hourglass-start"></i>
                    </button>
    
                    <button type="button"
                            className="btn-circle-check btn-sm "
                            onClick={this.onDone}>
                            <i class="fa-regular fa-circle-check"></i>
                    </button>
                    
                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    };
};


export default TodoListItem;