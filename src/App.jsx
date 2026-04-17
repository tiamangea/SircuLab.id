import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Recycle, 
  ShoppingBag, 
  BarChart2, 
  Award, 
  User, 
  ChevronLeft, 
  Upload, 
  MapPin, 
  Calendar, 
  Clock,
  Search,
  CheckCircle2,
  Package,
  Leaf
} from 'lucide-react';

// --- MOCK DATA ---
const MOCK_PRODUCTS = [
  { id: 1, name: 'Tas Jinjing Kain Perca', price: 'Rp 75.000', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=200', category: 'Fashion' },
  { id: 2, name: 'Pot Tanaman Daur Ulang', price: 'Rp 45.000', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=200', category: 'Rumah' },
  { id: 3, name: 'Paving Block Plastik', price: 'Rp 15.000/pc', image: 'https://images.unsplash.com/photo-1584839818828-568ea4658a8a?auto=format&fit=crop&q=80&w=200', category: 'Bangunan' },
  { id: 4, name: 'Dompet Denim Bekas', price: 'Rp 50.000', image: 'https://images.unsplash.com/photo-1628151015968-3cae74880bb6?auto=format&fit=crop&q=80&w=200', category: 'Fashion' },
];

const MOCK_HISTORY = [
  { id: 1, date: '12 Okt 2023', type: 'Kain Perca', weight: '15 Kg', status: 'Selesai Diproses' },
  { id: 2, date: '05 Nov 2023', type: 'Plastik Kemasan', weight: '8 Kg', status: 'Sedang Dijemput' },
];

// --- COMPONENTS ---

const TopBar = ({ title, onBack, rightIcon }) => (
  <div className="bg-white px-4 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
    <div className="flex items-center gap-3">
      {onBack && (
        <button onClick={onBack} className="p-1 rounded-full hover:bg-gray-100">
          <ChevronLeft size={24} className="text-gray-700" />
        </button>
      )}
      <h1 className="text-lg font-bold text-gray-800">{title}</h1>
    </div>
    {rightIcon && <div>{rightIcon}</div>}
  </div>
);

// --- SCREENS ---

const RegisterScreen = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-white px-6 py-10 justify-center">
      <div className="flex justify-center mb-8">
        <div className="bg-green-100 p-4 rounded-full">
          <Leaf size={64} className="text-green-600" />
        </div>
      </div>
      <h1 className="text-2xl font-bold text-center text-green-700 mb-2">Waste2Product</h1>
      <p className="text-center text-gray-500 mb-8 text-sm">Ubah limbah UMKM Anda menjadi nilai tambah.</p>

      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nama Bisnis UMKM</label>
          <input type="text" className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none" placeholder="Masukkan nama bisnis" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kategori Usaha</label>
          <select className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none">
            <option>Fashion & Konveksi</option>
            <option>Makanan & Minuman</option>
            <option>Kerajinan Tangan</option>
            <option>Lainnya</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none" placeholder="email@bisnis.com" required />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white font-bold rounded-xl p-4 mt-6 hover:bg-green-700 transition active:scale-95">
          Daftar Sekarang
        </button>
      </form>
      <div className="mt-6 text-center">
        <span className="text-sm text-gray-500">Sudah punya akun? </span>
        <button onClick={() => onNavigate('dashboard')} className="text-sm text-green-600 font-bold">Masuk</button>
      </div>
    </div>
  );
};

