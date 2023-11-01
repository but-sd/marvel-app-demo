const { getCharacters, getCharacterById } = require('./character-api');
const fs = require('fs');

describe('character-api', () => {
  const expected = JSON.parse(fs.readFileSync('src/data/characters.json', 'utf8'));

  describe('getCharacters', () => {
    test('returns an array of characters sorted by default', () => {
      // when

      // then
      const characters = getCharacters();

      // expect an array of characters with the same length as the expected array
      expect(Array.isArray(characters)).toBe(true);
      expect(characters.length).toBe(expected.length);

      // expect the characters to be sorted by name, so that the first character is Beast
      expect(characters[0].name).toBe('Beast');

      // expect the characters to be sorted by name, so that the last character is Zzzax
      expect(characters[characters.length - 1].name).toBe('Wolverine');
    });


    test('returns an array of characters sorted by name in ascending order', () => {
      // when

      // then
      const characters = getCharacters('name', 'asc');

      // expect an array of characters with the same length as the expected array
      expect(Array.isArray(characters)).toBe(true);
      expect(characters.length).toBe(expected.length);

      // expect the characters to be sorted by name, so that the first character is Beast
      expect(characters[0].name).toBe('Beast');

      // expect the characters to be sorted by name, so that the last character is Zzzax
      expect(characters[characters.length - 1].name).toBe('Wolverine');
    });

    test('returns an array of characters sorted by name in descending order', () => {
      // when

      // then
      const characters = getCharacters('name', 'desc');

      // expect an array of characters with the same length as the expected array
      expect(Array.isArray(characters)).toBe(true);
      expect(characters.length).toBe(expected.length);

      // expect the characters to be sorted by name, so that the first character is Beast
      expect(characters[0].name).toBe('Wolverine');

      // expect the characters to be sorted by name, so that the last character is Zzzax
      expect(characters[characters.length - 1].name).toBe('Beast');
    });

    test('returns an array of characters sorted by modified in ascending order', () => {
      // when

      // then
      const characters = getCharacters('modified', 'asc');

      // expect an array of characters with the same length as the expected array
      expect(Array.isArray(characters)).toBe(true);
      expect(characters.length).toBe(expected.length);

      // expect the characters to be sorted by modified, so that the first character is Beast
      expect(characters[0].name).toBe('Groot');

      // expect the characters to be sorted by modified, so that the last character is Zzzax
      expect(characters[characters.length - 1].name).toBe('Hulk');
    });

    test('returns an array of characters sorted by modified in descending order', () => {
      // when

      // then
      const characters = getCharacters('modified', 'desc');

      // expect an array of characters with the same length as the expected array
      expect(Array.isArray(characters)).toBe(true);
      expect(characters.length).toBe(expected.length);

      // expect the characters to be sorted by modified, so that the first character is Beast
      expect(characters[0].name).toBe('Hulk');

      // expect the characters to be sorted by modified, so that the last character is Zzzax
      expect(characters[characters.length - 1].name).toBe('Groot');
    });

    test('throws an error if orderBy is not name or modified', () => {
      expect(() => {
        getCharacters('foo');
      }).toThrow(`Parameter orderBy must be a string ('name' or 'modified'), but it was string foo`);
    });

    test('throws an error if order is not asc or desc', () => {
      expect(() => {
        getCharacters('name', 'foo');
      }).toThrow(`Parameter order must be a string ('asc' or 'desc'), but it was string foo`);
    });

  });

  describe('getCharacterById', () => {
    test('returns the character with the given id when id is a string', () => {
      // when
      const id = "1009663";
      const name = "Thor";

      // then
      const character = getCharacterById(id);

      // expect
      expect(character.id).toBe(id);
      expect(character.name).toBe(name);
    });

    test('returns the character with the given id when id is a number', () => {
      // when
      const id = 1009663;
      const name = "Thor";

      // then
      const character = getCharacterById(id);

      // expect
      expect(character.id).toBe(id.toString());
      expect(character.name).toBe(name);
    });

    test('throws an error if id is not provided', () => {
      expect(() => {
        getCharacterById();
      }).toThrow(`Parameter id must be a number or a string, but it was undefined`);
    });

    test('throws an error if id is not a number or a string', () => {
      expect(() => {
        getCharacterById({});
      }).toThrow(`Parameter id must be a number or a string, but it was object`);
    });

    test('throws an error if character with given id is not found', () => {
      const id = 999;
      expect(() => {
        getCharacterById(id);
      }).toThrow(`Character with id ${id} not found`);
    });
  });
});