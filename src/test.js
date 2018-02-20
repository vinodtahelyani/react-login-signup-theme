var fetch =  require('isomorphic-fetch');

var data={
    email:'bawc@abc.com',
    password:'password'
};

     fetch('https://nodejstodoapi.herokuapp.com/user/signin', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log(res);
        
    }).catch(err => console.log(err)
    );
