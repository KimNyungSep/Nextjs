// pages/api/data.js

import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Kode pengambilan data dari database
  } else if (req.method === 'POST') {
    const data = req.body;

    // Tambahkan log untuk memeriksa data yang dikirim
    console.log('Data yang dikirim:', data);

    try {
      const { db } = await connectToDatabase();
      const collection = db.collection('data');

      const result = await collection.insertOne(data);

      // Ganti baris ini untuk mengirim seluruh hasil, bukan hanya hasil.ops[0]
      res.status(201).json(result);
    } catch (error) {
      console.error('Gagal menyimpan data ke database:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
