export default function PrivacyPage() {
	return (
		<div className="mx-auto max-w-4xl px-6 pt-32 pb-20">
			<p className="text-4xl font-bold mb-8">
				Privacy Policy
			</p>
			<p className="text-gray-400 mb-8">
				Last updated: March 2026
			</p>
			<section className="space-y-6 text-gray-400">
				<div>
					<p className="text-2xl font-bold text-white mb-3">
						Introduction
					</p>
					<p>
						CAP respects your privacy and is committed to protecting your
						personal data. This Privacy Policy explains how we collect,
						use, and safeguard your information when you use our platform.
					</p>
				</div>
				<div>
					<p className="text-2xl font-bold text-white mb-3">
						Information We Collect
					</p>
					<p>
						We may collect the following types of information:
					</p>
					<ul className="list-disc ml-6 mt-3 space-y-2">
						<li>Account information (email, username)</li>
						<li>Code repositories submitted for analysis</li>
						<li>Usage data and analytics</li>
						<li>Integration data (GitHub connections)</li>
					</ul>
				</div>
				<div>
					<p className="text-2xl font-bold text-white mb-3">
						How We Use Information
					</p>
					<ul className="list-disc ml-6 space-y-2">
						<li>Provide AI code analysis services</li>
						<li>Improve platform performance</li>
						<li>Maintain system security</li>
						<li>Provide customer support</li>
					</ul>
				</div>
				<div>
					<p className="text-2xl font-bold text-white mb-3">
						Data Security
					</p>
					<p>
						We implement industry-standard security measures to protect
						your code and personal data. Repository analysis is processed
						securely and access is restricted.
					</p>
				</div>
				<div>
					<p className="text-2xl font-bold text-white mb-3">
						Contact
					</p>
					<p>
						If you have questions about this Privacy Policy, please contact us
						at support@cap.dev.
					</p>
				</div>
			</section>
		</div>
	);
}
