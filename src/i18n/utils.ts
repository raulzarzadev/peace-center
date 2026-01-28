import rvParkImg from "../assets/IMG_4450.webp";
import suitesImg from "../assets/IMG_4463+copy.webp";
import areasImg from "../assets/IMG_4469.webp";

import vanImg from "../assets/van.jpeg";
import jeepRental from "../assets/jeep-cherokee.jpeg";
import sandBoard from "../assets/sandboard-jeep-dunas.png";
import beachStuffs from "../assets/beach-stuffs.jpeg";

// For recommendations, we were using unsplash links. Let's keep using them or defined objects. Here I will use the data structure.

export const LANGUAGES = {
	es: "Español",
	en: "English",
};
const MINE = "5543374016";
//const PEACE = "6121539390";
const currentPhone = MINE;

export const CONTACT_DATA = {
	phone: `+52 ${currentPhone}`,
	whatsappNumber: `52${currentPhone}`,
	whatsapp: `https://wa.me/52${currentPhone}`,
	instagram: "https://www.instagram.com/peacecenterlpz",
	instagramHandle: "@peacecenterlpz",
	email: "info@peacecenter.mx",
	address: "La Paz, Baja California Sur, México",
	checkin: "https://bajarent.app/peace-center/RV's-Park",
};

export const UI = {
	es: {
		"nav.home": "Inicio",
		"nav.services": "Servicios",
		"nav.recommendations": "Recomendaciones",
		"nav.contact": "Contacto",
		"nav.book": "Reservar",
		"nav.checkin": "Registrar Entrada",
		"nav.wifi": "Wi-Fi",
		"wifi.modal.title": "Conexión Wi-Fi",
		"wifi.network": "Red",
		"wifi.password": "Contraseña",
		"wifi.copy": "Copiar",
		"wifi.copied": "¡Copiado!",
		"wifi.scan": "Escanear QR para conectar",
		"hero.title": "Tu Oasis en",
		"hero.subtitle":
			"Disfruta de la tranquilidad del desierto junto al mar. RV Park con servicios completos y cómodas habitaciones para tu estancia.",
		"hero.cta_whatsapp": "Reservar por WhatsApp",
		"hero.cta_services": "Ver Servicios",
		"services.title": "Nuestros Servicios",
		"services.subtitle": "Todo lo que necesitas para una estancia placentera.",
		"services.airbnb_intro": "¿Buscas reservar vía Airbnb?",
		"tours.title": "Rentas y Tours",
		"tours.subtitle":
			"Complementa tu viaje con nuestras experiencias exclusivas.",
		"tours.view_more": "Ver más",
		"tours.view_less": "Ver menos",
		"recommendations.title": "Descubre La Paz",
		"recommendations.subtitle":
			"Nuestras recomendaciones favoritas para tu visita.",
		"recommendations.todo": "Hacer",
		"recommendations.eatdrink": "Comer/Beber",
		"recommendations.neighborhood": "Del Barrio",
		"gallery.title": "Galería",
		"gallery.subtitle": "Un vistazo a nuestro pequeño paraíso.",
		"footer.about":
			"Tu hogar lejos de casa en La Paz, Baja California Sur. Un espacio diseñado para viajeros en busca de tranquilidad y confort.",
		"footer.contact": "Contacto",
		"footer.links": "Enlaces Rápidos",
		"footer.rights": "Todos los derechos reservados.",
		"seo.title": "Peace Center | RV Park & Suites en La Paz",
		"seo.description":
			"Tu hogar en La Paz, BCS. RV Park con todos los servicios y habitaciones de corta estancia. Cerca de la naturaleza y con la tranquilidad que buscas.",
		"wifi.title": "Conéctate al WiFi",
		"wifi.label_ssid": "Red",
		"wifi.label_password": "Contraseña",
		"wifi.button_copy": "Copiar Contraseña",
		"wifi.button_qr": "Mostrar Código QR",
		"wifi.password_copied": "¡Contraseña copiada!",
	},
	en: {
		"nav.home": "Home",
		"nav.services": "Services",
		"nav.recommendations": "Recommendations",
		"nav.contact": "Contact",
		"nav.book": "Book Now",
		"nav.checkin": "Check In",
		"nav.wifi": "Wi-Fi",
		"wifi.modal.title": "Wi-Fi Connection",
		"wifi.network": "Network",
		"wifi.password": "Password",
		"wifi.copy": "Copy",
		"wifi.copied": "Copied!",
		"wifi.scan": "Scan QR to connect",
		"hero.title": "Your Oasis in",
		"hero.subtitle":
			"Enjoy the tranquility of the desert by the sea. RV Park with full hookups and comfortable suites for your stay.",
		"hero.cta_whatsapp": "Book via WhatsApp",
		"hero.cta_services": "View Services",
		"services.title": "Our Services",
		"services.subtitle": "Everything you need for a pleasant stay.",
		"services.airbnb_intro": "Looking to book via Airbnb?",
		"tours.title": "Rentals & Tours",
		"tours.subtitle": "Enhance your trip with our exclusive experiences.",
		"tours.view_more": "View More",
		"tours.view_less": "View Less",
		"recommendations.title": "Discover La Paz",
		"recommendations.subtitle": "Our favorite recommendations for your visit.",
		"recommendations.todo": "To Do",
		"recommendations.eatdrink": "Eat/Drink",
		"recommendations.neighborhood": "Neighborhood",
		"gallery.title": "Gallery",
		"gallery.subtitle": "A glimpse of our little paradise.",
		"wifi.title": "Connect to WiFi",
		"wifi.label_ssid": "Network",
		"wifi.label_password": "Password",
		"wifi.button_copy": "Copy Password",
		"wifi.button_qr": "Show QR Code",
		"wifi.password_copied": "Password copied!",
		"footer.about":
			"Your home away from home in La Paz, Baja California Sur. A space designed for travelers seeking tranquility and comfort.",
		"footer.contact": "Contact",
		"footer.links": "Quick Links",
		"footer.rights": "All rights reserved.",
		"seo.title": "Peace Center | RV Park & Suites in La Paz",
		"seo.description":
			"Your home in La Paz, BCS. RV Park with full hookups and short-stay suites. Close to nature and with the tranquility you seek.",
	},
};

