import React from 'react';
import { Phone, MapPin, Coffee, Clock } from 'lucide-react';

const menuItems = [
  { name: 'Espresso', price: '45 TL' },
  { name: 'Americano', price: '55 TL' },
  { name: 'Latte', price: '65 TL' },
  { name: 'Cappuccino', price: '65 TL' },
  { name: 'Ev Yapımı Kek', price: '75 TL' },
  { name: 'Taze Kruvasan', price: '85 TL' },
];

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-stone-900">Modern Kafe</h1>
          <div className="flex gap-4 text-sm font-medium">
            <a href="#menu" className="hover:text-amber-700">Menü</a>
            <a href="#iletisim" className="hover:text-amber-700">İletişim</a>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <section className="mb-20 text-center">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" 
            alt="Kafe" 
            className="w-full h-96 object-cover rounded-2xl mb-8"
          />
          <h2 className="text-4xl font-light mb-4">Mahallenizin En Keyifli Köşesi</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">Taze çekirdek kahvelerimiz ve günlük hazırlanan atıştırmalıklarımızla sizleri bekliyoruz.</p>
        </section>

        <section id="menu" className="mb-20">
          <h3 className="text-3xl font-semibold mb-10 flex items-center gap-3">
            <Coffee className="text-amber-700" /> Menü & Fiyatlar
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg border border-stone-100 shadow-sm">
                <span className="text-lg">{item.name}</span>
                <span className="font-bold text-amber-800">{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="iletisim" className="bg-stone-900 text-stone-100 p-10 rounded-2xl">
          <h3 className="text-3xl font-semibold mb-8">Bize Ulaşın</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <Phone className="text-amber-500" />
              <div>
                <p className="font-bold">Telefon</p>
                <p>0212 555 01 23</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-amber-500" />
              <div>
                <p className="font-bold">Adres</p>
                <p>Moda Cad. No: 42, Kadıköy, İstanbul</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 text-stone-500 text-sm">
        © 2023 Modern Kafe. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}