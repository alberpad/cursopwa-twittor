"use strict";
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js');
}
let titulo = $('#titulo');
let nuevoBtn = $('#nuevo-btn');
let salirBtn = $('#salir-btn');
let cancelarBtn = $('#cancel-btn');
let postBtn = $('#post-btn');
let avatarSel = $('#seleccion');
let timeline = $('#timeline');
let modal = $('#modal');
let modalAvatar = $('#modal-avatar');
let avatarBtns = $('.seleccion-avatar');
let txtMensaje = $('#txtMensaje');
let usuario;
function crearMensajeHTML(mensaje, personaje) {
    let content = `
    <li class="animated fadeIn fast">
        <div class="avatar">
            <img src="img/avatars/${personaje}.jpg">
        </div>
        <div class="bubble-container">
            <div class="bubble">
                <h3>@${personaje}</h3>
                <br/>
                ${mensaje}
            </div>
            
            <div class="arrow"></div>
        </div>
    </li>
    `;
    timeline.prepend(content);
    cancelarBtn.click();
}
function logIn(ingreso) {
    if (ingreso) {
        nuevoBtn.removeClass('oculto');
        salirBtn.removeClass('oculto');
        timeline.removeClass('oculto');
        avatarSel.addClass('oculto');
        modalAvatar.attr('src', 'img/avatars/' + usuario + '.jpg');
    }
    else {
        nuevoBtn.addClass('oculto');
        salirBtn.addClass('oculto');
        timeline.addClass('oculto');
        avatarSel.removeClass('oculto');
        titulo.text('Seleccione Personaje');
    }
}
avatarBtns.on('click', function () {
    usuario = $(this).data('user');
    titulo.text('@' + usuario);
    logIn(true);
});
salirBtn.on('click', function () {
    logIn(false);
});
nuevoBtn.on('click', function () {
    modal.removeClass('oculto');
    modal.animate({
        marginTop: '-=1000px',
        opacity: 1
    }, 200);
});
cancelarBtn.on('click', function () {
    modal.animate({
        marginTop: '+=1000px',
        opacity: 0
    }, 200, function () {
        modal.addClass('oculto');
        txtMensaje.val('');
    });
});
postBtn.on('click', function () {
    let mensaje = txtMensaje.val();
    if (mensaje.length === 0) {
        cancelarBtn.click();
        return;
    }
    crearMensajeHTML(mensaje, usuario);
});
//# sourceMappingURL=app.js.map