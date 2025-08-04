import Link from "next/link"

export const metadata = {
  title: "Kebijakan Privasi - A Trip Edukasika",
  description: "Kebijakan Privasi A Trip Edukasika mengenai pengumpulan dan penggunaan data.",
}

export default function KebijakanPrivasiPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Kebijakan Privasi</h1>
        <p className="text-gray-700 mb-4">
          Selamat datang di halaman Kebijakan Privasi A Trip Edukasika. Kami sangat menghargai kepercayaan Anda dan
          berkomitmen untuk melindungi informasi pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami
          mengumpulkan, menggunakan, dan melindungi informasi yang Anda berikan kepada kami saat menggunakan layanan
          kami.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Informasi yang Kami Kumpulkan</h2>
        <p className="text-gray-700 mb-4">
          Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami saat Anda mengisi formulir booking,
          menghubungi kami melalui WhatsApp, atau berinteraksi dengan layanan kami. Informasi ini dapat meliputi:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Nama Lengkap</li>
          <li>Asal Sekolah/Komunitas/Individu</li>
          <li>Jumlah Peserta</li>
          <li>Tanggal Kunjungan Pilihan</li>
          <li>Nomor WhatsApp Aktif</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Bagaimana Kami Menggunakan Informasi Anda</h2>
        <p className="text-gray-700 mb-4">Informasi yang kami kumpulkan digunakan untuk tujuan berikut:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Memproses permintaan booking dan mengelola jadwal kunjungan Anda.</li>
          <li>Berkomunikasi dengan Anda mengenai booking, konfirmasi, atau informasi terkait lainnya.</li>
          <li>Meningkatkan layanan dan pengalaman pengguna kami.</li>
          <li>Menyediakan dukungan pelanggan.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Perlindungan Informasi Anda</h2>
        <p className="text-gray-700 mb-4">
          Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses tidak
          sah, penggunaan, atau pengungkapan. Namun, tidak ada metode transmisi data melalui internet atau metode
          penyimpanan elektronik yang 100% aman. Oleh karena itu, kami tidak dapat menjamin keamanan mutlak informasi
          Anda.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Pembagian Informasi dengan Pihak Ketiga</h2>
        <p className="text-gray-700 mb-4">
          Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. Informasi
          Anda hanya akan dibagikan kepada pihak ketiga jika diperlukan untuk memproses layanan yang Anda minta
          (misalnya, untuk komunikasi melalui WhatsApp atau pencatatan data internal melalui Google Sheets/n8n, sesuai
          dengan konsep yang Anda berikan).
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Perubahan Kebijakan Privasi</h2>
        <p className="text-gray-700 mb-4">
          Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan dipublikasikan di
          halaman ini. Kami mendorong Anda untuk meninjau Kebijakan Privasi ini secara berkala untuk tetap mendapatkan
          informasi terbaru tentang bagaimana kami melindungi informasi Anda.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Hubungi Kami</h2>
        <p className="text-gray-700 mb-4">
          Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini, jangan ragu untuk menghubungi
          kami melalui nomor WhatsApp yang tertera di landing page.
        </p>

        <div className="text-center mt-8">
          <Link href="/" className="text-[#FEA62D] hover:underline font-semibold">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}
