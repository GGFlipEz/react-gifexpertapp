import { getGifs } from '../../helpers/GetGifs';

describe('Pruebas del Helpers getGifs', () => {

    test('debe de traer 10 elementos', async() => {

        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 10 );

    })

    test('debe de traer 10 elementos', async() => {

        const gifs = await getGifs('');
        
        expect( gifs.length ).toBe( 0 );

    })

})