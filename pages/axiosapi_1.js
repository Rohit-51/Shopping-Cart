
import axios from 'axios';
import React, {useState, useEffect } from 'react';

const pokemon = () => {
    const [num,setNum]= useState(1);

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`);
            console.log(res)
        }
        getData();
    },[num]);

    return(
        <>
        <h1>you choose{num} value</h1>
        <select value = {num} onChange = {(e) => {setNum (e.target.value)}}>
            <option value = '1'>1</option>
            <option value = '2'>2</option>
            <option value = '3'>3</option>
            <option value = '4'>4</option>
            <option value = '5'>5</option>
        </select>
        </>
    )
}

export default pokemon;