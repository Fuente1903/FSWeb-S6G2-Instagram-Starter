/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React from 'react';
import { useState } from 'react';

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import './App.css';
import './sahte-veri.js';

const App = () => {

  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <ul>
        {gonderiler
        .filter((gonderi) =>
        gonderi.baslik.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((gonderi) => (
          <li key={gonderi.id}>{gonderi.baslik}</li>
          ))}
      </ul>
    </div>
  );
};

  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
	
  const gonderiyiBegen = gonderiID => {

    setGonderiler(
      gonderiler.map((gonderi) => {
        if (gonderi.id === gonderiID) {
          return {
            ...gonderi,
            begeniler: gonderi.begeniler +1,
        };
      }
      return gonderi;
    })
    );
  };

    /*
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

	  "setGonderi" yi çağırın ve state ine "posts.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
     */
  ;

  return (
    <div className='App'>
      <AramaCubugu aramaKriteri={aramaKriteri} setAramaKriteri={setAramaKriteri} />
      <Gonderiler gonderiler={gonderiler} setGonderiler={setGonderiler} />
</div>
  );
};

export default App;
