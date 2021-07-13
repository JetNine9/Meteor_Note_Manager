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


Template.add.events({
    'submit .add-form': function(){
        event.preventDefault();

        const target = event.target
        const text = target.text.value 

        // Insert Note to collection mongodb 
        Notes.insert({
            text: text, 
            createdAt: new Date()
        })

        target.text.value = ""
        $("addModal").modal("close");
        return false
    }
})