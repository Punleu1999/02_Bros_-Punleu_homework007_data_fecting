
export async function getAllMovies(){
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api');
    const data = await res.json();
    console.log("data: ",data);
    return data; 
}

// get by getallMovie
export const getActinMovie = async (genre) =>{
    const req = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`);
    const data = await req.json();
    return data;
}

export const getADramaMovie = async (genre) =>{
    const req = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`);
    const data = await req.json();
    return data;
}

// export const getCrimeMovie = async (genre) =>{
//     const req = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`);
//     const data = await req.json();
//     return data;
// }


