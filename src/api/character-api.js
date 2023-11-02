const characters = require('../data/characters.json');

/**
 * Get all characters from json file
 * @returns 
 */
function getCharacters(orderBy = 'name', order = 'asc') {
    // Validate inputs
    if (typeof orderBy !== 'string' || (orderBy !== 'name' && orderBy !== 'modified')) {
        throw new Error(`Parameter orderBy must be a string ('name' or 'modified'), but it was ${typeof orderBy} ${orderBy}`)
    }

    if (typeof order !== 'string' || (order !== 'asc' && order !== 'desc')) {
        throw new Error(`Parameter order must be a string ('asc' or 'desc'), but it was ${typeof order} ${order}`)
    }

    // Sort characters array
    characters.sort((a, b) => {
        const comparison = orderBy === 'name' ? a.name.localeCompare(b.name) : a.modified.localeCompare(b.modified);
        return order === 'asc' ? comparison : -comparison;
    });

    return characters
}

/**
 * Get character by id
 * @param {number} id 
 * @returns 
 */
function getCharacterById(id) {
    // If id is a number, convert it to string
    if (typeof id === 'number') {
        id = id.toString()
    }

    if (typeof id !== 'string') {
        throw new Error(`Parameter id must be a number or a string, but it was ${typeof id}`)
    }

    // Find character by id
    const character = characters.find((character) => character.id === id)

    // Throw error if character is not found
    if (!character) {
        throw new Error(`Character with id ${id} not found`)
    }
    return character
}

module.exports = {
    getCharacters,
    getCharacterById
}