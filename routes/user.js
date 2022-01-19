module.exports = (app) =>{
    const user = require('../controller/user');

    app.post('/signUp',user.signUp);
    app.get('/signIn',user.signIn);
}