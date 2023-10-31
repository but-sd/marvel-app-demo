export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                    <a href={`/characters/${character.id}`}>
                        {character.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}
