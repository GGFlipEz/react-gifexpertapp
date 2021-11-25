import React from 'react';
import { GifExpertApp } from '../GifExpertApp';
import { shallow } from 'enzyme';


describe('Probando GifExpertApp ' , () => {


    test('Debe mostarse Corretamente', () => {

        const wrapper = shallow(<GifExpertApp />)
        expect( wrapper ).toMatchSnapshot();
        
    })

    test('debe mostrar una lista de categorias ', () => {

        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories= { categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
        
    })
    
    

})