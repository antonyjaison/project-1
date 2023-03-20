import "./Loading.css";

const Loading = () => {
    return (
        <div className="loading">
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
