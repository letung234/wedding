import { QRCodeSVG } from 'qrcode.react'

export function DonationSection() {
    const qrisData = "00020101021226580014COM.MIDTRANS.WWW011893600914123456789002152031234567890303UMI51440014ID.CO.QRIS.WWW0215ID10200000000310303UMI5204481453033605405100005802ID5913MIDTRANS TEST6013JAKARTA PUSAT61051234562070703A016304A1BC"

    return (
        <section id="donate" className="py-12">
            <h2 className="text-3xl font-bold text-center mb-6">Support Our New Beginning</h2>
            <div className="flex justify-center">
                <QRCodeSVG value={qrisData} size={256} />
            </div>
            <p className="text-center mt-4">Scan the QR code to donate</p>
        </section>
    )
}