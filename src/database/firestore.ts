import firebase from 'database/firebase-config'
import { collectionLabels } from 'utils'

const firestore = firebase.firestore()

const userDBRef = firestore.collection(collectionLabels.USERS)

export { userDBRef }
