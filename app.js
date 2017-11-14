function addElement(s) {
    var el = $('<li><span></span> <button class="delete-button">Удалить</button></li>');
    $('span', el).text(s);
    $('#root ul').append(el);
    $('.delete-button', el).click(function(ev){$(this).parent().remove()});
}

$(function(){
    i = 1;
    $('#root').append('<ul></ul>');
    $('#root').append('<input id="add_task_input"> <button id="add_task">Добавить</button>');
    $('#add_task').click(function(){if (i == 1){addElement('Сделать задание #3 по web-программированию');} else {addElement($('#add_task_input').val())} ++i;});
    
})
