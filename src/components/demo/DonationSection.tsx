import { QRCodeSVG } from 'qrcode.react'

export function DonationSection() {
    const qrisData = "Rizki Tampan sekali "

    return (
      <section id="donate" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Gửi Qùa Cưới</h2>
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          {/* Nhà Trai */}
          <div className="flex-1 text-center">
            <h4 className="text-xl font-semibold mb-4">Nhà Trai</h4>
            <div className="flex justify-center">
              <QRCodeSVG value={qrisData} size={256} />
            </div>
            <p className="mt-2 text-sm">
              Ngân hàng: Vietcombank
              <br />
              Số tài khoản: 1234567890
            </p>
          </div>
          {/* Nhà Gái */}
          <div className="flex-1 text-center">
            <h4 className="text-xl font-semibold mb-4">Nhà Gái</h4>
            <div className="flex justify-center">
              <QRCodeSVG value={qrisData} size={256} />
            </div>
            <p className="mt-2 text-sm">
              Ngân hàng: Vietcombank
              <br />
              Số tài khoản: 0987654321
            </p>
          </div>
        </div>
        <p className="text-center mt-4">
          Cảm ơn bạn đã chung vui cùng chúng tôi trong ngày trọng đại này! ❤️
        </p>
      </section>
    );
}