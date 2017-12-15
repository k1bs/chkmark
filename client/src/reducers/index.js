import { combineReducers } from 'redux'
import notes from './notes'
import user from './user'
import fetchingNotes from './fetching-notes'
import editMode from './edit-mode'
import currentNote from './current-note'
import view from './view'

const chkmarkApp = combineReducers({
  notes,
  user,
  fetchingNotes,
  editMode,
  currentNote,
  view
})

export default chkmarkApp
