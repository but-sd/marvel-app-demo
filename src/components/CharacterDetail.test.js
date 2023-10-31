// import { render, screen } from '@testing-library/react';
// import CharacterDetail from './CharacterDetail';

import { render, screen } from "@testing-library/react";
import CharacterDetail from "./CharacterDetail";

describe('CharactersDetail', () => {
    it('renders a the character detail', () => {
        // when
        const character = {
            id: "1",
            name: "Thor",
            description: "Thor...",
            modified: "2021-08-19T16:37:54-0400",
            thumbnail: {
                path: "http://i.annihil.us/u/prod/marvel/i/mg/c/90/537bb1f32a831",
                extension: "jpg"
            }
        };

        // then
        render(<CharacterDetail character={character} />);

        // expect the heading 'Thor' to be in the document
        const h2Element = screen.getByRole('heading', { level: 2, name: character.name });
        expect(h2Element).toBeInTheDocument();


        // expect the character image to be in the document
        const imageElement = screen.getByRole('img', { name: character.name });
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', `${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`);

        // expect the character description to be in the document
        const descriptionElement = screen.getByText(character.description);
        expect(descriptionElement).toBeInTheDocument();

        // expect the character modified date to be in the document
        const modifiedElement = screen.getByText(character.modified);
        expect(modifiedElement).toBeInTheDocument();
    });

    it('renders a the character detail without an image', () => {
        // when
        const character = {
            id: "1",
            name: "Thor",
            description: "Thor...",
            modified: "2021-08-19T16:37:54-0400",
        };

        // then
        render(<CharacterDetail character={character} />);

        // expect the heading 'Thor' to be in the document
        const h2Element = screen.getByRole('heading', { level: 2, name: character.name });
        expect(h2Element).toBeInTheDocument();

        // expect the character description to be in the document
        const descriptionElement = screen.getByText(character.description);

        // expect the character modified date to be in the document
        const modifiedElement = screen.getByText(character.modified);
    });

    it('renders a the character detail without a character', () => {
        // when

        // then
        render(<CharacterDetail />);
        
        // expect to render an empty heading
        const h2Element = screen.getByRole('heading', { level: 2 });
        expect(h2Element).toBeInTheDocument();
        expect(h2Element).toBeEmptyDOMElement();
    });
});
  