export const AIRBNB_ROOM_IDS = [
	"49349930",
	"49176878",
	"49838388",
	"51727855",
	"803647622841024544",
];

export const TOURS_DATA = {
	es: [
		{
			title: "Renta de Equipo de Playa",
			description:
				"Todo lo necesario para un día perfecto: sombrillas, sillas, hieleras y más.",
			icon: "sun",
			image: beachStuffs.src,
		},
		{
			title: "Renta de Auto",
			description:
				"Muévete con libertad por La Paz y sus alrededores en nuestros vehículos confiables.",
			icon: "car",
			image: jeepRental.src,
		},
		{
			title: "Renta de Van",
			description:
				"Ideal para acampar sin preocupaciones. Comodidad y espacio para 2-3 personas. Cocina equipada.y muchas comididades.",
			icon: "van",
			image: vanImg.src,
		},
		{
			title: "Tour Dunas del Mogote 4x4",
			description:
				"Aventura todo terreno explorando las impresionantes dunas del Mogote y disfrutando de vistas espectaculares.",
			icon: "jeep",
			image: sandBoard.src,
		},
		{
			title: "Renta de Sandboard",
			description:
				"Deslízate por las dunas a tu propio ritmo. Diversión garantizada para todas las edades.",
			icon: "board",
			image: sandBoard.src,
		},
		{
			title: "Tour Bahía Magdalena",
			description:
				"Avistamiento de ballena gris (en temporada) y exploración de manglares y dunas.",
			icon: "whale",
			image:
				"https://images.unsplash.com/photo-1516683669125-9c24090535c5?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Tour Tiburón Ballena",
			description:
				"Nada con el pez más grande del mundo en la bahía de La Paz. Una experiencia inolvidable.",
			icon: "fish",
			image:
				"https://images.unsplash.com/photo-1560275619-4662e36fa65c?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Natación Aguas Abiertas",
			description:
				"Explora el Mar de Cortés nadando con guía experto y apoyo de seguridad.",
			icon: "swim",
			image:
				"https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Clases de Natación",
			description:
				"Aprende o mejora tu técnica en el mar o alberca. Para principiantes y avanzados.",
			icon: "swim-school",
			image:
				"https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Isla Espíritu Santo",
			description:
				"Snorkel con lobos marinos, arrecifes coloridos y playas vírgenes en este Patrimonio Mundial.",
			icon: "island",
			image:
				"https://images.unsplash.com/photo-1544558582-b3659dc6c8d1?q=80&w=2674&auto=format&fit=crop",
		},
		{
			title: "Isla Cerralvo",
			description:
				"Conocida como Isla Jacques Cousteau, perfecta para pesca deportiva y buceo profundo.",
			icon: "anchor",
			image:
				"https://images.unsplash.com/photo-1629322744385-d667c210d70b?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Clases de Ciclismo",
			description:
				"Mejora tus habilidades sobre la bici, técnica de montaña o ruta.",
			icon: "bike-school",
			image:
				"https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=2688&auto=format&fit=crop",
		},
		{
			title: "Tour Histórico en Bici",
			description:
				"Recorre el centro histórico y el malecón conociendo las leyendas y la historia de La Paz.",
			icon: "bike-history",
			image:
				"https://images.unsplash.com/photo-1558237305-b040003b30d3?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Tour Gastronómico en Bici",
			description:
				"Prueba los sabores locales: tacos de pescado, mariscos y más, recorriendo la ciudad en bicicleta.",
			icon: "bike-food",
			image:
				"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2581&auto=format&fit=crop",
		},
	],
	en: [
		{
			title: "Beach Gear Rental",
			description:
				"Everything you need for a perfect day: umbrellas, chairs, coolers, and more.",
			icon: "sun",
			image: beachStuffs.src,
		},
		{
			title: "Car Rental",
			description:
				"Move freely around La Paz and its surroundings in our reliable vehicles.",
			icon: "car",
			image: jeepRental.src,
		},
		{
			title: "Van Rental",
			description:
				"Ideal for camping without worries. Comfort and space for 2-3 people. Equipped kitchen and many amenities.",
			icon: "van",
			image: vanImg.src,
		},
		{
			title: "Mogote Dunes 4x4 Tour",
			description:
				"Off-road adventure exploring the impressive Mogote dunes with spectacular views.",
			icon: "jeep",
			image: sandBoard.src,
		},
		{
			title: "Sandboard Rental",
			description:
				"Slide down the dunes at your own pace. Guaranteed fun for all ages.",
			icon: "board",
			image:
				"https://images.unsplash.com/photo-1543867629-23f269a21287?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Magdalena Bay Tour",
			description:
				"Grey whale watching (seasonal) and exploration of mangroves and sand dunes.",
			icon: "whale",
			image:
				"https://images.unsplash.com/photo-1516683669125-9c24090535c5?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Whale Shark Tour",
			description:
				"Swim with the world's largest fish in La Paz Bay. An unforgettable experience.",
			icon: "fish",
			image:
				"https://images.unsplash.com/photo-1560275619-4662e36fa65c?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Open Water Swimming",
			description:
				"Explore the Sea of Cortez swimming with expert guidance and safety support.",
			icon: "swim",
			image:
				"https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Swimming Lessons",
			description:
				"Learn or improve your technique in the sea or pool. For beginners and advanced swimmers.",
			icon: "swim-school",
			image:
				"https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Espiritu Santo Island",
			description:
				"Snorkel with sea lions, colorful reefs, and virgin beaches in this World Heritage Site.",
			icon: "island",
			image:
				"https://images.unsplash.com/photo-1544558582-b3659dc6c8d1?q=80&w=2674&auto=format&fit=crop",
		},
		{
			title: "Cerralvo Island",
			description:
				"Known as Jacques Cousteau Island, perfect for sport fishing and deep diving.",
			icon: "anchor",
			image:
				"https://images.unsplash.com/photo-1629322744385-d667c210d70b?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Cycling Lessons",
			description: "Improve your bike skills, mountain or road technique.",
			icon: "bike-school",
			image:
				"https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=2688&auto=format&fit=crop",
		},
		{
			title: "History Bike Tour",
			description:
				"Ride through the historic center and boardwalk learning about the legends and history of La Paz.",
			icon: "bike-history",
			image:
				"https://images.unsplash.com/photo-1558237305-b040003b30d3?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Foodie Bike Tour",
			description:
				"Taste local flavors: fish tacos, seafood, and more, while biking through the city.",
			icon: "bike-food",
			image:
				"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2581&auto=format&fit=crop",
		},
	],
};

