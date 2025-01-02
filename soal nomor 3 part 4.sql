SELECT M.Nama, MK.NamaMatkul, K.Nilai
FROM Mahasiswa M
JOIN KRS K ON M.NIM = K.NIM
JOIN MataKuliah MK ON K.KodeMatkul = MK.KodeMatkul
WHERE K.Nilai > 70;