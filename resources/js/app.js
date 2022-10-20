require('./bootstrap')

import { createApp } from 'vue'
import Card from './components/tailwind-design/CardComponent'
import Carousel from './components/tailwind-design/CarouselComponent'

const app = createApp({})
app.component('card', Card)
app.component('carousel', Carousel)

app.mount('#app')