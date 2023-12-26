import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = ({ serverTime }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      nama: e.target.nama.value,
      nim: e.target.nim.value,
      program_studi: e.target.program_studi.value,
      alamat: e.target.alamat.value,
      no_hp: e.target.no_hp.value,
    };
  
    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Data berhasil disimpan ke database.');
        
        // Tambahkan kode untuk me-refresh halaman setelah data berhasil disimpan
        window.location.reload();
      } else {
        console.error('Gagal menyimpan data ke database.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };
  
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <main>
        <div style={{ 
          backgroundImage: 'url("https://i.pinimg.com/564x/44/86/0d/44860d56352a136be9db98067f727c83.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          position: 'relative',
        }}>
          <div style={{ 
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: -1,
          }}></div>

          <form style={{ 
            position: 'relative', 
            zIndex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            width: '80%',
            maxWidth: '400px',
            overflow: 'hidden',
            display: 'grid',
            gridGap: '16px',
            gridTemplateColumns: '1fr',
          }} onSubmit={handleSubmit}>
            <h2 style={{ 
              textAlign: 'center', 
              color: '#333333', 
              marginBottom: '20px', 
              fontSize: '24px', 
              fontWeight: 'bold',
            }}>Pendaftaran Mahasiswa Baru</h2>
            
            <label htmlFor="nama" style={{ 
              display: 'block', 
              marginBottom: '8px', 
              color: '#333333', 
              fontSize: '14px', 
              fontWeight: 'bold',
            }}>Nama:</label>
            <input type="text" id="nama" name="nama" placeholder="Masukkan nama lengkap" required style={{ 
              width: '100%', 
              padding: '10px', 
              marginBottom: '16px', 
              boxSizing: 'border-box', 
              border: '1px solid #ccc', 
              borderRadius: '4px', 
              fontSize: '14px',
            }} />

            <label htmlFor="nim" style={{ 
              display: 'block', 
              marginBottom: '8px', 
              color: '#333333', 
              fontSize: '14px', 
              fontWeight: 'bold',
            }}>NIM:</label>
            <input type="text" id="nim" name="nim" placeholder="Masukkan NIM" required style={{ 
              width: '100%', 
              padding: '10px', 
              marginBottom: '16px', 
              boxSizing: 'border-box', 
              border: '1px solid #ccc', 
              borderRadius: '4px', 
              fontSize: '14px',
            }} />

            <label htmlFor="program_studi" style={{ 
              display: 'block', 
              marginBottom: '8px', 
              color: '#333333', 
              fontSize: '14px', 
              fontWeight: 'bold',
            }}>Program Studi:</label>
            <input type="text" id="program_studi" name="program_studi" placeholder="Contoh: Teknik Informatika" required style={{ 
              width: '100%', 
              padding: '10px', 
              marginBottom: '16px', 
              boxSizing: 'border-box', 
              border: '1px solid #ccc', 
              borderRadius: '4px', 
              fontSize: '14px',
            }} />

            <label htmlFor="alamat" style={{ 
              display: 'block', 
              marginBottom: '8px', 
              color: '#333333', 
              fontSize: '14px', 
              fontWeight: 'bold',
            }}>Alamat:</label>
            <textarea id="alamat" name="alamat" rows="4" placeholder="Masukkan alamat lengkap" required style={{ 
              width: '100%', 
              padding: '10px', 
              marginBottom: '16px', 
              boxSizing: 'border-box', 
              border: '1px solid #ccc', 
              borderRadius: '4px', 
              fontSize: '14px',
            }}></textarea>

            <label htmlFor="no_hp" style={{ 
              display: 'block', 
              marginBottom: '8px', 
              color: '#333333', 
              fontSize: '14px', 
              fontWeight: 'bold',
            }}>Nomor HP:</label>
            <input type="tel" id="no_hp" name="no_hp" pattern="[0-9]{10,}" placeholder="Masukkan nomor HP (minimal 10 digit angka)" required style={{ 
              width: '100%', 
              padding: '10px', 
              marginBottom: '16px', 
              boxSizing: 'border-box', 
              border: '1px solid #ccc', 
              borderRadius: '4px', 
              fontSize: '14px',
            }} />

            <button type="submit" style={{ 
              backgroundColor: '#4caf50', 
              color: '#ffffff', 
              padding: '12px 20px', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer', 
              fontSize: '16px', 
              width: '100%', 
              transition: 'background-color 0.3s',
            }}>Daftar</button>
          </form>
        </div>

        <p>Server time: {serverTime}</p>
      </main>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const serverTime = new Date().toLocaleString();
  
  return {
    props: {
      serverTime,
    },
  };
}

export default Home;
