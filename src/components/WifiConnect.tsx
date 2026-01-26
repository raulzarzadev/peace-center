import React, { useState } from "react";
import { createPortal } from "react-dom";
import { QRCodeSVG } from "qrcode.react";

// Wifi Choyero / Peace2025
const SSID = "Wifi Choyero";
const PASS = "Peace2025";
const SECURITY = "WPA";
// Standard Wi-Fi string: WIFI:S:SSID;T:WPA;P:PASSWORD;;
const WIFI_STRING = `WIFI:S:${SSID};T:${SECURITY};P:${PASS};;`;

interface WifiConnectProps {
	translations: {
		btnLabel: string;
		modalTitle: string;
		network: string;
		password: string;
		copy: string;
		copied: string;
		scan: string;
	};
}

export default function WifiConnect({ translations }: WifiConnectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(PASS).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	};

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white rounded-full transition-all shadow-md hover:shadow-lg font-bold text-xs md:text-sm"
				aria-label={translations.modalTitle}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
					<path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
					<path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
					<line x1="12" y1="20" x2="12.01" y2="20"></line>
				</svg>
				<span className="hidden lg:inline">{translations.btnLabel}</span>
			</button>

			{isOpen &&
				createPortal(
					<div
						className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
						onClick={() => setIsOpen(false)}
						style={{
							position: "fixed",
							top: 0,
							left: 0,
							width: "100vw",
							height: "100dvh",
						}}
					>
						<div
							className="bg-white rounded-3xl shadow-2xl max-w-xs w-full p-5 relative max-h-[90vh] overflow-y-auto"
							onClick={(e) => e.stopPropagation()}
						>
							<button
								onClick={() => setIsOpen(false)}
								className="absolute top-3 right-3 text-stone-400 hover:text-stone-600 transition-colors bg-stone-100 rounded-full p-1 border border-stone-200"
								aria-label="Cerrar"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="18" y1="6" x2="6" y2="18"></line>
									<line x1="6" y1="6" x2="18" y2="18"></line>
								</svg>
							</button>

							<div className="text-center mb-4 mt-2">
								<div className="mx-auto w-10 h-10 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mb-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
										<path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
										<path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
										<line x1="12" y1="20" x2="12.01" y2="20"></line>
									</svg>
								</div>
								<h3 className="text-lg font-bold text-stone-800 leading-tight">
									{translations.modalTitle}
								</h3>
								<p className="text-stone-500 text-xs mt-1">
									{translations.scan}
								</p>
							</div>

							<div className="flex flex-col items-center gap-4">
								<div className="bg-white p-2 rounded-xl border border-stone-200 shadow-inner">
									<QRCodeSVG
										value={WIFI_STRING}
										size={160}
										fgColor="#0f172a"
										bgColor="#ffffff"
										level="M"
										includeMargin={false}
									/>
								</div>

								<div className="w-full space-y-2">
									<div className="bg-stone-50 p-3 rounded-xl border border-stone-100 text-center">
										<p className="text-[10px] text-stone-500 uppercase font-semibold mb-0.5 tracking-wider">
											{translations.network}
										</p>
										<p className="text-base font-mono text-stone-800 font-bold tracking-wide select-all">
											{SSID}
										</p>
									</div>

									<div className="bg-stone-50 p-3 rounded-xl border border-stone-100 flex items-center justify-between group">
										<div className="overflow-hidden mr-2">
											<p className="text-[10px] text-stone-500 uppercase font-semibold mb-0.5 tracking-wider">
												{translations.password}
											</p>
											<p className="text-base font-mono text-stone-800 font-bold tracking-wide break-all select-all leading-none py-0.5">
												{PASS}
											</p>
										</div>
										<button
											onClick={handleCopy}
											className={`px-3 py-1.5 shrink-0 rounded-lg text-xs font-bold transition-all ${
												copied
													? "bg-green-500 text-white shadow-green-200"
													: "bg-white text-stone-600 border border-stone-200 hover:border-sky-500 hover:text-sky-600 shadow-sm"
											} shadow-md whitespace-nowrap`}
										>
											{copied ? translations.copied : translations.copy}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>,
					document.body,
				)}
		</>
	);
}
