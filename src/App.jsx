import './App.css'
import { useState } from 'react'

function App() {
  const [nama, setNama] = useState('')
  const [nik, setNik]= useState('')
  const [jabatan, setJabatan]= useState('')
  const [karyawan, setKaryawan]= useState([])
  const tambahData = () => {
    const dataBaru = { nama,nik,jabatan }
    setKaryawan([...karyawan, dataBaru])
    setNama('')
    setNik('')
    setJabatan('')
  }

  const hapusData = (index) => {
    const dataBaru = karyawan.filter((_, i) => i !== index)
    setKaryawan(dataBaru)
  }

  return (
    <div>
      <h1>Data Entry Karyawan</h1>
      <input
      placeholder="Nama"
      value={nama}
      onChange={(e)=> setNama(e.target.value)}/>
      <input
      placeholder="NIK"
      value={nik}
      onChange={(e)=> setNik(e.target.value)}/>
      <input
      placeholder="Jabatan"
      value={jabatan}
      onChange={(e)=> setJabatan(e.target.value)}/>
      <button onClick={tambahData}>Tambah</button>

      <table border="1">
        <thead>
          <tr>
            <th>Nama</th>
            <th>NIK</th>
            <th>Jabatan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {karyawan.map((k, i)=>(
            <tr key={i}>
              <td>{k.nama}</td>
              <td>{k.nik}</td>
              <td>{k.jabatan}</td>
              <td>
                <button onClick={() => hapusData(i)}>hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
  
export default App