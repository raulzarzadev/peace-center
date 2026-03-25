import rvParkImg from "../assets/IMG_4450.webp";
import suitesImg from "../assets/IMG_4463+copy.webp";
import areasImg from "../assets/IMG_4469.webp";

import vanImg from "../assets/van.webp";
import jeepRental from "../assets/jeep-cherokee.webp";
import sandBoard from "../assets/sandboard-jeep-dunas.webp";
import beachStuffs from "../assets/beach-stuffs.webp";

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
		"nav.transport": "Transporte",
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
		"hero.cta_services": "Otros Servicios",
		"hero.nav_airbnb": "Airbnb",
		"hero.nav_tours": "Rentas & Tours",
		"hero.nav_recommendations": "Recomendaciones",
		"services.title": "Nuestros Servicios",
		"services.subtitle": "Todo lo que necesitas para una estancia placentera.",
		"services.airbnb_title": "Reserva en Airbnb",
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
		"transport.title": "Transporte",
		"transport.subtitle":
			"Opciones de transporte público para moverte por La Paz y Baja California Sur.",
		"transport.intercity": "Interurbano",
		"transport.urban": "Urbano",
		"transport.local": "Local",
		"transport.schedule": "Horarios",
		"transport.fare": "Tarifa",
		"transport.phone": "Tel",
		"transport.weekdays": "L-S",
		"transport.sundays": "Dom",
		"transport.from": "Desde",
		"transport.frequency": "Frecuencia",
		"transport.every_min": "cada 20 min",
		"transport.payment": "Pago con tarjeta TU recargable",
		"transport.app_tracking": "Rastreo en tiempo real con App La Paz",
		"gallery.title": "Galería",
		"gallery.subtitle": "Un vistazo a nuestro pequeño paraíso.",
		"footer.about":
			"Tu hogar lejos de casa en La Paz, Baja California Sur. Un espacio diseñado para viajeros en busca de tranquilidad y confort.",
		"footer.contact": "Contacto",
		"footer.links": "Enlaces Rápidos",
		"footer.rights": "Todos los derechos reservados.",
		"footer.privacy": "Política de Privacidad",
		"footer.terms": "Condiciones del Servicio",
		"footer.data_deletion": "Eliminación de Datos",
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
		"nav.transport": "Transportation",
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
		"hero.cta_services": "More Services",
		"hero.nav_airbnb": "Airbnb",
		"hero.nav_tours": "Rentals & Tours",
		"hero.nav_recommendations": "Recommendations",
		"services.title": "Our Services",
		"services.subtitle": "Everything you need for a pleasant stay.",
		"services.airbnb_title": "Book on Airbnb",
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
		"transport.title": "Transportation",
		"transport.subtitle":
			"Public transport options to get around La Paz and Baja California Sur.",
		"transport.intercity": "Intercity",
		"transport.urban": "Urban",
		"transport.local": "Local",
		"transport.schedule": "Schedule",
		"transport.fare": "Fare",
		"transport.phone": "Phone",
		"transport.weekdays": "Mon-Sat",
		"transport.sundays": "Sun",
		"transport.from": "From",
		"transport.frequency": "Frequency",
		"transport.every_min": "every 20 min",
		"transport.payment": "Pay with rechargeable TU card",
		"transport.app_tracking": "Real-time tracking via App La Paz",
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
		"footer.privacy": "Privacy Policy",
		"footer.terms": "Terms of Service",
		"footer.data_deletion": "Data Deletion",
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
				"Ideal para acampar sin preocupaciones. Comodidad y espacio para 2-3 personas. Cocina equipada y muchas comodidades.",
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
				"Espacios amplios con áreas comunes. Área segura y tranquila con todo lo que necesitas: duchas, baños, cocina comunitaria, etc.",
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
			link: "https://maps.app.goo.gl/DEXJtY5jwyDXHyBS7",
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
			link: "https://maps.app.goo.gl/DEXJtY5jwyDXHyBS7",
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

