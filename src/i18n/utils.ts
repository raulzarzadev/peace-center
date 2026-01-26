import rvParkImg from "../assets/IMG_4450.webp";
import suitesImg from "../assets/IMG_4463+copy.webp";
import areasImg from "../assets/IMG_4469.webp";

import balandraImg from "../assets/IMG_4499.webp"; // Using existing images as placeholders if real ones aren't available, or unspash links
// For recommendations, we were using unsplash links. Let's keep using them or defined objects. Here I will use the data structure.

export const LANGUAGES = {
	es: "Español",
	en: "English",
};

export const UI = {
	es: {
		"nav.home": "Inicio",
		"nav.services": "Servicios",
		"nav.recommendations": "Recomendaciones",
		"nav.contact": "Contacto",
		"nav.book": "Reservar",
		"nav.checkin": "Registrar Entrada",
		"hero.title": "Tu Oasis en",
		"hero.subtitle":
			"Disfruta de la tranquilidad del desierto junto al mar. RV Park con servicios completos y cómodas habitaciones para tu estancia.",
		"hero.cta_whatsapp": "Reservar por WhatsApp",
		"hero.cta_services": "Ver Servicios",
		"services.title": "Nuestros Servicios",
		"services.subtitle": "Todo lo que necesitas para una estancia placentera.",
		"services.airbnb_1": "Airbnb Habitación 1",
		"services.airbnb_2": "Airbnb Habitación 2",
		"services.airbnb_intro": "¿Buscas reservar vía Airbnb?",
		"tours.title": "Rentas y Tours",
		"tours.subtitle":
			"Complementa tu viaje con nuestras experiencias exclusivas.",
		"tours.view_more": "Ver más",
		"tours.view_less": "Ver menos",
		"recommendations.title": "Descubre La Paz",
		"recommendations.subtitle":
			"Nuestras recomendaciones favoritas para tu visita.",
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
	},
	en: {
		"nav.home": "Home",
		"nav.services": "Services",
		"nav.recommendations": "Recommendations",
		"nav.contact": "Contact",
		"nav.book": "Book Now",
		"nav.checkin": "Check In",
		"hero.title": "Your Oasis in",
		"hero.subtitle":
			"Enjoy the tranquility of the desert by the sea. RV Park with full hookups and comfortable suites for your stay.",
		"hero.cta_whatsapp": "Book via WhatsApp",
		"hero.cta_services": "View Services",
		"services.title": "Our Services",
		"services.subtitle": "Everything you need for a pleasant stay.",
		"services.airbnb_1": "Airbnb Room 1",
		"services.airbnb_2": "Airbnb Room 2",
		"services.airbnb_intro": "Looking to book via Airbnb?",
		"tours.title": "Rentals & Tours",
		"tours.subtitle": "Enhance your trip with our exclusive experiences.",
		"tours.view_more": "View More",
		"tours.view_less": "View Less",
		"recommendations.title": "Discover La Paz",
		"recommendations.subtitle": "Our favorite recommendations for your visit.",
		"gallery.title": "Gallery",
		"gallery.subtitle": "A glimpse of our little paradise.",
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

export const TOURS_DATA = {
	es: [
		{
			title: "Renta de Equipo de Playa",
			description:
				"Todo lo necesario para un día perfecto: sombrillas, sillas, hieleras y más.",
			icon: "sun",
			image:
				"https://images.unsplash.com/photo-1590059599527-37a5051908d1?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Renta de Auto",
			description:
				"Muévete con libertad por La Paz y sus alrededores en nuestros vehículos confiables.",
			icon: "car",
			image:
				"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Renta de Van",
			description:
				"Ideal para acampar sin preocupaciones. Comodidad y espacio para 2-3 personas. Cocina equipada.y muchas comididades.",
			icon: "van",
			image:
				"https://images.unsplash.com/photo-1558284564-967d71b3e80e?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Tour Dunas del Mogote 4x4",
			description:
				"Aventura todo terreno explorando las impresionantes dunas del Mogote y disfrutando de vistas espectaculares.",
			icon: "jeep",
			image:
				"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Renta de Sandboard",
			description:
				"Deslízate por las dunas a tu propio ritmo. Diversión garantizada para todas las edades.",
			icon: "board",
			image:
				"https://images.unsplash.com/photo-1543867629-23f269a21287?q=80&w=2670&auto=format&fit=crop",
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
			image:
				"https://images.unsplash.com/photo-1590059599527-37a5051908d1?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Car Rental",
			description:
				"Move freely around La Paz and its surroundings in our reliable vehicles.",
			icon: "car",
			image:
				"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Van Rental",
			description:
				"Ideal for camping without worries. Comfort and space for 2-3 people. Equipped kitchen and many amenities.",
			icon: "van",
			image:
				"https://images.unsplash.com/photo-1558284564-967d71b3e80e?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Mogote Dunes 4x4 Tour",
			description:
				"Off-road adventure exploring the impressive Mogote dunes with spectacular views.",
			icon: "jeep",
			image:
				"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2670&auto=format&fit=crop",
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
			title: "Playa Balandra",
			category: "Playa",
			description:
				"Conocida como una de las playas más hermosas de México, famosa por sus aguas turquesas y tranquilas.",
			image:
				"https://images.unsplash.com/photo-1629165355607-06df4df4237f?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "Malecón de La Paz",
			category: "Paseo",
			description:
				"Ideal para caminatas al atardecer, andar en bicicleta y disfrutar de la gastronomía local.",
			image:
				"https://images.unsplash.com/photo-1569949381669-ecf31fd74f4c?q=80&w=2574&auto=format&fit=crop",
		},
		{
			title: "Isla Espíritu Santo",
			category: "Tour",
			description:
				"Patrimonio de la Humanidad. Nado con lobos marinos y arrecifes de coral impresionantes.",
			image:
				"https://images.unsplash.com/photo-1544558582-b3659dc6c8d1?q=80&w=2674&auto=format&fit=crop",
		},
	],
	en: [
		{
			title: "Balandra Beach",
			category: "Beach",
			description:
				"Known as one of the most beautiful beaches in Mexico, famous for its turquoise and calm waters.",
			image:
				"https://images.unsplash.com/photo-1629165355607-06df4df4237f?q=80&w=2670&auto=format&fit=crop",
		},
		{
			title: "La Paz Malecon",
			category: "Walk",
			description:
				"Ideal for sunset walks, biking, and enjoying local gastronomy.",
			image:
				"https://images.unsplash.com/photo-1569949381669-ecf31fd74f4c?q=80&w=2574&auto=format&fit=crop",
		},
		{
			title: "Espiritu Santo Island",
			category: "Tour",
			description:
				"World Heritage Site. Swim with sea lions and impressive coral reefs.",
			image:
				"https://images.unsplash.com/photo-1544558582-b3659dc6c8d1?q=80&w=2674&auto=format&fit=crop",
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
