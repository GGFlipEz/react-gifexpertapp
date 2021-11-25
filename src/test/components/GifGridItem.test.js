import React  from "react";
import { GifGridItem } from "../../components/GifGridItem";
import { shallow, configure } from 'enzyme';



describe ('Pruebas en <GifGridItem />', () => {

    const title = 'Test';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title= {title} url= {url} /> )

    test('debe mostrar el componente correctamente ', () => {

        
        expect( wrapper ).toMatchSnapshot();

    })


    test('debe tener un párrafo con el title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })

    test('debe de tener la imagen igual al url y alt de los props ', () => {
        
        const  img = wrapper.find('img');
        // console.log( img.props() ) ;
        // console.log( img.props().src ) ;
        // console.log( img.props().alt ) ;
        expect( img.props().src ).toBe( url );
        expect( img.props().alt ).toBe( title );
        

    })

    test('Debe tener animate_fadeIn', () => {
        const div = wrapper.find('div');
        //animate_fadeIn
        //console.log( div.props('className') );
        const className = div.props().className;
        expect( className.includes('animate_fadeIn') ).toBe( true );


    })



})