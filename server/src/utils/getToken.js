

export const getReqToken = (req) => {
    return req.headers['authorization']?.split(' ')[1];
}