export const TRANSPORT_DATA = {
	aguila: {
		name: "Autobuses Águila",
		phone: "(612) 165-5444",
		phoneTollFree: "01 800 026 8931",
		terminal: {
			es: "Terminal Turística, Av. Álvaro Obregón (Malecón), entre 5 de Mayo e Independencia",
			en: "Tourist Terminal, Av. Álvaro Obregón (Malecón), between 5 de Mayo & Independencia",
		},
		website: "https://autobusesaguila.com",
		routes: [
			{
				destination: { es: "Cabo San Lucas / San José del Cabo", en: "Cabo San Lucas / San José del Cabo" },
				schedules: "5:10, 5:45, 6:00, 7:00, 8:00, 8:30, 9:00, 10:00, 11:00, 11:30, 12:00, 13:00, 13:30, 14:00, 15:00, 15:30, 16:00, 16:30, 17:30, 18:15, 18:30, 19:30, 21:30",
				fare: "~$335 MXN",
				duration: { es: "~3 hrs", en: "~3 hrs" },
			},
			{
				destination: { es: "Todos Santos", en: "Todos Santos" },
				schedules: "6:00, 7:00, 8:00, 9:00, 10:00, 11:00, 12:00, 13:00, 14:00, 15:00, 16:30, 18:30, 21:30",
				fare: "~$200 MXN",
				duration: { es: "~1.5 hrs", en: "~1.5 hrs" },
			},
			{
				destination: { es: "Loreto", en: "Loreto" },
				schedules: "7:00, 9:00, 12:00, 15:00, 18:00, 20:00, 21:00",
				fare: "~$500 MXN",
				duration: { es: "~5 hrs", en: "~5 hrs" },
			},
			{
				destination: { es: "Santa Rosalía", en: "Santa Rosalía" },
				schedules: "7:00, 9:00, 12:00, 20:00, 21:00",
				fare: "~$700 MXN",
				duration: { es: "~7 hrs", en: "~7 hrs" },
			},
			{
				destination: { es: "Guerrero Negro", en: "Guerrero Negro" },
				schedules: "7:00, 20:00, 21:00",
				fare: "~$1,450 MXN",
				duration: { es: "~13 hrs", en: "~13 hrs" },
			},
			{
				destination: { es: "Cd. Constitución", en: "Cd. Constitución" },
				schedules: "7:00, 8:00, 9:00, 11:00, 12:00, 14:00, 15:00, 18:00, 21:00",
				fare: "~$300 MXN",
				duration: { es: "~2.5 hrs", en: "~2.5 hrs" },
			},
			{
				destination: { es: "Tijuana", en: "Tijuana" },
				schedules: "7:00, 20:00",
				fare: "~$2,500 MXN",
				duration: { es: "~22 hrs", en: "~22 hrs" },
			},
			{
				destination: { es: "Ensenada", en: "Ensenada" },
				schedules: "7:00, 20:00",
				fare: "~$2,200 MXN",
				duration: { es: "~18 hrs", en: "~18 hrs" },
			},
		],
	},
	tiburonUrbano: {
		name: "Tiburón Urbano",
		hours: "5:30 – 22:30",
		frequency: "20 min",
		app: "App La Paz",
		routes: [
			{
				name: "SMT-01",
				description: {
					es: "Camino Real ↔ Vinoramas, Emiliano Zapata, Indeco, Centro, Márquez de León",
					en: "Camino Real ↔ Vinoramas, Emiliano Zapata, Indeco, Centro, Márquez de León",
				},
			},
			{
				name: "SMT-02",
				description: {
					es: "Panteón San Juanes ↔ Camino Real (Anáhuac, Catedral, Teatro de la Ciudad, UABCS, CEDEM)",
					en: "San Juanes ↔ Camino Real (Anáhuac, Cathedral, Teatro de la Ciudad, UABCS, CEDEM)",
				},
			},
		],
		fares: {
			general: { card: "$50 MXN", trip: "$12 MXN" },
			student: { card: "$40 MXN", trip: "$6 MXN" },
			preferential: { card: "$30 MXN", trip: "$6 MXN" },
		},
	},
	ventanaBus: {
		name: { es: "Bus La Ventana / El Sargento", en: "La Ventana / El Sargento Bus" },
		phone: "612 114 0266",
		fare: "$40 MXN",
		pickup: {
			es: "Frente al Mercado Bravo (Nicolás Bravo y Guillermo Prieto)",
			en: "In front of Mercado Bravo (Nicolás Bravo & Guillermo Prieto)",
		},
		mapLink: "https://maps.app.goo.gl/qQ92mMjdzJieXbyG6",
		weekday: {
			fromSargento: ["6:45", "16:15"],
			fromLaPaz: ["14:00", "19:00"],
		},
		sunday: {
			fromSargento: ["13:00"],
			fromLaPaz: ["19:00"],
		},
	},
};

export const PATH_MAPPING: Record<string, string> = {
	"/": "/en/",
	"/en/": "/",
	"/politica-privacidad/": "/en/privacy-policy/",
	"/en/privacy-policy/": "/politica-privacidad/",
	"/terminos-servicio/": "/en/terms-of-service/",
	"/en/terms-of-service/": "/terminos-servicio/",
	"/eliminacion-datos/": "/en/data-deletion/",
	"/en/data-deletion/": "/eliminacion-datos/",
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
