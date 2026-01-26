import React, { useState } from "react";
import {
	APIProvider,
	Map,
	AdvancedMarker,
	Pin,
	InfoWindow,
} from "@vis.gl/react-google-maps";

const GOOGLE_MAPS_API_KEY = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY;

const ReviewMap = ({ recommendations }) => {
	const [selectedPlace, setSelectedPlace] = useState(null);

	// Filter items that have coordinates
	const locations = recommendations.filter((item) => item.lat && item.lng);

	// Center roughly on La Paz if no locations, or the first location
	const defaultCenter = { lat: 24.15, lng: -110.32 };

	return (
		<APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
			<div className="w-full h-full rounded-2xl overflow-hidden">
				<Map
					defaultCenter={defaultCenter}
					defaultZoom={13}
					mapId="DEMO_MAP_ID" // Puedes crear tu propio Map ID en Google Console para estilos personalizados (Dark Mode)
					gestureHandling={"greedy"}
					disableDefaultUI={false}
					className="w-full h-full"
					style={{ width: "100%", height: "100%" }}
				>
					{locations.map((place, index) => (
						<AdvancedMarker
							key={index}
							position={{ lat: place.lat, lng: place.lng }}
							onClick={() => setSelectedPlace(place)}
						>
							<Pin
								background={"#0d9488"}
								glyphColor={"#fff"}
								borderColor={"#0f766e"}
							/>
						</AdvancedMarker>
					))}

					{selectedPlace && (
						<InfoWindow
							position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
							onCloseClick={() => setSelectedPlace(null)}
						>
							<div className="text-stone-800 p-2 min-w-[150px] text-center">
								<h3 className="font-bold text-lg mb-2 font-handwritten-body">
									{selectedPlace.title}
								</h3>
								<a
									href={selectedPlace.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-teal-600 hover:text-teal-800 underline font-medium text-sm"
								>
									Ver en Google Maps ↗
								</a>
							</div>
						</InfoWindow>
					)}
				</Map>
			</div>
		</APIProvider>
	);
};

export default ReviewMap;
