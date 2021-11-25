import React from "react";
import '@testing-library/jest-dom';
import { AddCategory } from "../../components/AddCategory";
import { shallow } from 'enzyme';


describe('Pruebas en AddCategory', () => {
    
    const setCategories = () => jest.fn();
    let wrapper = shallow( <AddCategory setCategories= { setCategories }/>);
    
    beforeEach ( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories= {setCategories }/>);
    })


    test('debe mostrarse correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe cambiar la caja de texto ', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: {value:value}});

        expect( wrapper.find('p').text().trim() ).toBe( value );

    })

    test('No debe de postear la información on submit ',  () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
        //expect( setCategories ).toHaveBeenCalled();
    })

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';
        //1.-Simulando el inputChange
        wrapper.find('input').simulate('change', { target: {value } });
        //2.- Simulando el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        //3.- setCategories se debe de haber llamado 
        expect( setCategories ).toHaveBeenCalled();
        //expect( setCategories ).toHaveBeenCalledTimes(1);
        //expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));


        //4.- el valor del input debe de estar ''
        expect( wrapper.find('input').prop('value').toBe(''));
    })
    
    
    
})
