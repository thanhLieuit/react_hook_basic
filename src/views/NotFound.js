import { useHistory } from "react-router-dom";
const NotFound = () => {
    let history = useHistory();
    const handleButtonGoHome = () => {
        history.push('/')
    }
    return (
        <div className="Not-found">
            <h1>404 !</h1>
            <button className="btn btn-primary" onClick={handleButtonGoHome}>Go to Home</button>
        </div>
    )
}

export default NotFound;