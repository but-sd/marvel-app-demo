import { render, screen } from "@testing-library/react";
import CharacterDetailPage from "./CharacterDetailPage";

const character = {
    id: "1",
    name: "Thor",
    description: "Thor...",
    modified: "2021-08-19T16:37:54-0400",
};

// mock the useLoaderData hook, so that we can test the CharactersPage component
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'), // use actual for all non-hook parts
    useLoaderData: () => {
        return character;
    },
}));

describe('CharacterDetailPage', () => {
    test('render CharacterDetailPage component', () => {
        // when

        // then
        render(<CharacterDetailPage />);

        // expect the document title to be "Thor | Marvel App"
        expect(document.title).toBe(`${character.name} | Marvel App`);

        // expect the heading 'Thor' to be in the document
        const h2Element = screen.getByRole('heading', { level: 2, name: character.name });
        expect(h2Element).toBeInTheDocument();

        // expect the character description to be in the document
        const descriptionElement = screen.getByText(character.description);
        expect(descriptionElement).toBeInTheDocument();

        // expect the character modified date to be in the document
        const modifiedElement = screen.getByText(character.modified);
        expect(modifiedElement).toBeInTheDocument();
    });
});