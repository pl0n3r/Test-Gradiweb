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
        variacion: null,
        quantity:1,
        items: [],
        selectedValue: null,
        selectedValue1: null,
        seleccionadoValue: null,    
        slide: [],
        
        
      }
    },
    components: {
		Carousel: VueCarousel.Carousel,
		Pagination: VueCarousel.Pagination,
		Navigation: VueCarousel.Navigation,
		Slide: VueCarousel.Slide
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
        this.slide = response.data.images
        this.items= response.data.variants

        console.log(response.data)
    })
      .catch(error => console.log(error))
      
      
  },
    
    methods: {
                
        formatoarray(){
            const variado = ref([])
        },
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        increment () {
            this.quantity++
          },
          decrement () {
            if(this.quantity === 1) {
              alert('Negative quantity not allowed')
            } else {
              this.quantity--
            }
          },
          
          
        
    }
  
}

  ).mount('#app')