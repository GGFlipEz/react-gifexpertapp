import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el Hook useFecthGifs' ,  () => {

    

    test('Debe retornar el estado inicial', async() => {
        
        const {result, waitForNextUpdate} = renderHook( () => {
            useFetchGifs('One Punch');
        });
        const { data , loading } = result.current ;
        await waitForNextUpdate();
        console.log(result);
        console.log(data, loading);


        expect( data ).toEqual([]);
        expect( loading ).toBe(true);


    })


    test('debe de retornar un arreglo de iamgenes y el loading en false', () => {

        const {result, waitForNextUpdate} = renderHook( async() => {
            useFetchGifs('One Punch');
        });

        await waitForNextUpdate();

        const { data , loading } = result.current ;
        
        console.log(result);
        console.log(data, loading);


        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

    })

})