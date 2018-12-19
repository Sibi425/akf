const AuthenticationController = require('./Controllers/AuthenticationController')
const FishDataController = require('./Controllers/FishDataController')

module.exports = (app) => {
    app.post('/register', AuthenticationController.register)
    app.get('/FishTable', FishDataController.getFishData)
}
