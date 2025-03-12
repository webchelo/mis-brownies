import './style.css'
import { fetchBrownies } from './FetchBrownies.js'

document.querySelector('#app').innerHTML = `
  <div id="brownies-container"></div>
`

fetchBrownies()