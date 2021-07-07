import { Template } from 'meteor/templating';
import './main.html';
import m from 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import {Notes} from '../lib/collections'

Template.body.helpers({
    notes() {
        return Notes.find({})
    }
})
