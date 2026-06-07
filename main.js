$(document).ready(function () {

  // ══════════════════════════════════════
  // CAROUSEL — Slick
  // ══════════════════════════════════════
  $('#carousel-imagens').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500
  });

  // ══════════════════════════════════════
  // MÁSCARAS — jQuery Mask Plugin
  // ══════════════════════════════════════
  $('#telefone').mask('(00) 00000-0000');
  $('#cpf').mask('000.000.000-00');
  $('#cep').mask('00000-000');

  // ══════════════════════════════════════
  // VALIDAÇÃO — jQuery Validate
  // ══════════════════════════════════════
  $('#form').validate({
    rules: {
      nome:     { required: true, minlength: 3 },
      email:    { required: true, email: true },
      telefone: { required: true, minlength: 15 },
      cpf:      { required: true, minlength: 14 },
      endereco: { required: true, minlength: 5 },
      cep:      { required: true, minlength: 9 }
    },
    messages: {
      nome:     { required: 'Informe seu nome completo.', minlength: 'Mínimo 3 caracteres.' },
      email:    { required: 'Informe seu e-mail.', email: 'Digite um e-mail válido.' },
      telefone: { required: 'Informe seu telefone.', minlength: 'Digite com DDD.' },
      cpf:      { required: 'Informe seu CPF.', minlength: 'CPF inválido.' },
      endereco: { required: 'Informe seu endereço.' },
      cep:      { required: 'Informe seu CEP.', minlength: 'CEP inválido.' }
    },
    submitHandler: function () {
      alert('✅ Formulário enviado com sucesso!');
    }
  });

});
