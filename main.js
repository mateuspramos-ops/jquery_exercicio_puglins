$(document).ready(function () {

  // ══════════════════════════════════════
  // 1. CAROUSEL — Slick
  // ID do elemento no HTML: #carousel-imagens
  // ══════════════════════════════════════
  $('#carousel-imagens').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    fade: false
  });

  // ══════════════════════════════════════
  // 2. MÁSCARAS — jQuery Mask Plugin
  // ══════════════════════════════════════
  $('#telefone').mask('(00) 00000-0000');
  $('#cpf').mask('000.000.000-00');
  $('#cep').mask('00000-000');

  // ══════════════════════════════════════
  // 3. VALIDAÇÃO — jQuery Validate
  // ══════════════════════════════════════
  $('#form').validate({
    rules: {
      nome: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true,
        minlength: 15
      },
      cpf: {
        required: true,
        minlength: 14
      },
      endereco: {
        required: true,
        minlength: 5
      },
      cep: {
        required: true,
        minlength: 9
      }
    },
    messages: {
      nome: {
        required: 'Por favor, informe seu nome completo.',
        minlength: 'O nome deve ter pelo menos 3 caracteres.'
      },
      email: {
        required: 'Por favor, informe seu e-mail.',
        email: 'Digite um e-mail válido.'
      },
      telefone: {
        required: 'Por favor, informe seu telefone.',
        minlength: 'Digite um telefone válido com DDD.'
      },
      cpf: {
        required: 'Por favor, informe seu CPF.',
        minlength: 'Digite um CPF válido.'
      },
      endereco: {
        required: 'Por favor, informe seu endereço.'
      },
      cep: {
        required: 'Por favor, informe seu CEP.',
        minlength: 'Digite um CEP válido.'
      }
    },
    submitHandler: function (form) {
      alert('✅ Formulário enviado com sucesso!');
    }
  });

});
