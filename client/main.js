import { Template } from 'meteor/templating';
import './main.html';
import m from 'materialize-css'
import 'materialize-css/dist/css/materialize.css'


Template.body.helpers({
    notes:[
        {text: 'My note 1'},
        {text: 'My note 2'},
        {text: 'My note 3'},
    ]
})
