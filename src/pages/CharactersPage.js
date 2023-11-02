import React, { useEffect } from 'react';
import { CharactersList } from "../components/CharactersList";
import { NumberOfCharacters } from "../components/NumberOfCharacters";

import { useLoaderData } from 'react-router';

const CharactersPage = () => {

    useEffect(() => {
        document.title = "Marvel App";
    }, []);

    // retrieve the characters using the useLoaderData hook
    const characters = useLoaderData();

    return (
        <>
            <h2>Marvel Characters</h2>
            <button onClick={() => { alert("Will sort list")}}>sort</button>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;