SELECT M.NIM, M.Nama, J.NamaJurusan, D.NamaDosen
FROM Mahasiswa M
JOIN Jurusan J ON M.KodeJurusan = J.KodeJurusan
JOIN Dosen D ON M.KodeDosen = D.KodeDosen
WHERE J.NamaJurusan = 'Teknik Informatika';