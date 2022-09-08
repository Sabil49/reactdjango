export default class APIService{
    static RegisterUser(body){
        return fetch('http://127.0.0.1:8000/djangoreact/register/',{
            'method':'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Token 8247828076c88f5c0b1b61e0f9b55d7c1c1fcdf5'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static LoginUser(body){
        return fetch('http://127.0.0.1:8000/auth/',{
            'method':'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static Otpverify(body){
        return fetch('http://127.0.0.1:8000/djangoreact/VerifyOtp/',{
            'method':'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Token 8247828076c88f5c0b1b61e0f9b55d7c1c1fcdf5'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static ResendOtp(body, token){
        return fetch('http://127.0.0.1:8000/djangoreact/resendotp/',{
            'method':'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }
}



