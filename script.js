var survey_options = document.getElementById('gobeli_orders');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');
var item_field = document.getElementById('item_field');

add_more_fields.onclick = function(){
    var newField = document.createElement('item_field');
    newField.setAttribute('type','text');
    newField.setAttribute('name','gobeli_orders[]');
    newField.setAttribute('class','gobeli_orders');
    newField.setAttribute('siz',50);
    newField.setAttribute('placeholder','Another Field');
    survey_options.appendChild(newField);
}

remove_fields.onclick = function(){
    var item_field_tags = survey_options.getElementsByTagName('item_field');
    if(item_field_tags.length > 2) {
        survey_options.removeChild(item_field_tags[(item_field_tags.length) - 1]);
    }
}