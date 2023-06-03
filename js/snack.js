const vm = new Vue({
  el: "#app",
  data: {
    inputTipoPao: '',
    inputSalada:[],
    inputMolhos:[],
    inputHamburguer:'',
    etapa: 1,
    inputNome: '',
    inputEndereco: '',
    novoPedidoAssincrono: null
  },
  computed: {
    pao() {
      switch (this.inputTipoPao) {
        case 'gergelim':
          return [
            'imagens/pao_gergelim_superior.png',
            'imagens/pao_gergelim_inferior.png'
          ]
        case 'australiano':
          return[
            'imagens/pao_australiano_superior.png',
            'imagens/pao_australiano_inferior.png'
          ]
        default:
          return ['imagens/padrao/ pao_superior.png',
     'imagens/padrao/pao_inferior.png']
           }
     },
    alface() {
      if (this.inputSalada.includes('alface')) {
        return 'imagens/alface.png'
      } else {
        return 'imagens/padrao/alface.png'
      }
      return 'imagens/padrao/alface.png';
    },
    ketchup() {
      if (this.inputMolhos.includes('ketchup')) {
        return 'imagens/ketchup.png'
      } else {
        return 'imagens/padrao/molho.png'
      }
    },
      mostarda() {
        if (this.inputMolhos.includes('mostarda')) {
          return 'imagens/mostarda.png'
        } else {
          return 'imagens/padrao/molho.png'
        }
      },
    maionese() {
      if (this.inputMolhos.includes('maionese')) {
        return 'imagens/maionese.png'
      } else {
        return 'imagens/padrao/molho.png'
      }
      },
    hamburguer() {
      switch (this.inputHamburguer) {
        case 'bovino':
          return 'imagens/bovino.png'
        case 'frango':
          return 'imagens/frango.png'
        case 'soja':
          return 'imagens/soja.png'
        default:
          return 'imagens/padrao/hamburger.png'
      }
    }
  },
  methods: {
    fazerPedido() {
      if (this.inputTipoPao && this.inputHamburguer) {
        this.etapa = 2;
      } else {
        alert('Voce precisa selecionar pelo menos o pao e o hamburger');
      }
    },
    confirmarPedido() {
      if (this.inputNome && this.inputEndereco) {
        this.etapa = 3
        this.novoPedidoAssincrono = setTimeout(() => this.novoPedido(), 7000);
      } else {
        alert('Voce precisa informar seu nome e endereço');
      }
    },
    novoPedido() {
      this.etapa = 1
      this.inputTipoPao = ''
      this.inputSalada = []
      this.inputMolhos = []
      this.inputHamburguer = ''
      this.inputNome = ''
      this.inputEndereco = ''
    }
  },
  watch: {
    etapa(novoValor) {
       if (novoValor == 1) {
        clearTimeout(this.novoPedidoAssincrono)
       }
    }
  }
});
  
 
  
