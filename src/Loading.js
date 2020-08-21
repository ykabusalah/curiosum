import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import "./Loading.css";

export default function Loading() {
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
            gotoNextPage()    
        }, 3000)
    }, [])
    
    const gotoNextPage = () => {
        history.push('/result')
    }

    return (
        <h1 id="loading-text">You are ... </h1>
    )
}
