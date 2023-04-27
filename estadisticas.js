$(document).ready(function () {
    $('#myTable').DataTable({
        "destroy": true,
        "language": {
            url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json'

        },
        "paging": true,
        "ordering": false,
        "searching": false,
        "info": false,
        "autoWidth": true,
        "dom": "Bfrtip",
        "buttons": [{
            extend: 'excel',
            filename: 'Detalle'
        }],
    });


});
function suma() {
        
    var total1 = document.getElementById('almendra').getAttribute('value')
    var totalnum1 = parseInt(total1)

    var total2 = document.getElementById('papaprefrita').getAttribute('value')
    var totalnum2 = parseInt(total2)

    var total3 = document.getElementById('carne1').getAttribute('value')
    var totalnum3 = parseInt(total3)


    var total4 = document.getElementById('papas').getAttribute('value')
    var totalnum4 = parseInt(total4)


    var total5 = document.getElementById('tomate').getAttribute('value')
    var totalnum5 = parseInt(total5)

    var total6 = document.getElementById('mani').getAttribute('value')
    var totalnum6 = parseInt(total6)

    var total7 = document.getElementById('repollo').getAttribute('value')
    var totalnum7 = parseInt(total7)

    var total8 = document.getElementById('zanahoria').getAttribute('value')
    var totalnum8 = parseInt(total8)

    var total9 = document.getElementById('carne2').getAttribute('value')
    var totalnum9 = parseInt(total9)

    var total10 = document.getElementById('manzana').getAttribute('value')
    var totalnum10 = parseInt(total10)

    var total11 = document.getElementById('agua').getAttribute('value')
    var totalnum11 = parseInt(total11)

    var total12 = document.getElementById('lechuga').getAttribute('value')
    var totalnum12 = parseInt(total12)

    var total = totalnum1 + totalnum2 + totalnum3 + totalnum4 + totalnum5+ totalnum6+ totalnum7+ totalnum8+ totalnum9+ totalnum10+ totalnum11+ totalnum12;

    alert("El total es "+total)
}
