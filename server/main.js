import { Meteor } from 'meteor/meteor';
import {Notes} from '../lib/collections'

const insertTask = taskText => Notes.insert({ text: taskText });



Meteor.startup(() => {
  if (Notes.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertTask)
  }
});
