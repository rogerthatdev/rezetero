const REZETA_API_SERVER = "http://localhost:8000"

/**
 * Fetches the latest schema from the REZETA API server.
 *
 * @returns {Promise<object>} A promise that resolves to the latest schema object.
 */
async function getLatestSchema(): Promise<object> {
    const response = await fetch(REZETA_API_SERVER + "/schema");
    const schema = await response.json();
    return schema;
}

/**
 * Transforms the provided string data into a Rezeta representation.
 *
 * @returns {Promise<object>} A promise that resolves a Rezeta represention of the provided string data
 */
export async function rezetero(data: string): object {   
    // use langchain to do stuff

    // add getLatestSchema() tool


    // add tool for parsing recipe data


    // use langchain to transform text into json

    
    console.log(`rezertero: ${data}`);
    const placeHolder = await getLatestSchema();
    return placeHolder;
}

