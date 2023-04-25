import jwt from 'jsonwebtoken'


export default (request, response, next) => {
    const authToken = request.headers.authorization

    if(!authToken){
        return response.status(401).json({error: 'Token not provided'})
    }


    const token = authToken.split(' ')[1]

    try{

        jwt.verify(token, authConfig.secret, function(err, decoded){
            if(err){
                throw new Error()
            }

        
        })
    }catch(err){

    }

    console.log(token)
    return next()

}