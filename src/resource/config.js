const baseURL = 'demo.app'

// Available routes from base
const routes = {
    '/': true,
    '/about': true,
    '/work': true,
    '/blog': true,
    '/projects': true,
}

const effects = {
    gradient: true,
    dots: true,
    lines: false,
}

const style = {
    theme: 'dark',         // dark | light
    neutral: 'gray',         // sand | gray | slate
    brand: 'aqua',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent: 'yellow',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid: 'contrast',     // color | contrast
    solidStyle: 'flat',         // flat | plastic
    border: 'playful',      // rounded | playful | conservative
    surface: 'translucent',  // filled | translucent
    transition: 'all'           // all | micro | macro
}

const display = {
    location: true,
    time: true
}

export { routes, effects, style, display, baseURL };