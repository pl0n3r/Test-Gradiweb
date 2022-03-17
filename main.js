Vue.createApp({
    data() {
      return {
        info: null,
        nombre: null,
        img: null,
        real: null,
        alto: null,
        descp: null,
        gal: null,
        variacion: null
      }
    },
    mounted () {
    axios
      .get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js')
      .then(response => {
        this.info = response.data.id
        this.nombre = response.data.title
        this.img = response.data.featured_image
        this.real = response.data.price
        this.alto = response.data.price_max
        this.descp = response.data.description
        this.gal = response.data.images
        this.variacion = response.data.variants
        console.log(response.data)
    })
      .catch(error => console.log(error))
      
      
  },
    computed:{
        juntos: function()
        {
            return this.nombre+" " + this.apellido
            
        },
        
        mayus: function ()
        {
            return this.nombre.toUpperCase() + " " + this.apellido.toUpperCase()
        
        },
            },
    methods: {
        log(){
            console.log('1 Año se ha añadido')
            this.edad= parseInt(this.edad) + 1
        },
        restar(){
          console.log('1 Año se ha restado')
          this.edad= parseInt(this.edad) - 1
        },
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
        
    }
  
}
  ).mount('#app')