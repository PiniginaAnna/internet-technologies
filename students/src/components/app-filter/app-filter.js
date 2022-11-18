import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                    All tasks
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    In process
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    DONE
            </button>
        </div>
    )
}

export default AppFilter;