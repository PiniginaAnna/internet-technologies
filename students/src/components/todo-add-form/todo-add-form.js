import './todo-add-form.css';

const TodoAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add new task</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="task text" />

                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
}

export default TodoAddForm;