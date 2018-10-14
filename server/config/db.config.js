// Define your configurations
import mongoose from 'mongoose'
mongoose.Promise = global.Promise
export default startDB = ({ user, pwd, url, db }) => mongoose.connect(`mongodb://${user}:${pwd}@${url}/${db}`, { useNewUrlParser: true })