export const SERVICES_DATA = {
	es: [
		{
			title: "RV Park Completo",
			description:
				"Espacios amplios con areas comunes. Área segura y tranquila con todo lo que necestias duchas, baños, cocina comunt etc.",
			icon: "rv",
			image: rvParkImg.src,
		},
		{
			title: "Suites Estancia Corta",
			description:
				"Habitaciones cómodas con aire acondicionado, baño privado y kitchenette. Perfectas para descansar.",
			icon: "bed",
			image: suitesImg.src,
		},
		{
			title: "Áreas Comunes",
			description:
				"Zona de BBQ, palapa para descanso, baños limpios con regaderas y conexión WiFi en áreas principales.",
			icon: "tree",
			image: areasImg.src,
		},
	],
	en: [
		{
			title: "Full Hookup RV Park",
			description:
				"Spacious spots with full connections (water, electricity, sewage). Safe and quiet area surrounded by nature.",
			icon: "rv",
			image: rvParkImg.src,
		},
		{
			title: "Short Stay Suites",
			description:
				"Comfortable rooms with A/C, private bathroom, and kitchenette. Perfect for resting.",
			icon: "bed",
			image: suitesImg.src,
		},
		{
			title: "Common Areas",
			description:
				"BBQ area, palapa for relaxation, clean restrooms with showers, and WiFi connection in main areas.",
			icon: "tree",
			image: areasImg.src,
		},
	],
};