const DashboardScreen = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-gray-50 pb-20 overflow-y-auto">
      {/* Header Profile */}
      <div className="bg-green-600 px-6 pt-12 pb-6 rounded-b-3xl text-white">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm opacity-80">Selamat datang kembali,</p>
            <h2 className="text-xl font-bold">Batik Sejahtera UMKM</h2>
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 font-bold shadow-md">
            BS
          </div>
        </div>
        
        {/* Impact Card */}
        <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-lg">
          <div>
            <p className="text-gray-500 text-xs font-semibold mb-1">Total Limbah Terkelola</p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-green-600">125</span>
              <span className="text-sm font-bold text-gray-600">Kg</span>
            </div>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <Recycle size={32} className="text-green-600" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-6">
        <h3 className="font-bold text-gray-800 mb-4">Aksi Cepat</h3>
        <div className="grid grid-cols-3 gap-4">
          <button onClick={() => onNavigate('submitWaste')} className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center gap-2 border border-gray-100 active:bg-gray-50">
            <div className="bg-green-100 p-3 rounded-full text-green-600"><Upload size={24} /></div>
            <span className="text-xs font-semibold text-gray-700 text-center">Setor Limbah</span>
          </button>
          <button onClick={() => onNavigate('tracking')} className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center gap-2 border border-gray-100 active:bg-gray-50">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600"><MapPin size={24} /></div>
            <span className="text-xs font-semibold text-gray-700 text-center">Lacak Status</span>
          </button>
          <button onClick={() => onNavigate('reports')} className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center gap-2 border border-gray-100 active:bg-gray-50">
            <div className="bg-orange-100 p-3 rounded-full text-orange-600"><BarChart2 size={24} /></div>
            <span className="text-xs font-semibold text-gray-700 text-center">Lihat Laporan</span>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800">Aktivitas Terakhir</h3>
          <button className="text-sm text-green-600 font-semibold">Lihat Semua</button>
        </div>
        <div className="space-y-3">
          {MOCK_HISTORY.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <Package size={20} className="text-gray-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-800">{item.type}</h4>
                  <p className="text-xs text-gray-500">{item.date} • {item.weight}</p>
                </div>
              </div>
              <span className={`text-[10px] px-2 py-1 rounded-full font-bold ${item.status.includes('Selesai') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SubmitWasteScreen = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-white pb-20">
      <TopBar title="Setor Limbah Baru" onBack={() => onNavigate('dashboard')} />
      
      <div className="p-6 overflow-y-auto">
        {/* Image Upload Mock */}
        <div className="border-2 border-dashed border-green-300 rounded-2xl h-48 flex flex-col items-center justify-center bg-green-50 mb-6 relative overflow-hidden">
           <Upload size={32} className="text-green-500 mb-2" />
           <p className="text-sm font-medium text-green-700">Unggah Foto Limbah</p>
           <p className="text-xs text-gray-500 mt-1">Maks 5MB (JPG/PNG)</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Limbah</label>
            <select className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 bg-white">
              <option>Pilih jenis...</option>
              <option>Kain Sisa / Perca</option>
              <option>Plastik Kemasan</option>
              <option>Kardus / Kertas</option>
              <option>Minyak Jelantah</option>
            </select>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Jumlah</label>
              <input type="number" className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500" placeholder="0" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Satuan</label>
              <select className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 bg-white">
                <option>Kilogram (Kg)</option>
                <option>Meter</option>
                <option>Liter</option>
                <option>Pieces (Pcs)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Kondisi Bahan</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="condition" className="text-green-600 focus:ring-green-500 w-4 h-4" defaultChecked />
                <span className="text-sm text-gray-700">Bersih / Kering</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="condition" className="text-green-600 focus:ring-green-500 w-4 h-4" />
                <span className="text-sm text-gray-700">Tercampur / Basah</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Tambahan</label>
            <textarea className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-green-500 h-24 resize-none" placeholder="Jelaskan detail limbah Anda (misal: sisa potongan kain katun warna-warni)..."></textarea>
          </div>
        </form>

        <button 
          onClick={() => onNavigate('schedule')}
          className="w-full bg-green-600 text-white font-bold rounded-xl p-4 mt-8 hover:bg-green-700 transition active:scale-95"
        >
          Lanjutkan ke Penjadwalan
        </button>
      </div>
    </div>
  );
};

const ScheduleScreen = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-gray-50 pb-20">
      <TopBar title="Jadwal Penjemputan" onBack={() => onNavigate('submitWaste')} />
      
      <div className="p-6 overflow-y-auto space-y-6">
        {/* Address section */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-start gap-3">
            <div className="bg-red-100 p-2 rounded-full mt-1">
              <MapPin size={20} className="text-red-500" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase">Lokasi Pengambilan</h4>
              <p className="text-sm font-semibold text-gray-800 mt-1">Gudang Batik Sejahtera</p>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">Jl. Industri Kreatif No. 45, Komplek UMKM, Kota Semarang, Jawa Tengah</p>
            </div>
          </div>
          <button className="w-full mt-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Ubah Lokasi</button>
        </div>

        {/* Date Selection */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
           <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><Calendar size={18} className="text-green-600"/> Pilih Tanggal</h4>
           <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {[15, 16, 17, 18, 19].map((day, i) => (
                <div key={day} className={`min-w-[60px] p-3 rounded-xl flex flex-col items-center justify-center border cursor-pointer ${i === 0 ? 'bg-green-600 border-green-600 text-white' : 'bg-white border-gray-200 text-gray-600 hover:border-green-300'}`}>
                  <span className="text-xs font-medium mb-1">Okt</span>
                  <span className="text-lg font-bold">{day}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Time Selection */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
           <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><Clock size={18} className="text-green-600"/> Pilih Waktu</h4>
           <div className="grid grid-cols-2 gap-3">
             <div className="border-2 border-green-500 bg-green-50 p-3 rounded-xl text-center cursor-pointer">
               <span className="text-sm font-bold text-green-700">08:00 - 12:00</span>
               <p className="text-xs text-green-600 mt-1">Pagi</p>
             </div>
             <div className="border border-gray-200 p-3 rounded-xl text-center cursor-pointer hover:border-green-300">
               <span className="text-sm font-bold text-gray-700">13:00 - 17:00</span>
               <p className="text-xs text-gray-500 mt-1">Siang</p>
             </div>
           </div>
        </div>

        {/* Summary */}
        <div className="bg-gray-100 p-4 rounded-xl border border-gray-200">
          <div className="flex justify-between items-center mb-2 text-sm">
            <span className="text-gray-600">Estimasi Berat</span>
            <span className="font-bold text-gray-800">10 Kg Kain Perca</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Biaya Penjemputan</span>
            <span className="font-bold text-green-600">Gratis</span>
          </div>
        </div>

        <button 
          onClick={() => {
            alert('Jadwal penjemputan berhasil dikonfirmasi!');
            onNavigate('tracking');
          }}
          className="w-full bg-green-600 text-white font-bold rounded-xl p-4 hover:bg-green-700 transition active:scale-95 flex justify-center items-center gap-2"
        >
          <CheckCircle2 size={20} /> Konfirmasi Penjemputan
        </button>
      </div>
    </div>
  );
};

const TrackingScreen = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-gray-50 pb-20">
      <TopBar title="Lacak Pengolahan" onBack={() => onNavigate('dashboard')} />
      
      <div className="p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-xs text-gray-500 font-medium">ID Transaksi</p>
              <p className="text-sm font-bold text-gray-800">#WP-882910</p>
            </div>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">Diproses</span>
          </div>
          <h3 className="font-bold text-lg text-gray-800">10 Kg Kain Perca</h3>
          <p className="text-sm text-gray-500">Dijemput pada 15 Okt 2023</p>
        </div>

        <h4 className="font-bold text-gray-800 mb-6">Status Pengolahan</h4>
        
        {/* Timeline */}
        <div className="relative pl-6 space-y-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200">
          
          <div className="relative">
            <div className="absolute -left-[30px] bg-green-500 rounded-full w-6 h-6 border-4 border-white flex items-center justify-center shadow-sm">
              <CheckCircle2 size={12} className="text-white" />
            </div>
            <div>
              <h5 className="font-bold text-sm text-gray-800">Limbah Diterima</h5>
              <p className="text-xs text-gray-500 mt-1">15 Okt, 14:30 - Limbah telah sampai di fasilitas Waste2Product.</p>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -left-[30px] bg-blue-500 rounded-full w-6 h-6 border-4 border-white flex items-center justify-center shadow-sm">
               <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <h5 className="font-bold text-sm text-blue-600">Proses Pemilahan & Daur Ulang</h5>
              <p className="text-xs text-gray-500 mt-1">16 Okt, 09:00 - Sedang disortir dan diproses menjadi benang/kain daur ulang.</p>
              
              {/* Info Product Outcome */}
              <div className="mt-3 bg-blue-50 p-3 rounded-lg border border-blue-100 flex gap-3 items-center">
                <img src={MOCK_PRODUCTS[0].image} className="w-12 h-12 object-cover rounded-md" alt="hasil" />
                <div>
                  <p className="text-[10px] font-bold text-blue-500 uppercase">Potensi Hasil Produk</p>
                  <p className="text-xs font-semibold text-gray-800">Bahan Baku Tas Jinjing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -left-[30px] bg-gray-300 rounded-full w-6 h-6 border-4 border-white flex items-center justify-center shadow-sm">
            </div>
            <div>
              <h5 className="font-bold text-sm text-gray-400">Selesai & Dipasarkan</h5>
              <p className="text-xs text-gray-400 mt-1">Menunggu proses selesai untuk masuk ke Marketplace.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

const MarketplaceScreen = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50 pb-20">
      <TopBar 
        title="Marketplace Olahan" 
        rightIcon={<ShoppingBag size={20} className="text-gray-600"/>}
      />
      
      <div className="px-4 py-3 bg-white border-b border-gray-100">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Cari produk daur ulang..." 
            className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        {/* Categories */}
        <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide pb-1">
          {['Semua', 'Fashion', 'Rumah', 'Bangunan', 'Aksesoris'].map((cat, i) => (
             <button key={cat} className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${i === 0 ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
               {cat}
             </button>
          ))}
        </div>
      </div>

      <div className="p-4 grid grid-cols-2 gap-4 overflow-y-auto">
        {MOCK_PRODUCTS.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="h-32 w-full relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2 bg-white/90 px-2 py-0.5 rounded text-[10px] font-bold text-green-700 flex items-center gap-1">
                <Recycle size={10} /> Eco
              </div>
            </div>
            <div className="p-3 flex flex-col flex-1">
              <p className="text-[10px] text-gray-500 mb-1">{product.category}</p>
              <h4 className="text-sm font-bold text-gray-800 leading-tight mb-2 flex-1">{product.name}</h4>
              <p className="text-sm font-black text-green-600">{product.price}</p>
              <button className="mt-3 w-full bg-gray-900 text-white text-xs font-bold py-2 rounded-lg hover:bg-gray-800">
                Beli Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ReportsScreen = () => {
  return (
    <div className="flex flex-col h-full bg-white pb-20 overflow-y-auto">
      <TopBar title="Laporan & Dampak" />
      
      <div className="p-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
            <p className="text-xs text-green-600 font-semibold mb-1">Total Diolah</p>
            <p className="text-2xl font-black text-green-700">345 <span className="text-sm font-medium">Kg</span></p>
          </div>
          <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
            <p className="text-xs text-blue-600 font-semibold mb-1">Reduksi Emisi CO2</p>
            <p className="text-2xl font-black text-blue-700">80 <span className="text-sm font-medium">Kg</span></p>
          </div>
        </div>

        <h3 className="font-bold text-gray-800 mb-4">Statistik Pengolahan 2023</h3>
        
        {/* Fake Chart CSS Based */}
        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 h-48 flex items-end justify-between gap-2 mb-8">
          {[40, 70, 45, 90, 60, 100].map((height, i) => (
            <div key={i} className="w-full flex flex-col items-center gap-2 group">
               <div className="w-full relative h-32 flex items-end">
                  <div 
                    className="w-full bg-green-500 rounded-t-sm transition-all duration-500 group-hover:bg-green-600" 
                    style={{ height: `${height}%` }}
                  ></div>
               </div>
               <span className="text-[10px] font-medium text-gray-500">
                 {['Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'][i]}
               </span>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-gray-800 mb-4">Material Terbanyak</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center"><Package size={18} className="text-orange-600"/></div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold">Kain & Tekstil</span>
                <span className="text-sm font-bold">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"><Package size={18} className="text-blue-600"/></div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold">Plastik Kemasan</span>
                <span className="text-sm font-bold">25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const AwardsScreen = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50 pb-20 overflow-y-auto">
      <TopBar title="Sertifikat & Penghargaan" />
      
      <div className="p-6">
        
        {/* Main Certificate Mockup */}
        <div className="bg-white p-2 rounded-2xl shadow-md border border-gray-100 mb-8 transform hover:scale-[1.02] transition">
          <div className="border-4 border-double border-green-200 p-6 rounded-xl flex flex-col items-center text-center bg-gradient-to-b from-white to-green-50/30">
            <Leaf size={40} className="text-green-600 mb-2" />
            <p className="text-[10px] font-bold text-green-700 tracking-widest uppercase mb-4">Sertifikat Keberlanjutan</p>
            <h2 className="text-lg font-serif font-bold text-gray-800 mb-1">Batik Sejahtera</h2>
            <p className="text-xs text-gray-600 mb-4 px-4">Telah berpartisipasi aktif dalam pengolahan limbah dan mendukung ekonomi sirkular tahun 2023.</p>
            <div className="bg-green-100 px-4 py-1 rounded-full text-green-800 font-bold text-xs inline-block">
              Total Kontribusi: 345 Kg
            </div>
            <button className="mt-6 flex items-center gap-2 text-sm font-bold text-gray-700 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">
              <Upload size={16} /> Unduh Sertifikat PDF
            </button>
          </div>
        </div>

        <h3 className="font-bold text-gray-800 mb-4">Badge Pencapaian Anda</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white flex flex-col items-center text-center p-3 rounded-xl border border-gray-100 shadow-sm opacity-100">
            <div className="bg-yellow-100 p-3 rounded-full mb-2 border border-yellow-200">
              <Award size={28} className="text-yellow-600" />
            </div>
            <span className="text-[10px] font-bold text-gray-800">Pahlawan Hijau</span>
            <span className="text-[9px] text-gray-500 mt-1">100+ Kg</span>
          </div>
          
          <div className="bg-white flex flex-col items-center text-center p-3 rounded-xl border border-green-200 shadow-sm bg-green-50 ring-1 ring-green-400">
            <div className="bg-green-200 p-3 rounded-full mb-2 shadow-inner">
              <Recycle size={28} className="text-green-700" />
            </div>
            <span className="text-[10px] font-bold text-green-800">Inovator Kain</span>
            <span className="text-[9px] text-green-600 mt-1">Paling Aktif</span>
          </div>

          {/* Locked Badge */}
          <div className="bg-gray-50 flex flex-col items-center text-center p-3 rounded-xl border border-gray-200 opacity-60 grayscale">
            <div className="bg-gray-200 p-3 rounded-full mb-2">
              <Award size={28} className="text-gray-500" />
            </div>
            <span className="text-[10px] font-bold text-gray-600">Zero Waste</span>
            <span className="text-[9px] text-gray-400 mt-1">1000+ Kg</span>
          </div>
        </div>

      </div>
    </div>
  );
};


// --- MAIN APP CONTAINER ---

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('register');

  const navigate = (screenName) => {
    setCurrentScreen(screenName);
  };

  const navItems = [
    { id: 'dashboard', icon: <Home size={24} />, label: 'Beranda' },
    { id: 'marketplace', icon: <ShoppingBag size={24} />, label: 'Pasar' },
    { id: 'submitWaste', icon: <div className="bg-green-600 text-white p-3 rounded-full shadow-lg transform -translate-y-4"><Recycle size={28} /></div>, label: 'Setor' },
    { id: 'reports', icon: <BarChart2 size={24} />, label: 'Laporan' },
    { id: 'awards', icon: <Award size={24} />, label: 'Reward' },
  ];

  return (
    <div className="flex justify-center bg-gray-900 min-h-screen font-sans">
      {/* Mobile Device Wrapper */}
      <div className="w-full max-w-[400px] bg-white min-h-screen flex flex-col relative shadow-2xl overflow-hidden sm:border-x sm:border-gray-800">
        
        {/* Screen Content */}
        <div className="flex-1 overflow-hidden relative">
          {currentScreen === 'register' && <RegisterScreen onNavigate={navigate} />}
          {currentScreen === 'dashboard' && <DashboardScreen onNavigate={navigate} />}
          {currentScreen === 'submitWaste' && <SubmitWasteScreen onNavigate={navigate} />}
          {currentScreen === 'schedule' && <ScheduleScreen onNavigate={navigate} />}
          {currentScreen === 'tracking' && <TrackingScreen onNavigate={navigate} />}
          {currentScreen === 'marketplace' && <MarketplaceScreen onNavigate={navigate} />}
          {currentScreen === 'reports' && <ReportsScreen onNavigate={navigate} />}
          {currentScreen === 'awards' && <AwardsScreen onNavigate={navigate} />}
        </div>

        {/* Bottom Navigation Menu (Hidden on Register, Schedule, Tracking) */}
        {!['register', 'schedule', 'tracking', 'submitWaste'].includes(currentScreen) && (
          <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 px-2 py-2 flex justify-around items-end pb-safe">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => navigate(item.id)}
                className={`flex flex-col items-center p-2 w-16 ${currentScreen === item.id ? 'text-green-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {item.icon}
                <span className={`text-[10px] font-medium mt-1 ${item.id === 'submitWaste' ? 'mt-0 font-bold text-green-700' : ''}`}>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}