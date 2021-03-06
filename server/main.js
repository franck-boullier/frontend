import { Meteor } from 'meteor/meteor'
import '../imports/api/tasks'
import '../imports/api/cases'
import '../imports/api/comments'
import '../imports/api/hooks/on-create-user'
import '../imports/api/rest/rest-routes'

const publicClientEnvVars = ['CLOUDINARY_URL', 'CLOUDINARY_PRESET']
Object.assign(Meteor.settings.public, publicClientEnvVars.reduce((obj, key) => {
  obj[key] = process.env[key]
  return obj
}, {}))

Meteor.startup(() => {
  // code to run on server at startup
})
