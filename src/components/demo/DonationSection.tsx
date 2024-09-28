import { QRCodeSVG } from 'qrcode.react'

export function DonationSection() {
    const qrisData = "Rizki Tampan sekali "

    return (
        <section id="donate" className="py-12">
            <h2 className="text-3xl font-bold text-center mb-6">Support Our New Beginning</h2>
            <div className="flex justify-center">
                <QRCodeSVG value={qrisData} size={256} />
            </div>
            <p className="text-center mt-4">Scan the QR code to yyour support ❤️</p>
        </section>
    )
}