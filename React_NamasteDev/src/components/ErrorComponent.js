//try out rafce
import { useRouteError } from 'react-router-dom';

const ErrorComponent = () => {
    const errorData = useRouteError()

    return (
        <div>
            <h1>Oops!</h1>
            <h2>Something went wrong!</h2>
            <h3>Details : {errorData.statusText || errorData.message}</h3>
        </div>
    )
}

export default ErrorComponent;