export const RECOMMENDATIONS_DATA = {
	es: [
		{
			title: "Tiburón Ballena",
			link: "https://www.google.com/maps/search/?api=1&query=Tiburón+Ballena+La+Paz",
			category: "to_do",
			lat: 24.21,
			lng: -110.36,
		},
		{
			title: "Isla Espíritu Santo",
			link: "hhttps://maps.app.goo.gl/DEXJtY5jwyDXHyBS7",
			category: "to_do",
			lat: 24.45,
			lng: -110.34,
		},
		{
			title: "Balandra via hiking",
			link: "https://maps.app.goo.gl/WsqyFKfFD3M5bxTN6",
			category: "to_do",
			lat: 24.321,
			lng: -110.325,
		},
		{
			title: "Cerro de la Calavera",
			link: "https://www.google.com/maps/search/?api=1&query=Cerro+de+la+Calavera+La+Paz",
			category: "to_do",
			lat: 24.1755,
			lng: -110.3013,
		},
		{
			title: "Malecón al atardecer",
			link: "https://www.google.com/maps/search/?api=1&query=Malecón+La+Paz",
			category: "to_do",
			lat: 24.1627,
			lng: -110.3159,
		},
		{
			title: "Sandboard Mogote",
			link: "https://www.google.com/maps/search/?api=1&query=Dunas+del+Mogote+La+Paz",
			category: "to_do",
			lat: 24.1685,
			lng: -110.3506,
		},
		{
			title: "Gratitude Coffee",
			link: "https://www.google.com/maps/search/?api=1&query=Gratitude+Coffee+La+Paz",
			category: "drink_or_food",
			lat: 24.161,
			lng: -110.317,
		},
		{
			title: "Bar Dos Mundos",
			link: "https://www.google.com/maps/search/?api=1&query=Bar+Dos+Mundos+La+Paz",
			category: "drink_or_food",
			lat: 24.16,
			lng: -110.315,
		},
		{
			title: "Made",
			link: "https://www.google.com/maps/search/?api=1&query=Made+La+Paz",
			category: "drink_or_food",
			lat: 24.159,
			lng: -110.316,
		},
		{
			title: "Taco Fish",
			link: "https://www.google.com/maps/search/?api=1&query=Taco+Fish+La+Paz",
			category: "drink_or_food",
			lat: 24.155,
			lng: -110.32,
		},
		{
			title: "Claros Fish Jr",
			link: "https://www.google.com/maps/search/?api=1&query=Claros+Fish+Jr+La+Paz",
			category: "drink_or_food",
			lat: 24.15,
			lng: -110.325,
		},
		{
			title: "Toro Güero",
			link: "https://www.google.com/maps/search/?api=1&query=Toro+Güero+La+Paz",
			category: "drink_or_food",
			lat: 24.152,
			lng: -110.318,
		},
		{
			title: "Tacos del Estadio",
			link: "https://maps.app.goo.gl/9LYvRhGZy8ZkEXC88",
			category: "drink_or_food",
			lat: 24.145,
			lng: -110.315,
		},
		{
			title: "Fuego y Leña",
			link: "https://www.google.com/maps/search/?api=1&query=Fuego+y+Leña+La+Paz",
			category: "drink_or_food",
			lat: 24.135,
			lng: -110.31,
		},
		{
			title: "El buen bar",
			link: "https://www.google.com/maps/search/?api=1&query=El+Buen+Bar+La+Paz",
			category: "drink_or_food",
			lat: 24.162,
			lng: -110.314,
		},
		{
			title: "Tacos perrones",
			link: "https://www.google.com/maps/search/?api=1&query=Tacos+Perrones+La+Paz",
			category: "drink_or_food",
			lat: 24.14,
			lng: -110.32,
		},
		{
			title: "Amelier 21",
			link: "https://maps.app.goo.gl/TzHqJ5iAkaw6srVw5",
			category: "neighborhood",
			lat: 24.1605,
			lng: -110.3105,
		},
		{
			title: "Changarro de Doña Licha",
			link: "https://maps.app.goo.gl/aymdP8boEZFYy9b6A",
			category: "neighborhood",
			lat: 24.1585,
			lng: -110.3125,
		},
		{
			title: "Aqua fitness purificadora",
			link: "https://maps.app.goo.gl/zXK7GTEHJijEGjDV6",
			category: "neighborhood",
			lat: 24.1555,
			lng: -110.3155,
		},
		{
			title: "Pescaderia La Gaviota",
			link: "https://maps.app.goo.gl/qNVYxYKX1GpGSTCR7",
			category: "neighborhood",
			lat: 24.1505,
			lng: -110.3185,
		},
		{
			title: "Lavalatte",
			link: "https://www.google.com/maps/search/?api=1&query=Lavalatte+La+Paz",
			category: "neighborhood",
			lat: 24.1525,
			lng: -110.3165,
		},
		{
			title: "Tortillería La Espiga II ",
			link: "https://maps.app.goo.gl/kVnivAhfqLS5yqnJ9",
			category: "neighborhood",
			lat: 24.1535,
			lng: -110.3145,
		},
	],
	en: [
		{
			title: "Whale Shark",
			link: "https://www.google.com/maps/search/?api=1&query=Whale+Shark+La+Paz",
			category: "to_do",
			lat: 24.21,
			lng: -110.36,
		},
		{
			title: "Espiritu Santo Island",
			link: "hhttps://maps.app.goo.gl/DEXJtY5jwyDXHyBS7",
			category: "to_do",
			lat: 24.45,
			lng: -110.34,
		},
		{
			title: "Balandra via hiking",
			link: "https://maps.app.goo.gl/WsqyFKfFD3M5bxTN6",
			category: "to_do",
			lat: 24.321,
			lng: -110.325,
		},
		{
			title: "Cerro de la Calavera",
			link: "https://www.google.com/maps/search/?api=1&query=Cerro+de+la+Calavera+La+Paz",
			category: "to_do",
			lat: 24.1755,
			lng: -110.3013,
		},
		{
			title: "Malecon at sunset",
			link: "https://www.google.com/maps/search/?api=1&query=Malecon+La+Paz",
			category: "to_do",
			lat: 24.1627,
			lng: -110.3159,
		},
		{
			title: "Sandboard Mogote",
			link: "https://www.google.com/maps/search/?api=1&query=Mogote+Dunes+La+Paz",
			category: "to_do",
			lat: 24.1685,
			lng: -110.3506,
		},
		{
			title: "Gratitude Coffee",
			link: "https://www.google.com/maps/search/?api=1&query=Gratitude+Coffee+La+Paz",
			category: "drink_or_food",
			lat: 24.161,
			lng: -110.317,
		},
		{
			title: "Bar Dos Mundos",
			link: "https://www.google.com/maps/search/?api=1&query=Bar+Dos+Mundos+La+Paz",
			category: "drink_or_food",
			lat: 24.16,
			lng: -110.315,
		},
		{
			title: "Made",
			link: "https://www.google.com/maps/search/?api=1&query=Made+La+Paz",
			category: "drink_or_food",
			lat: 24.159,
			lng: -110.316,
		},
		{
			title: "Taco Fish",
			link: "https://www.google.com/maps/search/?api=1&query=Taco+Fish+La+Paz",
			category: "drink_or_food",
			lat: 24.155,
			lng: -110.32,
		},
		{
			title: "Claros Fish Jr",
			link: "https://www.google.com/maps/search/?api=1&query=Claros+Fish+Jr+La+Paz",
			category: "drink_or_food",
			lat: 24.15,
			lng: -110.325,
		},
		{
			title: "Toro Güero",
			link: "https://www.google.com/maps/search/?api=1&query=Toro+Güero+La+Paz",
			category: "drink_or_food",
			lat: 24.152,
			lng: -110.318,
		},
		{
			title: "Tacos del Estadio",
			link: "https://maps.app.goo.gl/9LYvRhGZy8ZkEXC88",
			category: "drink_or_food",
			lat: 24.145,
			lng: -110.315,
		},
		{
			title: "Fuego y Leña",
			link: "https://www.google.com/maps/search/?api=1&query=Fuego+y+Leña+La+Paz",
			category: "drink_or_food",
			lat: 24.135,
			lng: -110.31,
		},
		{
			title: "El buen bar",
			link: "https://www.google.com/maps/search/?api=1&query=El+Buen+Bar+La+Paz",
			category: "drink_or_food",
			lat: 24.162,
			lng: -110.314,
		},
		{
			title: "Tacos perrones",
			link: "https://www.google.com/maps/search/?api=1&query=Tacos+Perrones+La+Paz",
			category: "drink_or_food",
			lat: 24.14,
			lng: -110.32,
		},
		{
			title: "Amelier 21",
			link: "https://maps.app.goo.gl/TzHqJ5iAkaw6srVw5",
			category: "neighborhood",
			lat: 24.1605,
			lng: -110.3105,
		},
		{
			title: "Changarro de Doña Licha (Local Store)",
			link: "https://maps.app.goo.gl/aymdP8boEZFYy9b6A",
			category: "neighborhood",
			lat: 24.1585,
			lng: -110.3125,
		},
		{
			title: "Aqua fitness purificadora (Water)",
			link: "https://maps.app.goo.gl/zXK7GTEHJijEGjDV6",
			category: "neighborhood",
			lat: 24.1555,
			lng: -110.3155,
		},
		{
			title: "Pescaderia La Gaviota (Fish Market)",
			link: "https://maps.app.goo.gl/qNVYxYKX1GpGSTCR7",
			category: "neighborhood",
			lat: 24.1505,
			lng: -110.3185,
		},
		{
			title: "Lavalatte (Laundry/Cafe)",
			link: "https://www.google.com/maps/search/?api=1&query=Lavalatte+La+Paz",
			category: "neighborhood",
			lat: 24.1525,
			lng: -110.3165,
		},
		{
			title: "Tortillería La Espiga II ",
			link: "https://maps.app.goo.gl/kVnivAhfqLS5yqnJ9",
			category: "neighborhood",
			lat: 24.1535,
			lng: -110.3145,
		},
	],
};

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split("/");
	if (lang in UI) return lang as keyof typeof UI;
	return "es";
}

export function useTranslations(lang: keyof typeof UI) {
	return function t(key: keyof (typeof UI)[typeof lang]) {
		return UI[lang][key] || UI["es"][key];
	};
}
