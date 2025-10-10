const productos = [
    {
        id:1,
        categoria:"vinos",
        titulo: "Alma Mora Rosado",
        imagen:"/images/vinos/alma_mora_rosado.png",
        precio:4500,
        stock: 10,
        descripcion: "Rosado fresco y frutal, ideal para disfrutar en verano"
    },
    {
        id: 2, 
        categoria: "vinos",
        titulo: "Catena Malbec",
        imagen:"/images/vinos/catena-malbec.png",
        precio: 15000,
        stock: 15,
        descripcion:"Vino tinto Malbec de gran cuerpo y taninos firmes"
    },
    {
        id:3,
        categoria: "vinos",
        titulo: "Chacabuco Chenin Dulce",
        imagen: "/images/vinos/chacabuco-chenin-dulce.png",
        precio: 5000,
        stock: 8,
        descripcion:"Vino dulce y fresco, con notas de frutas blancas"
    },
    {
        id: 4,
        categoria: "vinos",
        titulo: "Finca las Moras Rosado Dulce",
        imagen:"/images/vinos/finca-las-moras-rosado-dulce.png",
        precio:5500,
        stock: 7,
        descripcion:"Rosado dulce, frutal y fácil de beber"
    },
    {
        id:5,
        categoria: "vinos",
        titulo:"Fond de Cave Cabernet",
        imagen:"/images/vinos/fond-de-cave-cabernet.png",
        precio:10000,
        stock:20,
        descripcion:"Cabernet Sauvignon elegante, con notas especiadas y taninos intensos"
    },
    {
        id:6,
        categoria: "vinos",
        titulo: "Patridge Malbec",
        imagen:"/images/vinos/patridge-malbec.png",
        precio:7000,
        stock: 20,
        descripcion:"Malbec expresivo, con notas a ciruela y taninos suaves"
    },
    {
        id: 7,
        categoria:"vinos",
        titulo: "Portillo Sauvignon Blanc",
        imagen: "/images/vinos/portillo-sauvignon-blanc.png",
        precio: 4800,
        stock: 25,
        descripcion:"Vino blanco fresco, con aromas cítricos y herbales"
    },
    {
        id:8,
        categoria: "vinos",
        titulo:"Rutini Cabernet",
        imagen: "/images/vinos/rutini-cabernet.png",
        precio: 20000,
        stock: 8,
        descripcion:"Cabernet Sauvignon intenso, con gran estructura y persistencia"        
    },
    {
        id:9,
        categoria:"vinos",
        titulo:"Santa Julia Sauvignon Blanc",
        imagen:"/images/vinos/santa-julia-sauvignon-blanc.png",
        precio:3800,
        stock:25,
        descripcion:"Blanco fresco y ligero, con perfil cítrico y herbal."
    },
    {
        id:10,
        categoria:"vinos",
        titulo: "Trumpeter Malbec",
        imagen:"/images/vinos/trumpeter-malbec.png",
        precio: 8500,
        stock: 12,
        descripcion:"Malbec joven y vibrante, con aromas a frutos rojos"
    },
    {
        id:11,
        categoria: "cervezas",
        titulo: "Amstel",
        imagen: "/images/cervezas/amstel.png",
        precio: 2500,
        stock: 30,
        descripcion: "Cerveza lager suave y refrescante, de sabor equilibrado"
    },
    {
        id: 12,
        categoria: "cervezas",
        titulo: "Brahma",
        imagen: "/images/cervezas/brahma.png",
        precio:2300,
        stock: 25,
        descripcion:"Cerveza rubia ligera, perfecta para acompañar comidas"
    },
    {
        id:13,
        categoria: "cervezas",
        titulo:"Corona",
        imagen: "/images/cervezas/corona-botella.png",
        precio:3500,
        stock: 20,
        descripcion: "Cerveza ligera y refrescante, ideal con una rodaja de limón"
    },
    {
        id:14,
        categoria: "cervezas",
        titulo: "Heineken",
        imagen:"/images/cervezas/heineken.png",
        precio:3800,
        stock:35,
        descripcion:"Cerveza lager de sabor suave y final ligeramente amargo"
    },
    {
        id:15,
        categoria:"cervezas",
        titulo:"Quilmes",
        imagen:"/images/cervezas/quilmes.png",
        precio:2000,
        stock:15,
        descripcion:"La clásica cerveza argentina, ligera y refrescante"
    },
    {
        id:16,
        categoria:"cervezas",
        titulo: "Stella Artois",
        imagen:"/images/cervezas/stella-artois.png",
        precio:4000,
        stock: 30,
        descripcion:"Cerveza belga de sabor suave y final ligeramente amargo"
    },
    {
        id: 17,
        categoria:"destilados",
        titulo:"Beefeater",
        imagen:"/images/destilados/gin-beefeater.png",
        precio:23000,
        stock:15,
        descripcion:"Clásico gin London Dry con marcado perfil cítrico y botánico"
    },
    {
        id:18,
        categoria:"destilados",
        titulo:"Bombay Sapphire",
        imagen:"/images/destilados/gin-bombay.png",
        precio:25000,
        stock:20,
        descripcion: "Gin premium con notas de enebro, especias y toques florales"
    },
    {
        id:19,
        categoria:"destilados",
        titulo:"Gordon's",
        imagen:"/images/destilados/gin-gordon.png",
        precio:15000,
        stock:20,
        descripcion:"Gin tradicional y refrescante, perfecto para tragos simples"
    },
    {
        id:20,
        categoria:"destilados",
        titulo:"Tanqueray",
        imagen:"/images/destilados/gin-tanqueray.png",
        precio:21000,
        stock:10,
        descripcion:"Gin seco y equilibrado, con aromas herbales y cítricos"
    },
    {
        id:21,
        categoria:"destilados",
        titulo:"Johnnie Walker Black Label",
        imagen:"/images/destilados/johnnie-walker-black.png",
        precio:45000,
        stock:8,
        descripcion:"Whisky escocés de 12 años, intenso y con notas ahumadas"
    },
    {
        id:22,
        categoria:"destilados",
        titulo:"Johnnie Walker Red Label",
        imagen:"/images/destilados/johnnie-walker-red.png",
        precio:35000,
        stock:12,
        descripcion:"Whisky escocés versátil, con sabor suave y especiado"
    },
    {
        id:23,
        categoria:"destilados",
        titulo:"Bacardi",
        imagen:"/images/destilados/ron-bacardi.png",
        precio: 16000,
        stock:10,
        descripcion:"Ron blanco suave y versátil, ideal para cócteles"
    },
    {
        id:24,
        categoria:"destilados",
        titulo:"Havana",
        imagen:"/images/destilados/ron-havana.png",
        precio:18000,
        stock:12,
        descripcion: "Ron cubano con notas dulces y ligeros toques de madera"
    },
    {
        id:25,
        categoria:"destilados",
        titulo: "Jose Cuervo",
        imagen:"/images/destilados/tequila-jose-cuervo.png",
        precio:17000,
        stock:6,
        descripcion:"Tequila reposado clásico, con notas suaves de agave y roble"
    },
    {
        id:26,
        categoria:"destilados",
        titulo:"Absolut",
        imagen:"/images/destilados/vodka-absolut.png",
        precio:23000,
        stock:8,
        descripcion:"Vodka sueco premium, suave y de gran pureza"
    },
    {
        id:27,
        categoria: "destilados",
        titulo:"Skyy",
        imagen: "/images/destilados/vodka-skyy.png",
        precio:10000,
        stock:15,
        descripcion:"Vodka americano ligero, ideal para tragos frescos"
    },
    {
        id:28,
        categoria:"destilados",
        titulo:"Smifnoff",
        imagen:"/images/destilados/vodka-smirnoff.png",
        precio:15000,
        stock:20,
        descripcion:"Vodka clásico, versátil y perfecto para cócteles"
    },
    {
        id:29,
        categoria:"destilados",
        titulo:"Ballantines",
        imagen:"/images/destilados/whisky-ballantines.png",
        precio:22000,
        stock:12,
        descripcion:"Whisky escocés blended, equilibrado y suave"
    },
    {
        id:30,
        categoria:"destilados",
        titulo:"Jack Daniels",
        imagen:"/images/destilados/whisky-jack.daniels.png",
        precio:40000,
        stock: 7,
        descripcion:"Whisky americano con notas de caramelo, vainilla y madera"
    }
]   

export default productos