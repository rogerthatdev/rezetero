function verifyRezeta(): boolean {
    // verify by retrieving schema from api server

    // send get request to apiserver/schema
    return true;
}

export function rezetero(data: string): object {

    if (!verifyRezeta()) {
        return { status: "error", message: "Rezetero not verified" };
    }
    // use langchain to do stuff
    
    return { status: "success", message: "Rezetero verified", data: data};
}

