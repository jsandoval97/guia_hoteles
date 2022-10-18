$(function(){
    $("[data-toggle='tootltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 1700
    });
    $('#reservar').on('show.bs.modal', function(e){
        console.log('el modal se está mostrando');

        $('#btn-reservar').removeClass('btn-dark');
        $('#btn-reservar').addClass('btn-secondary');
        $('#btn-reservar').prop('disabled', true);
        
    });
    $('#reservar').on('shown.bs.modal', function(e){
        console.log('el modal se mostró');
    });
    $('#reservar').on('hide.bs.modal', function(e){
        console.log('el modal se está ocultando');
    });
    $('#reservar').on('hidden.bs.modal', function(e){
        console.log('el modal se ocultó');
        $('#btn-reservar').prop('disabled', false);
        $('#btn-reservar').removeClass('btn-secondary');
        $('#btn-reservar').addClass('btn-dark');
    });
});