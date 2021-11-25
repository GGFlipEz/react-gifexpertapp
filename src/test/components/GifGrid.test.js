import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas del componente GifGrid', () => {

    const category = 'One Punch';

    test('debe de mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        const wrapper = shallow( <GifGrid category = { category }/> );
        expect( wrapper ).toMatchSnapshot();

    })

    test('debe mostrar items cuandos e cargan las imágenes useFetchGifs', () => {
        const gifs = [{
            id:'1',
            url:'test.com',
            title: 'ccaasda'
        },
        {
            id:'2',
            url:'test.com',
            title: 'ccaasda'
        }]
        
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });

        const wrapper = shallow( <GifGrid category={ category } />);

        //expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
        
    })


})