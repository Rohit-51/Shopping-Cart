import React, { useEffect } from 'react'

const FetchApi = () => {
    useEffect(() => {
        const apiCall = async () => {
            let result = await fetch('https://jsonplaceholder.typicode.com/users');
            let detail = await result.json();
            console.log(detail);
        }
        apiCall();
    }, []);

    return (
        <div>
            hello
        </div>
    )
}
export default FetchApi;
