import {useState, useEffect } from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client';

const { REACT_APP_SPACE_ID: SPACE_ID, REACT_APP_ACCESS_TOKEN: ACCESS_TOKEN } = process.env;

function useContentful(query){
    let [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        window
        .fetch(
            `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
                body: JSON.stringify({ query })
            }
        )
        .then((response) => response.json())
        .then(({data, errors}) => {
            if (errors) setErrors(errors);
            if (data) setData(data);
        })
    }, [query])


return {data}
    
}

export default useContentful