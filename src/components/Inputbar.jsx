import React, { useState } from 'react';
import { Send } from '@material-ui/icons';
import axios from 'axios';

const Inputbar = () => {

    // default method is get
    const [method, setMethod] = useState('get');

    // data for post put and delete
    const [data, setData] = useState('');

    // response from the api
    const [response, setResponse] = useState([])

    // the url to which the request is sent
    const [url, setUrl] = useState('');


    // handle request sends a http request and send back and repsonse
    const handleRequest = async (e) => {
        e.preventDefault();
        
        if (method === 'get') {
            const res = await axios.get(url)
            setResponse(res);
            console.log(JSON.stringify(response))
        }
        else if (method === 'post') {
            setResponse(await axios.post(url, data))
            console.log(response)
        }
        else if (method === 'post') {
            setResponse(await axios.put(url, data))
            console.log(response)
        }
        else if (method === 'post') {
            setResponse(await axios.delete(url, data))
            console.log(response)
        }

    }


    return (
        <div className='d-flex flex-column mt-5'>

            {/* method selector */}

            <div className="d-flex align-items-center justify-content-center flex-wrap">
                <button className='btn btn-primary mx-1' onClick = {(e) => setMethod(e.currentTarget.innerText)}>get</button>
                <button className='btn btn-warning mx-1' onClick = {(e) => setMethod(e.currentTarget.innerText)}>post</button>
                <button className='btn btn-success mx-1' onClick = {(e) => setMethod(e.currentTarget.innerText)}>put</button>
                <button className='btn btn-danger mx-1' onClick = {(e) => setMethod(e.currentTarget.innerText)}>delete</button>
            </div>

            {/* form */}
            <form className='d-flex w-100 justify-content-center mt-5' onSubmit = {handleRequest}>

                <input type="text" className='form-control w-50' value = {url} onChange = {e => setUrl(e.target.value)} />

                <button type="submit" className='btn btn-primary d-flex align-items-center justify-content-center'>
                    <div>Send</div>
                    <Send fontSize='small' className='mx-1'/>
                </button>
            </form>


            <h2 className='m-4'>Result:</h2>


            <div className="mx-4 p-3" style = {{border: '1px solid rgb(200, 200, 200)', borderRadius: '1em', background: 'rgb(247, 247, 247)'}}>
                {JSON.stringify(response)}
            </div>
            
            
            
        </div>
    )
}

export default Inputbar
