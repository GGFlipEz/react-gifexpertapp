
export const getGifs = async( category ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=r9t1N4GAId9VYsxzgGAUuTkEgcNuo9zD`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    //Creando un nuevo objeto de otro objeto. La response es demasiada data, filtramos la data que utlizaremos.
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}   