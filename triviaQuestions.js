const triviaQuestions = [
    {
        question: "Apa yang dimaksud dengan sistem peredaran darah?",
        answer: "Proses sirkulasi darah dalam tubuh",
        options: ["Proses memasak makanan", "Proses sirkulasi darah dalam tubuh", "Proses tidur", "Proses belajar"]
    },
    {
        question: "Siapa penemu lampu pijar?",
        answer: "Thomas Edison",
        options: ["Alexander Graham Bell", "Thomas Edison", "Albert Einstein", "Isaac Newton"]
    },
    {
        question: "Apa yang dimaksud dengan fotosintesis?",
        answer: "Proses tanaman membuat makanan",
        options: ["Proses tanaman membuat makanan", "Proses hewan bernafas", "Proses manusia belajar", "Proses air mendidih"]
    },
    {
        question: "Apa yang dimaksud dengan benda mati?",
        answer: "Benda yang tidak hidup",
        options: ["Benda yang bisa bergerak", "Benda yang tidak hidup", "Benda yang bisa bernapas", "Benda yang bisa tumbuh"]
    },
    {
        question: "Siapa yang menulis buku 'Laskar Pelangi'?",
        answer: "Andrea Hirata",
        options: ["Andrea Hirata", "Pramoedya Ananta Toer", "Sapardi Djoko Damono", "R.A. Kartini"]
    },
    {
        question: "Apa yang menjadi sumber energi utama bagi manusia?",
        answer: "Makanan",
        options: ["Air", "Makanan", "Angin", "Tanah"]
    },
    {
        question: "Apa yang dimaksud dengan simetri?",
        answer: "Keselarasan bentuk",
        options: ["Ketidakseimbangan", "Keselarasan bentuk", "Kerapian warna", "Ketinggian"]
    },
    {
        question: "Apa nama planet yang terdekat dengan matahari?",
        answer: "Merkurius",
        options: ["Venus", "Mars", "Merkurius", "Jupiter"]
    },
    {
        question: "Apa yang dimaksud dengan eko-sistem?",
        answer: "Hubungan antara makhluk hidup dan lingkungan",
        options: ["Proses memasak makanan", "Hubungan antara makhluk hidup dan lingkungan", "Proses belajar", "Sistem pemerintahan"]
    },
    {
        question: "Siapa presiden pertama Republik Indonesia?",
        answer: "Sukarno",
        options: ["Soeharto", "Sukarno", "Habibie", "Megawati"]
    },
    {
        question: "Apa yang dimaksud dengan gravitasi?",
        answer: "Gaya tarik bumi",
        options: ["Gaya tarik bumi", "Proses pembakaran", "Proses fotosintesis", "Gaya dorong"]
    },
    {
        question: "Apa yang harus dilakukan untuk menjaga kebersihan lingkungan?",
        answer: "Menanam pohon",
        options: ["Membuang sampah sembarangan", "Menanam pohon", "Menggunakan plastik sekali pakai", "Membakar sampah"]
    },
    {
        question: "Apa yang dimaksud dengan puisi?",
        answer: "Karya tulis yang memiliki rima",
        options: ["Karya tulis yang memiliki rima", "Karya tulis ilmiah", "Karya seni lukis", "Karya sastra prosa"]
    },
    {
        question: "Apa yang dimaksud dengan ciri-ciri makhluk hidup?",
        answer: "Bergerak, bernapas, tumbuh, berkembang biak",
        options: ["Bergerak, bernapas, tumbuh, berkembang biak", "Tidak bergerak, tidak bernapas", "Hanya bisa bergerak", "Tidak bisa tumbuh"]
    },
    {
        question: "Siapa yang menciptakan lagu 'Indonesia Raya'?",
        answer: "W.R. Supratman",
        options: ["Ismail Marzuki", "W.R. Supratman", "Budi Doremi", "Gombloh"]
    },
    {
        question: "Apa yang dimaksud dengan aliran listrik?",
        answer: "Energi yang digunakan untuk menyalakan lampu",
        options: ["Energi dari matahari", "Energi yang digunakan untuk menyalakan lampu", "Energi dari makanan", "Energi dari air"]
    },
    {
        question: "Apa yang menjadi sumber daya alam yang tidak dapat diperbaharui?",
        answer: "Minyak bumi",
        options: ["Air", "Minyak bumi", "Angin", "Tanah"]
    },
    {
        question: "Apa yang dimaksud dengan kebudayaan?",
        answer: "Cara hidup suatu kelompok masyarakat",
        options: ["Cara hidup suatu kelompok masyarakat", "Proses belajar", "Hasil pertanian", "Teknologi modern"]
    },
    {
        question: "Apa yang dimaksud dengan nutrisi?",
        answer: "Zat yang diperlukan tubuh",
        options: ["Zat yang diperlukan tubuh", "Jenis makanan", "Proses memasak", "Energi dari tidur"]
    },
    {
        question: "Apa yang dimaksud dengan demokrasi?",
        answer: "Sistem pemerintahan yang melibatkan rakyat",
        options: ["Sistem pemerintahan yang dipimpin oleh satu orang", "Sistem pemerintahan yang melibatkan rakyat", "Sistem pemerintahan militer", "Sistem pemerintahan yang tidak ada pemilu"]
    },
        {
        question: "Apa yang dimaksud dengan hewan herbivora?",
        answer: "Hewan pemakan tumbuhan",
        options: ["Hewan pemakan daging", "Hewan pemakan tumbuhan", "Hewan pemakan segala", "Hewan laut"]
    },
    {
        question: "Apa yang menjadi penyebab terjadinya siang dan malam?",
        answer: "Rotasi bumi",
        options: ["Revolusi bumi", "Rotasi bumi", "Gerakan bulan", "Gerakan matahari"]
    },
    {
        question: "Apa yang dimaksud dengan siklus air?",
        answer: "Proses perputaran air di bumi",
        options: ["Proses perputaran air di bumi", "Proses pembuangan air", "Proses penguapan air", "Proses penyerapan air"]
    },
    {
        question: "Siapa yang menemukan teori relativitas?",
        answer: "Albert Einstein",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"]
    },
    {
        question: "Apa yang dimaksud dengan budaya gotong royong?",
        answer: "Bekerja sama untuk mencapai tujuan bersama",
        options: ["Bekerja sendiri", "Bekerja sama untuk mencapai tujuan bersama", "Berkumpul tanpa tujuan", "Bersantai"]
    },
    {
        question: "Apa yang menjadi penyebab terjadinya hujan?",
        answer: "Penguapan air yang terkumpul menjadi awan",
        options: ["Penguapan air yang terkumpul menjadi awan", "Perubahan suhu", "Proses fotosintesis", "Gerakan angin"]
    },
    {
        question: "Apa nama ibu kota Indonesia?",
        answer: "Jakarta",
        options: ["Jakarta", "Bali", "Surabaya", "Bandung"]
    },
    {
        question: "Apa yang dimaksud dengan sifat magnet?",
        answer: "Kemampuan menarik benda logam",
        options: ["Kemampuan menarik benda logam", "Kemampuan menyala", "Kemampuan bergerak", "Kemampuan menguap"]
    },
    {
        question: "Siapa yang menciptakan sistem alfabet?",
        answer: "Khalil Gibran",
        options: ["Khalil Gibran", "Rudyard Kipling", "William Shakespeare", "C.J. Slope"]
    },
    {
        question: "Apa yang dimaksud dengan benua?",
        answer: "Daratan besar yang dikelilingi lautan",
        options: ["Daratan besar yang dikelilingi lautan", "Kumpulan pulau kecil", "Tanah pertanian", "Wilayah yang sangat kecil"]
    },
    {
        question: "Apa yang dimaksud dengan energi terbarukan?",
        answer: "Energi yang dapat diperbaharui",
        options: ["Energi yang tidak dapat diperbaharui", "Energi yang dapat diperbaharui", "Energi yang berasal dari fosil", "Energi dari makanan"]
    },
    {
        question: "Apa yang menjadi alat untuk mengukur suhu?",
        answer: "Termometer",
        options: ["Barometer", "Termometer", "Hygrometer", "Anemometer"]
    },
    {
        question: "Apa yang dimaksud dengan lingkungan?",
        answer: "Segala sesuatu yang ada di sekitar kita",
        options: ["Segala sesuatu yang ada di sekitar kita", "Hanya tumbuhan", "Hanya hewan", "Hanya manusia"]
    },
    {
        question: "Apa yang dimaksud dengan klasifikasi makhluk hidup?",
        answer: "Pengelompokan makhluk hidup berdasarkan ciri-ciri tertentu",
        options: ["Pengelompokan makhluk hidup berdasarkan ciri-ciri tertentu", "Proses evolusi", "Proses reproduksi", "Proses pertumbuhan"]
    },
    {
        question: "Apa yang menjadi penyebab terjadinya gempa bumi?",
        answer: "Pergerakan lempeng bumi",
        options: ["Pergerakan lempeng bumi", "Perubahan cuaca", "Kegiatan manusia", "Gempa vulkanik"]
    },
    {
        question: "Apa yang dimaksud dengan pahlawan?",
        answer: "Orang yang berjuang untuk bangsa dan negara",
        options: ["Orang yang berjuang untuk bangsa dan negara", "Orang yang terkenal", "Orang kaya", "Orang biasa"]
    },
    {
        question: "Apa yang menjadi penyebab polusi udara?",
        answer: "Emisi gas dari kendaraan dan pabrik",
        options: ["Emisi gas dari kendaraan dan pabrik", "Penggunaan pupuk", "Penggundulan hutan", "Penambangan"]
    },
    {
        question: "Apa yang dimaksud dengan tanaman obat?",
        answer: "Tanaman yang memiliki khasiat untuk menyembuhkan",
        options: ["Tanaman yang bisa dimakan", "Tanaman yang memiliki khasiat untuk menyembuhkan", "Tanaman hias", "Tanaman liar"]
    },
    {
        question: "Siapa penulis novel 'Harry Potter'?",
        answer: "J.K. Rowling",
        options: ["J.K. Rowling", "George R.R. Martin", "Tolkien", "Mark Twain"]
    },
    {
        question: "Apa yang dimaksud dengan pasar?",
        answer: "Tempat bertemunya penjual dan pembeli",
        options: ["Tempat bertemunya penjual dan pembeli", "Tempat menjual makanan", "Tempat belajar", "Tempat bermain"]
    },
    {
        question: "Apa yang menjadi alat untuk mengukur tekanan udara?",
        answer: "Barometer",
        options: ["Barometer", "Termometer", "Hygrometer", "Anemometer"]
    },
    {
        question: "Apa yang dimaksud dengan sejarah?",
        answer: "Ilmu yang mempelajari peristiwa masa lalu",
        options: ["Ilmu yang mempelajari peristiwa masa lalu", "Ilmu tentang bahasa", "Ilmu tentang tumbuhan", "Ilmu tentang matematika"]
    },
    {
        question: "Apa yang dimaksud dengan limbah?",
        answer: "Sisa-sisa yang dihasilkan dari aktivitas manusia",
        options: ["Sisa-sisa yang dihasilkan dari aktivitas manusia", "Benda-benda berguna", "Tanaman yang tumbuh", "Hewan yang hidup"]
    },
    {
        question: "Apa yang dimaksud dengan kompos?",
        answer: "Pupuk yang dihasilkan dari penguraian bahan organik",
        options: ["Pupuk yang dihasilkan dari penguraian bahan organik", "Pupuk kimia", "Bahan beracun", "Tanah yang tidak subur"]
    },
    {
        question: "Apa yang dimaksud dengan kebersihan?",
        answer: "Keadaan bersih dari kotoran",
        options: ["Keadaan bersih dari kotoran", "Kondisi berantakan", "Proses mencuci", "Penggunaan sabun"]
    },
        {
        question: "Apa yang dimaksud dengan daur ulang?",
        answer: "Proses mengolah kembali barang bekas menjadi barang baru",
        options: ["Proses mengolah kembali barang bekas menjadi barang baru", "Membuang sampah sembarangan", "Mengumpulkan sampah", "Membakar sampah"]
    },
    {
        question: "Siapa yang menjabat sebagai presiden ke-2 Indonesia?",
        answer: "Soeharto",
        options: ["Sukarno", "Soeharto", "Habibie", "Megawati"]
    },
    {
        question: "Apa yang menjadi penyebab terjadinya musim?",
        answer: "Pergerakan bumi mengelilingi matahari",
        options: ["Pergerakan bulan", "Pergerakan bumi mengelilingi matahari", "Perubahan suhu", "Gerakan angin"]
    },
    {
        question: "Apa yang dimaksud dengan ekosistem darat?",
        answer: "Komunitas makhluk hidup dan lingkungan darat",
        options: ["Komunitas makhluk hidup dan lingkungan darat", "Hanya tumbuhan", "Hanya hewan", "Hanya manusia"]
    },
    {
        question: "Apa yang dimaksud dengan gaya?",
        answer: "Dorongan atau tarikan yang mempengaruhi gerak benda",
        options: ["Dorongan atau tarikan yang mempengaruhi gerak benda", "Pergerakan benda", "Kekuatan angin", "Daya tarik bumi"]
    },
    {
        question: "Apa nama alat musik tradisional dari Jawa?",
        answer: "Gamelan",
        options: ["Angklung", "Gamelan", "Suling", "Gitar"]
    },
    {
        question: "Apa yang dimaksud dengan koloni?",
        answer: "Sekelompok hewan atau tumbuhan yang hidup bersama",
        options: ["Sekelompok hewan atau tumbuhan yang hidup bersama", "Hewan yang hidup sendiri", "Tumbuhan liar", "Hewan hutan"]
    },
    {
        question: "Apa yang dimaksud dengan inovasi?",
        answer: "Pembaruan atau penemuan baru",
        options: ["Pembaruan atau penemuan baru", "Pembangunan gedung", "Proses belajar", "Kegiatan bermain"]
    },
    {
        question: "Apa yang dimaksud dengan sumber energi fosil?",
        answer: "Energi yang berasal dari sisa-sisa organisme purba",
        options: ["Energi dari matahari", "Energi dari air", "Energi yang berasal dari sisa-sisa organisme purba", "Energi dari angin"]
    },
    {
        question: "Apa yang dimaksud dengan pola makan sehat?",
        answer: "Makanan yang bergizi dan seimbang",
        options: ["Makanan yang bergizi dan seimbang", "Makanan cepat saji", "Makanan berlemak tinggi", "Makanan manis"]
    },
    {
        question: "Apa yang dimaksud dengan flora dan fauna?",
        answer: "Tumbuhan dan hewan dalam suatu wilayah",
        options: ["Tumbuhan dan hewan dalam suatu wilayah", "Hanya tumbuhan", "Hanya hewan", "Tanah dan air"]
    },
    {
        question: "Apa yang dimaksud dengan habitat?",
        answer: "Tempat tinggal makhluk hidup",
        options: ["Tempat tinggal makhluk hidup", "Proses pertumbuhan", "Kegiatan berburu", "Pergerakan"]
    },
    {
        question: "Apa yang menjadi salah satu fungsi daun pada tanaman?",
        answer: "Tempat fotosintesis",
        options: ["Tempat fotosintesis", "Tempat menyimpan air", "Tempat tumbuh akar", "Tempat berbunga"]
    },
    {
        question: "Apa yang dimaksud dengan pengembunan?",
        answer: "Proses perubahan uap air menjadi air",
        options: ["Proses perubahan uap air menjadi air", "Proses air mendidih", "Proses air membeku", "Proses penguapan"]
    },
    {
        question: "Siapa penemu telepon?",
        answer: "Alexander Graham Bell",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Isaac Newton"]
    },
    {
        question: "Apa yang dimaksud dengan pernapasan?",
        answer: "Proses mengambil oksigen dan mengeluarkan karbon dioksida",
        options: ["Proses mengambil oksigen dan mengeluarkan karbon dioksida", "Proses makan", "Proses tidur", "Proses belajar"]
    },
    {
        question: "Apa yang menjadi penyebab pencemaran tanah?",
        answer: "Penggunaan bahan kimia berlebihan",
        options: ["Penggunaan bahan kimia berlebihan", "Menanam pohon", "Mengolah sampah", "Pembersihan lingkungan"]
    },
    {
        question: "Apa yang dimaksud dengan ketahanan pangan?",
        answer: "Kemampuan suatu negara dalam memenuhi kebutuhan pangan",
        options: ["Kemampuan suatu negara dalam memenuhi kebutuhan pangan", "Proses memasak", "Proses berkebun", "Kegiatan mengolah makanan"]
    },
    {
        question: "Apa yang dimaksud dengan hibernasi?",
        answer: "Tidur panjang yang dilakukan hewan di musim dingin",
        options: ["Tidur panjang yang dilakukan hewan di musim dingin", "Proses mencari makanan", "Proses beradaptasi", "Proses berkembang biak"]
    },
    {
        question: "Apa yang dimaksud dengan perairan?",
        answer: "Wilayah yang dikelilingi oleh air",
        options: ["Wilayah yang dikelilingi oleh air", "Tanah kering", "Kawasan hutan", "Daerah pegunungan"]
    },
    {
        question: "Apa yang dimaksud dengan warisan budaya?",
        answer: "Karya dan tradisi yang diwariskan dari generasi ke generasi",
        options: ["Karya dan tradisi yang diwariskan dari generasi ke generasi", "Hanya barang antik", "Kegiatan modern", "Teknologi baru"]
    },
        {
        question: "Apa yang dimaksud dengan fotosintesis?",
        answer: "Proses tanaman mengubah sinar matahari menjadi energi",
        options: ["Proses tanaman mengubah sinar matahari menjadi energi", "Proses hewan bernapas", "Proses penguraian", "Proses pembuangan sampah"]
    },
    {
        question: "Apa yang menjadi bagian utama dari sistem peredaran darah?",
        answer: "Jantung",
        options: ["Jantung", "Paru-paru", "Hati", "Ginjal"]
    },
    {
        question: "Apa yang dimaksud dengan rantai makanan?",
        answer: "Hubungan antara makhluk hidup dalam mendapatkan makanan",
        options: ["Hubungan antara makhluk hidup dalam mendapatkan makanan", "Proses fotosintesis", "Proses reproduksi", "Proses pertumbuhan"]
    },
    {
        question: "Apa yang dimaksud dengan ekosistem air?",
        answer: "Komunitas makhluk hidup dan lingkungan di air",
        options: ["Komunitas makhluk hidup dan lingkungan di air", "Hanya hewan air", "Hanya tumbuhan air", "Hanya manusia"]
    },
    {
        question: "Apa yang dimaksud dengan penguapan?",
        answer: "Proses perubahan air menjadi uap",
        options: ["Proses perubahan air menjadi uap", "Proses air membeku", "Proses air mendidih", "Proses mengembun"]
    },
    {
        question: "Apa yang dimaksud dengan polusi?",
        answer: "Pencemaran lingkungan akibat aktivitas manusia",
        options: ["Pencemaran lingkungan akibat aktivitas manusia", "Kegiatan berkebun", "Proses pembuangan sampah", "Kegiatan belajar"]
    },
    {
        question: "Apa yang dimaksud dengan pemanasan global?",
        answer: "Peningkatan suhu rata-rata bumi akibat gas rumah kaca",
        options: ["Peningkatan suhu rata-rata bumi akibat gas rumah kaca", "Penurunan suhu bumi", "Perubahan cuaca ekstrem", "Hujan yang terus menerus"]
    },
    {
        question: "Apa yang dimaksud dengan habitat alami?",
        answer: "Tempat di mana suatu spesies hidup secara alami",
        options: ["Tempat di mana suatu spesies hidup secara alami", "Tempat peliharaan", "Kandang hewan", "Taman kota"]
    },
    {
        question: "Apa yang menjadi faktor penting dalam proses fotosintesis?",
        answer: "Cahaya matahari",
        options: ["Cahaya matahari", "Karbon dioksida", "Air", "Semua benar"]
    },
    {
        question: "Apa yang dimaksud dengan siklus hidup?",
        answer: "Tahapan kehidupan suatu makhluk hidup dari lahir hingga mati",
        options: ["Tahapan kehidupan suatu makhluk hidup dari lahir hingga mati", "Proses reproduksi", "Pertumbuhan", "Perubahan lingkungan"]
    },
    {
        question: "Apa yang menjadi penyebab terjadinya angin?",
        answer: "Perbedaan tekanan udara",
        options: ["Perbedaan tekanan udara", "Pergerakan bumi", "Suhu yang tinggi", "Gerakan bulan"]
    },
    {
        question: "Apa yang dimaksud dengan mineral?",
        answer: "Bahan galian yang berasal dari bumi",
        options: ["Bahan galian yang berasal dari bumi", "Tumbuhan", "Hewan", "Bahan kimia"]
    },
    {
        question: "Apa yang menjadi sumber energi utama di bumi?",
        answer: "Matahari",
        options: ["Bulan", "Bintang", "Matahari", "Bumi"]
    },
    {
        question: "Apa yang dimaksud dengan pembiakan?",
        answer: "Proses reproduksi makhluk hidup",
        options: ["Proses reproduksi makhluk hidup", "Pertumbuhan", "Perubahan", "Pembuangan"]
    },
    {
        question: "Apa yang dimaksud dengan daur air?",
        answer: "Siklus pergerakan air di bumi",
        options: ["Siklus pergerakan air di bumi", "Hanya penguapan", "Hanya hujan", "Hanya air laut"]
    },
    {
        question: "Apa yang menjadi manfaat hutan?",
        answer: "Menyediakan oksigen dan habitat bagi hewan",
        options: ["Menyediakan oksigen dan habitat bagi hewan", "Tempat bermain", "Menyimpan air", "Menyediakan makanan"]
    },
    {
        question: "Apa yang dimaksud dengan sifat fisika?",
        answer: "Karakteristik yang dapat diukur atau diamati",
        options: ["Karakteristik yang dapat diukur atau diamati", "Perubahan warna", "Reaksi kimia", "Proses pertumbuhan"]
    },
    {
        question: "Apa yang dimaksud dengan daur ulang?",
        answer: "Proses mengolah kembali barang bekas",
        options: ["Proses mengolah kembali barang bekas", "Membuang sampah", "Membakar sampah", "Mengumpulkan barang-barang baru"]
    },
    {
        question: "Apa yang menjadi penyebab terjadinya tsunami?",
        answer: "Gempa bumi di dasar laut",
        options: ["Gempa bumi di dasar laut", "Angin kencang", "Perubahan cuaca", "Pancaran matahari"]
    },
    {
        question: "Apa yang dimaksud dengan energi kinetik?",
        answer: "Energi yang dimiliki benda yang bergerak",
        options: ["Energi yang dimiliki benda yang bergerak", "Energi dari makanan", "Energi dari matahari", "Energi yang disimpan"]
    },
        {
        question: "Berapa hasil dari 7 + 5?",
        answer: "12",
        options: ["10", "11", "12", "13"]
    },
    {
        question: "Apa hasil dari 8 x 6?",
        answer: "48",
        options: ["42", "48", "54", "60"]
    },
    {
        question: "Jika ada 20 apel dan 8 apel diambil, berapa apel yang tersisa?",
        answer: "12",
        options: ["8", "12", "16", "20"]
    },
    {
        question: "Berapa hasil dari 50 - 17?",
        answer: "33",
        options: ["30", "31", "32", "33"]
    },
    {
        question: "Apa hasil dari 15 ÷ 3?",
        answer: "5",
        options: ["3", "4", "5", "6"]
    },
    {
        question: "Berapa panjang sisi persegi jika kelilingnya 40 cm?",
        answer: "10",
        options: ["8", "10", "12", "14"]
    },
    {
        question: "Apa nilai dari 4²?",
        answer: "16",
        options: ["12", "14", "16", "18"]
    },
    {
        question: "Jika 3 x 4 = 12, berapa 4 x 3?",
        answer: "12",
        options: ["10", "11", "12", "13"]
    },
    {
        question: "Apa hasil dari 5 + 7 x 2?",
        answer: "19",
        options: ["16", "17", "18", "19"]
    },
    {
        question: "Berapa 25% dari 200?",
        answer: "50",
        options: ["25", "50", "75", "100"]
    },
    {
        question: "Jika 6 kue dibagi rata untuk 3 orang, berapa kue yang didapat tiap orang?",
        answer: "2",
        options: ["1", "2", "3", "4"]
    },
    {
        question: "Apa hasil dari 100 - (25 + 25)?",
        answer: "50",
        options: ["50", "60", "70", "80"]
    },
    {
        question: "Berapa angka di antara 15 dan 25?",
        answer: "20",
        options: ["18", "19", "20", "21"]
    },
    {
        question: "Berapa total sudut dalam segitiga?",
        answer: "180 derajat",
        options: ["90 derajat", "180 derajat", "270 derajat", "360 derajat"]
    },
    {
        question: "Apa hasil dari 10 x 10?",
        answer: "100",
        options: ["90", "100", "110", "120"]
    },
    {
        question: "Jika ada 50 siswa dan 30 siswa adalah laki-laki, berapa siswa perempuan?",
        answer: "20",
        options: ["10", "20", "30", "40"]
    },
    {
        question: "Apa yang menjadi nilai tempat untuk angka 7 dalam angka 4723?",
        answer: "700",
        options: ["70", "700", "7", "7000"]
    },
    {
        question: "Apa hasil dari 9 + 8 - 5?",
        answer: "12",
        options: ["11", "12", "13", "14"]
    },
    {
        question: "Jika ada 12 bola dan 4 bola hilang, berapa bola yang tersisa?",
        answer: "8",
        options: ["6", "7", "8", "9"]
    },
    {
        question: "Berapa hasil dari 18 ÷ 2 + 5?",
        answer: "14",
        options: ["12", "13", "14", "15"]
    },
        {
        question: "Siapa yang dikenal sebagai proklamator kemerdekaan Indonesia?",
        answer: "Soekarno dan Mohammad Hatta",
        options: ["Soekarno dan Mohammad Hatta", "Sukarno dan Siti Soendari", "Sultan Agung dan Raffles", "Jenderal Sudirman dan B.J. Habibie"]
    },
    {
        question: "Tanggal berapa Indonesia merdeka?",
        answer: "17 Agustus 1945",
        options: ["17 Agustus 1945", "21 April 1908", "20 Mei 1908", "1 Juni 1945"]
    },
    {
        question: "Siapa raja yang terkenal di Kerajaan Majapahit?",
        answer: "Hayam Wuruk",
        options: ["Raden Wijaya", "Hayam Wuruk", "Sriwijaya", "Gajah Mada"]
    },
    {
        question: "Apa nama pahlawan wanita yang terkenal dalam perjuangan kemerdekaan?",
        answer: "Raden Ajeng Kartini",
        options: ["Raden Ajeng Kartini", "Cut Nyak Dien", "Fatmawati", "Dewi Sartika"]
    },
    {
        question: "Apa nama kerajaan yang berdiri sebelum Majapahit?",
        answer: "Kerajaan Singasari",
        options: ["Kerajaan Majapahit", "Kerajaan Sriwijaya", "Kerajaan Singasari", "Kerajaan Mataram"]
    },
    {
        question: "Siapa yang memimpin Perang Diponegoro?",
        answer: "Pangeran Diponegoro",
        options: ["Jenderal Sudirman", "Pangeran Diponegoro", "Soekarno", "Sultan Agung"]
    },
    {
        question: "Apa isi dari Proklamasi Kemerdekaan Indonesia?",
        answer: "Menyatakan kemerdekaan Indonesia",
        options: ["Menyatakan kemerdekaan Indonesia", "Menyerah kepada Jepang", "Menghimpun kekuatan", "Menetapkan presiden"]
    },
    {
        question: "Siapa penulis naskah Proklamasi?",
        answer: "Soekarno dan Mohammad Hatta",
        options: ["Soekarno dan Mohammad Hatta", "Sukarno dan M. Yamin", "M. Yamin dan R. A. Kartini", "Sultan Agung dan Raffles"]
    },
    {
        question: "Apa yang menjadi latar belakang peristiwa 10 November 1945?",
        answer: "Pertempuran Surabaya",
        options: ["Pertempuran Bandung", "Pertempuran Medan", "Pertempuran Surabaya", "Pertempuran Jakarta"]
    },
    {
        question: "Siapa yang dijuluki Bapak Pendidikan Nasional?",
        answer: "Ki Hajar Dewantara",
        options: ["B.J. Habibie", "Soekarno", "Ki Hajar Dewantara", "Mohammad Hatta"]
    },
    {
        question: "Apa yang dilakukan Jepang terhadap Indonesia selama pendudukan?",
        answer: "Menguras sumber daya alam",
        options: ["Membantu pembangunan", "Menguras sumber daya alam", "Meningkatkan pendidikan", "Menjaga keamanan"]
    },
    {
        question: "Apa nama kongres pertama yang diadakan untuk memperjuangkan kemerdekaan?",
        answer: "Kongres Pemuda",
        options: ["Kongres Pemuda", "Kongres Perempuan", "Kongres Sumpah Pemuda", "Kongres Pertama"]
    },
    {
        question: "Siapa yang menjadi presiden pertama Indonesia?",
        answer: "Soekarno",
        options: ["Soekarno", "Mohammad Hatta", "Sultan Agung", "B.J. Habibie"]
    },
    {
        question: "Apa nama pahlawan yang dikenal dengan julukan Jenderal Sudirman?",
        answer: "Jenderal Sudirman",
        options: ["Jenderal Soedirman", "Jenderal Soeharto", "Jenderal Gatot Subroto", "Jenderal Nasution"]
    },
    {
        question: "Apa yang menjadi tujuan dari Sumpah Pemuda?",
        answer: "Menyatukan semua suku di Indonesia",
        options: ["Menyatukan semua suku di Indonesia", "Membentuk negara baru", "Menggulingkan penjajah", "Mendirikan kerajaan baru"]
    },
    {
        question: "Apa yang dimaksud dengan Kolonialisme?",
        answer: "Penguasaan suatu bangsa terhadap bangsa lain",
        options: ["Penguasaan suatu bangsa terhadap bangsa lain", "Perdagangan bebas", "Perjuangan untuk kemerdekaan", "Pendidikan untuk rakyat"]
    },
    {
        question: "Apa nama dokumen yang menjadi dasar negara Indonesia?",
        answer: "UUD 1945",
        options: ["UUD 1945", "Proklamasi", "Pancasila", "Deklarasi Kemerdekaan"]
    },
    {
        question: "Apa nama pejuang yang terkenal dengan perjuangan di Aceh?",
        answer: "Cut Nyak Dien",
        options: ["Raden Ajeng Kartini", "Cut Nyak Dien", "Fatmawati", "Dewi Sartika"]
    },
    {
        question: "Siapa yang mengeluarkan isi Deklarasi Jakarta?",
        answer: "Soekarno",
        options: ["Soekarno", "Mohammad Hatta", "Ki Hajar Dewantara", "Jenderal Sudirman"]
    },
    {
        question: "Apa yang menjadi penyebab Revolusi Industri?",
        answer: "Perubahan dalam teknologi",
        options: ["Perubahan dalam teknologi", "Perubahan politik", "Perubahan sosial", "Perubahan lingkungan"]
    },
        {
        question: "Apa yang dimaksud dengan globalisasi?",
        answer: "Proses interaksi dan integrasi antar negara di dunia",
        options: ["Proses interaksi dan integrasi antar negara di dunia", "Perang antar negara", "Perdagangan lokal", "Pertumbuhan ekonomi"]
    },
    {
        question: "Apa fungsi dari peta?",
        answer: "Sebagai representasi visual dari permukaan bumi",
        options: ["Sebagai representasi visual dari permukaan bumi", "Sebagai alat ukur", "Sebagai alat permainan", "Sebagai alat komunikasi"]
    },
    {
        question: "Siapa yang disebut sebagai bapak pembangunan Indonesia?",
        answer: "Soekarno",
        options: ["Soekarno", "Soeharto", "B.J. Habibie", "Mohammad Hatta"]
    },
    {
        question: "Apa yang menjadi ciri khas budaya Indonesia?",
        answer: "Keberagaman suku dan adat istiadat",
        options: ["Keberagaman suku dan adat istiadat", "Kesamaan bahasa", "Hanya satu agama", "Hanya satu makanan"]
    },
    {
        question: "Apa yang dimaksud dengan otonomi daerah?",
        answer: "Kewenangan daerah untuk mengatur dan mengurus urusan pemerintahan",
        options: ["Kewenangan daerah untuk mengatur dan mengurus urusan pemerintahan", "Pemerintah pusat", "Pengawasan luar negeri", "Penguasaan oleh asing"]
    },
    {
        question: "Apa yang menjadi sumber daya alam di Indonesia?",
        answer: "Minyak bumi",
        options: ["Minyak bumi", "Teknologi", "Kesehatan", "Pendidikan"]
    },
    {
        question: "Apa tujuan dari perjanjian internasional?",
        answer: "Untuk mencapai kesepakatan antara negara-negara",
        options: ["Untuk mencapai kesepakatan antara negara-negara", "Untuk perang", "Untuk perdagangan lokal", "Untuk pendidikan"]
    },
    {
        question: "Apa yang dimaksud dengan perdagangan internasional?",
        answer: "Perdagangan antara negara yang berbeda",
        options: ["Perdagangan antara negara yang berbeda", "Perdagangan dalam negeri", "Perdagangan lokal", "Perdagangan tanpa pajak"]
    },
    {
        question: "Apa yang menjadi ciri khas rumah adat di Indonesia?",
        answer: "Beragam bentuk dan fungsi sesuai daerah",
        options: ["Beragam bentuk dan fungsi sesuai daerah", "Hanya satu bentuk", "Hanya untuk orang kaya", "Tidak ada fungsi"]
    },
    {
        question: "Apa yang dimaksud dengan nilai-nilai Pancasila?",
        answer: "Dasar ideologi dan pandangan hidup bangsa Indonesia",
        options: ["Dasar ideologi dan pandangan hidup bangsa Indonesia", "Hanya untuk satu agama", "Hanya untuk satu suku", "Tidak berpengaruh"]
    },
    {
        question: "Apa yang dimaksud dengan ekonomi?",
        answer: "Ilmu tentang produksi, distribusi, dan konsumsi barang",
        options: ["Ilmu tentang produksi, distribusi, dan konsumsi barang", "Ilmu tentang pemerintahan", "Ilmu tentang kesehatan", "Ilmu tentang budaya"]
    },
    {
        question: "Siapa yang memiliki hak untuk memilih dalam pemilu?",
        answer: "Warga negara yang telah memenuhi syarat",
        options: ["Warga negara yang telah memenuhi syarat", "Hanya orang kaya", "Hanya pegawai negeri", "Hanya orang tua"]
    },
    {
        question: "Apa yang dimaksud dengan monarki?",
        answer: "Bentuk pemerintahan yang dipimpin oleh raja atau ratu",
        options: ["Bentuk pemerintahan yang dipimpin oleh raja atau ratu", "Bentuk pemerintahan demokrasi", "Bentuk pemerintahan republik", "Bentuk pemerintahan militer"]
    },
    {
        question: "Apa yang dimaksud dengan partisipasi masyarakat?",
        answer: "Keterlibatan masyarakat dalam kegiatan sosial dan politik",
        options: ["Keterlibatan masyarakat dalam kegiatan sosial dan politik", "Hanya untuk pemimpin", "Tidak ada keterlibatan", "Hanya untuk pemilih"]
    },
    {
        question: "Apa yang menjadi tujuan pendidikan di Indonesia?",
        answer: "Untuk mencerdaskan kehidupan bangsa",
        options: ["Untuk mencerdaskan kehidupan bangsa", "Hanya untuk orang kaya", "Untuk mendapatkan pekerjaan", "Hanya untuk anak-anak"]
    },
    {
        question: "Apa yang dimaksud dengan integrasi sosial?",
        answer: "Proses penyatuan antara kelompok-kelompok dalam masyarakat",
        options: ["Proses penyatuan antara kelompok-kelompok dalam masyarakat", "Pemisahan antar suku", "Hanya untuk satu agama", "Hanya untuk satu ras"]
    },
    {
        question: "Apa yang menjadi ciri khas dari kebudayaan lokal?",
        answer: "Nilai-nilai dan tradisi yang berbeda-beda",
        options: ["Nilai-nilai dan tradisi yang berbeda-beda", "Sama di seluruh dunia", "Hanya satu bahasa", "Hanya satu jenis makanan"]
    },
    {
        question: "Apa yang dimaksud dengan konflik sosial?",
        answer: "Pertentangan antara individu atau kelompok dalam masyarakat",
        options: ["Pertentangan antara individu atau kelompok dalam masyarakat", "Kerjasama antar kelompok", "Kegiatan sosial", "Hanya untuk orang dewasa"]
    },
    {
        question: "Siapa yang berperan penting dalam pembentukan negara Indonesia?",
        answer: "Para pahlawan dan pendiri bangsa",
        options: ["Para pahlawan dan pendiri bangsa", "Hanya pemerintah", "Hanya militer", "Hanya orang kaya"]
    },
        {
        question: "Berapa hasil dari 125 + 375?",
        answer: "500",
        options: ["400", "450", "500", "550"]
    },
    {
        question: "Apa proses yang dilakukan tanaman untuk membuat makanan?",
        answer: "Fotosintesis",
        options: ["Respirasi", "Transpirasi", "Fotosintesis", "Digestif"]
    },
    {
        question: "Apa nama peristiwa saat bumi bergerak mengelilingi matahari?",
        answer: "Revolusi",
        options: ["Rotasi", "Revolusi", "Siklus", "Orbit"]
    },
    {
        question: "Apa yang menjadi ibu kota Indonesia?",
        answer: "Jakarta",
        options: ["Surabaya", "Bali", "Jakarta", "Medan"]
    },
    {
        question: "Siapa penemu telepon?",
        answer: "Alexander Graham Bell",
        options: ["Thomas Edison", "Alexander Graham Bell", "Isaac Newton", "Albert Einstein"]
    },
    {
        question: "Berapa 25% dari 200?",
        answer: "50",
        options: ["25", "50", "75", "100"]
    },
    {
        question: "Apa yang dimaksud dengan ciri fisik suatu tempat?",
        answer: "Fitur geografis yang terlihat",
        options: ["Fitur geografis yang terlihat", "Budaya masyarakat", "Ekonomi", "Politik"]
    },
    {
        question: "Siapa yang dikenal sebagai Bapak Proklamasi?",
        answer: "Soekarno",
        options: ["Soeharto", "Soekarno", "B.J. Habibie", "Mohammad Hatta"]
    },
    {
        question: "Apa yang dimaksud dengan ekosistem?",
        answer: "Komunitas makhluk hidup dan lingkungan di sekitarnya",
        options: ["Komunitas makhluk hidup dan lingkungan di sekitarnya", "Hanya tumbuhan", "Hanya hewan", "Hanya manusia"]
    },
    {
        question: "Siapa yang menulis lagu 'Indonesia Raya'?",
        answer: "W.R. Supratman",
        options: ["H. Mutahar", "W.R. Supratman", "Ismail Marzuki", "B.J. Habibie"]
    },
    {
        question: "Apa itu suhu?",
        answer: "Ukuran panas atau dinginnya suatu benda",
        options: ["Ukuran berat benda", "Ukuran panjang benda", "Ukuran panas atau dinginnya suatu benda", "Ukuran luas"]
    },
    {
        question: "Berapa jumlah provinsi di Indonesia saat ini?",
        answer: "38",
        options: ["34", "36", "38", "40"]
    },
    {
        question: "Apa yang dimaksud dengan perbandingan?",
        answer: "Perbandingan antara dua angka atau lebih",
        options: ["Perbandingan antara dua angka atau lebih", "Hasil penjumlahan", "Hasil pengurangan", "Hasil pembagian"]
    },
    {
        question: "Siapa yang dikenal sebagai pahlawan nasional dari Aceh?",
        answer: "Cut Nyak Dien",
        options: ["Raden Ajeng Kartini", "Cut Nyak Dien", "Sultan Agung", "Jenderal Sudirman"]
    },
    {
        question: "Apa yang dimaksud dengan ciri-ciri makhluk hidup?",
        answer: "Ciri yang membedakan makhluk hidup dari benda mati",
        options: ["Ciri yang membedakan makhluk hidup dari benda mati", "Hanya makanan", "Hanya tempat tinggal", "Hanya warna"]
    },
    {
        question: "Apa yang menjadi simbol negara Indonesia?",
        answer: "Garuda Pancasila",
        options: ["Bunga Melati", "Garuda Pancasila", "Bhinneka Tunggal Ika", "Pancasila"]
    },
    {
        question: "Apa yang menjadi pokok pikiran Pancasila?",
        answer: "Dasar negara Indonesia",
        options: ["Dasar negara Indonesia", "Hanya untuk pendidikan", "Hanya untuk pemerintahan", "Hanya untuk rakyat"]
    },
    {
        question: "Berapa hasil dari 15 x 4?",
        answer: "60",
        options: ["50", "55", "60", "65"]
    },
    {
        question: "Apa yang dimaksud dengan transportasi?",
        answer: "Sarana untuk memindahkan orang atau barang",
        options: ["Sarana untuk memindahkan orang atau barang", "Hanya untuk kendaraan", "Hanya untuk barang", "Hanya untuk orang"]
    },
    {
        question: "Siapa yang mengusulkan Sumpah Pemuda?",
        answer: "Pemuda Indonesia",
        options: ["Jenderal Sudirman", "Soeharto", "Pemuda Indonesia", "Soekarno"]
    },
    {
        question: "Apa yang dimaksud dengan waktu?",
        answer: "Ukuran periode antara dua kejadian",
        options: ["Ukuran berat", "Ukuran panjang", "Ukuran periode antara dua kejadian", "Ukuran suhu"]
    },
        {
        question: "Apa yang dimaksud dengan siklus air?",
        answer: "Proses pergerakan air di bumi",
        options: ["Proses penguapan", "Proses pergerakan air di bumi", "Proses pencemaran", "Proses penyimpanan"]
    },
    {
        question: "Apa yang menjadi sumber energi utama bagi tanaman?",
        answer: "Matahari",
        options: ["Matahari", "Air", "Tanah", "Udara"]
    },
    {
        question: "Apa yang dimaksud dengan respirasi?",
        answer: "Proses pengambilan oksigen dan pengeluaran karbon dioksida",
        options: ["Proses pengambilan oksigen dan pengeluaran karbon dioksida", "Proses fotosintesis", "Proses penguapan", "Proses pembiakan"]
    },
    {
        question: "Apa yang terjadi pada air ketika dipanaskan?",
        answer: "Air akan menguap",
        options: ["Air akan menguap", "Air akan membeku", "Air akan mengendap", "Air akan menyusut"]
    },
    {
        question: "Apa yang menjadi bagian dari sistem pencernaan manusia?",
        answer: "Lambung",
        options: ["Jantung", "Lambung", "Hati", "Paru-paru"]
    },
    {
        question: "Apa nama proses di mana tanaman membuat makanan?",
        answer: "Fotosintesis",
        options: ["Respirasi", "Transpirasi", "Fotosintesis", "Infiltrasi"]
    },
    {
        question: "Apa yang dimaksud dengan hewan herbivora?",
        answer: "Hewan pemakan tumbuhan",
        options: ["Hewan pemakan daging", "Hewan pemakan tumbuhan", "Hewan pemakan segala", "Hewan yang tidak makan"]
    },
    {
        question: "Apa yang menjadi fungsi akar pada tanaman?",
        answer: "Menyerap air dan nutrisi",
        options: ["Menyerap air dan nutrisi", "Menghasilkan makanan", "Menghasilkan bunga", "Membuat benih"]
    },
    {
        question: "Apa yang dimaksud dengan pengendapan?",
        answer: "Proses partikel yang mengendap di dasar",
        options: ["Proses pemisahan", "Proses partikel yang mengendap di dasar", "Proses penguapan", "Proses pembekuan"]
    },
    {
        question: "Apa nama alat untuk mengukur suhu?",
        answer: "Termometer",
        options: ["Barometer", "Termometer", "Hygrometer", "Anemometer"]
    },
    {
        question: "Apa yang terjadi pada benda yang dipanaskan?",
        answer: "Benda akan mengembang",
        options: ["Benda akan menyusut", "Benda akan mengembang", "Benda akan pecah", "Benda tidak berubah"]
    },
    {
        question: "Apa yang menjadi sumber utama oksigen di bumi?",
        answer: "Tumbuhan",
        options: ["Tumbuhan", "Hewan", "Air", "Tanah"]
    },
    {
        question: "Apa nama proses di mana air berubah menjadi es?",
        answer: "Pembekuan",
        options: ["Penguapan", "Pembekuan", "Pencairan", "Pengendapan"]
    },
    {
        question: "Apa yang menjadi ciri-ciri makhluk hidup?",
        answer: "Bisa bernapas, bergerak, dan berkembang biak",
        options: ["Bisa bernapas, bergerak, dan berkembang biak", "Hanya bisa bergerak", "Hanya bisa berkembang biak", "Hanya bisa bernapas"]
    },
    {
        question: "Apa yang menjadi penyebab terjadinya gempa bumi?",
        answer: "Pergerakan lempeng bumi",
        options: ["Pergerakan lempeng bumi", "Angin kencang", "Tsunami", "Panas matahari"]
    },
    {
        question: "Apa yang dimaksud dengan ekosistem?",
        answer: "Interaksi antara makhluk hidup dan lingkungannya",
        options: ["Interaksi antara makhluk hidup dan lingkungannya", "Hanya hewan", "Hanya tumbuhan", "Hanya manusia"]
    },
    {
        question: "Apa yang menjadi faktor penyebab pencemaran udara?",
        answer: "Asap kendaraan bermotor",
        options: ["Asap kendaraan bermotor", "Hujan", "Angin", "Sinar matahari"]
    },
    {
        question: "Apa nama bagian dari bunga yang berfungsi untuk menarik serangga?",
        answer: "Kelopak bunga",
        options: ["Daun", "Akar", "Kelopak bunga", "Batang"]
    },
    {
        question: "Apa yang dimaksud dengan fotosintesis pada tumbuhan?",
        answer: "Proses tanaman mengubah cahaya matahari menjadi makanan",
        options: ["Proses tanaman mengubah cahaya matahari menjadi makanan", "Proses pertumbuhan", "Proses pembiakan", "Proses penguraian"]
    },
    {
        question: "Apa yang menjadi ciri dari hewan karnivora?",
        answer: "Memakan daging",
        options: ["Memakan sayuran", "Memakan biji-bijian", "Memakan daging", "Memakan segala"]
    },
        {
        question: "Apa yang dimaksud dengan gaya?",
        answer: "Tarikan atau dorongan yang dapat mengubah gerakan benda",
        options: ["Tarikan atau dorongan yang dapat mengubah gerakan benda", "Hanya dorongan", "Hanya tarikan", "Energi dalam benda"]
    },
    {
        question: "Apa satuan dari massa?",
        answer: "Kilogram",
        options: ["Gram", "Kilogram", "Liter", "Meter"]
    },
    {
        question: "Apa yang terjadi pada benda ketika gaya diberikan?",
        answer: "Benda dapat bergerak atau berhenti",
        options: ["Benda akan hancur", "Benda dapat bergerak atau berhenti", "Benda akan tetap diam", "Benda akan melayang"]
    },
    {
        question: "Apa yang dimaksud dengan energi?",
        answer: "Kemampuan untuk melakukan kerja",
        options: ["Kemampuan untuk melakukan kerja", "Hanya untuk gerakan", "Hanya untuk panas", "Hanya untuk cahaya"]
    },
    {
        question: "Apa satuan dari panjang?",
        answer: "Meter",
        options: ["Liter", "Kilogram", "Meter", "Gram"]
    },
    {
        question: "Apa yang menjadi sumber energi utama di bumi?",
        answer: "Matahari",
        options: ["Baterai", "Matahari", "Angin", "Air"]
    },
    {
        question: "Apa yang dimaksud dengan hukum Newton pertama?",
        answer: "Benda akan tetap dalam keadaan diam atau bergerak lurus jika tidak ada gaya yang bekerja",
        options: ["Benda akan tetap dalam keadaan diam atau bergerak lurus jika tidak ada gaya yang bekerja", "Gaya sama dengan massa dikali percepatan", "Semua benda memiliki energi", "Energi tidak dapat diciptakan"]
    },
    {
        question: "Apa yang terjadi pada benda yang dipanaskan?",
        answer: "Benda akan mengembang",
        options: ["Benda akan mengembang", "Benda akan menyusut", "Benda akan pecah", "Benda tidak berubah"]
    },
    {
        question: "Apa yang dimaksud dengan gravitasi?",
        answer: "Gaya tarik bumi terhadap benda",
        options: ["Gaya tarik bumi terhadap benda", "Gerakan benda", "Energi panas", "Energi listrik"]
    },
    {
        question: "Apa yang dimaksud dengan suara?",
        answer: "Gelombang getaran yang merambat melalui medium",
        options: ["Gelombang getaran yang merambat melalui medium", "Hanya bunyi keras", "Hanya bunyi lembut", "Tidak berhubungan dengan getaran"]
    },
    {
        question: "Apa yang dimaksud dengan panas?",
        answer: "Energi yang menyebabkan peningkatan suhu",
        options: ["Energi yang menyebabkan peningkatan suhu", "Energi yang membuat benda bergerak", "Energi yang tidak terlihat", "Energi yang membuat suara"]
    },
    {
        question: "Apa yang dimaksud dengan cahaya?",
        answer: "Energi yang dapat dilihat oleh mata",
        options: ["Energi yang dapat dilihat oleh mata", "Hanya sinar matahari", "Hanya dari lampu", "Tidak dapat dilihat"]
    },
    {
        question: "Apa yang terjadi pada benda jika energi kinetiknya bertambah?",
        answer: "Kecepatan benda meningkat",
        options: ["Kecepatan benda meningkat", "Kecepatan benda menurun", "Benda menjadi dingin", "Benda menjadi berat"]
    },
    {
        question: "Apa yang dimaksud dengan energi potensial?",
        answer: "Energi yang dimiliki benda karena posisinya",
        options: ["Energi yang dimiliki benda karena posisinya", "Energi yang bergerak", "Energi yang dihasilkan dari makanan", "Energi yang tidak terlihat"]
    },
    {
        question: "Apa yang menjadi alat untuk mengukur waktu?",
        answer: "Jam",
        options: ["Mikroskop", "Jam", "Termometer", "Barometer"]
    },
    {
        question: "Apa yang terjadi jika kita menjatuhkan dua benda dengan massa berbeda dari ketinggian yang sama?",
        answer: "Keduanya akan jatuh ke tanah pada waktu yang bersamaan",
        options: ["Benda ringan jatuh lebih cepat", "Benda berat jatuh lebih cepat", "Keduanya akan jatuh ke tanah pada waktu yang bersamaan", "Benda tidak jatuh"]
    },
    {
        question: "Apa yang menjadi penyebab benda bergerak?",
        answer: "Gaya yang bekerja pada benda",
        options: ["Gaya yang bekerja pada benda", "Berat benda", "Kelembapan", "Suhu"]
    },
    {
        question: "Apa yang dimaksud dengan gaya gesek?",
        answer: "Gaya yang menghambat gerakan benda",
        options: ["Gaya yang menghambat gerakan benda", "Gaya yang mempercepat gerakan", "Gaya yang menarik benda", "Gaya yang membuat suara"]
    },
    {
        question: "Apa yang dimaksud dengan titik didih?",
        answer: "Suhu di mana suatu zat mulai mendidih",
        options: ["Suhu di mana suatu zat mulai mendidih", "Suhu di mana zat membeku", "Suhu ruangan", "Suhu terendah"]
    },
    {
        question: "Apa yang dimaksud dengan refleksi cahaya?",
        answer: "Cahaya yang memantul kembali setelah mengenai permukaan",
        options: ["Cahaya yang memantul kembali setelah mengenai permukaan", "Cahaya yang menembus", "Cahaya yang merata", "Cahaya yang hilang"]
    },
        {
        question: "Apa yang dimaksud dengan fotosintesis?",
        answer: "Proses di mana tanaman mengubah cahaya matahari menjadi makanan",
        options: ["Proses di mana tanaman mengubah cahaya matahari menjadi makanan", "Proses pertumbuhan hewan", "Proses penguraian", "Proses reproduksi"]
    },
    {
        question: "Apa yang menjadi bagian dari sel tumbuhan yang berfungsi untuk fotosintesis?",
        answer: "Kloroplas",
        options: ["Mitochondria", "Kloroplas", "Nukleus", "Ribosom"]
    },
    {
        question: "Apa yang dimaksud dengan reproduksi?",
        answer: "Proses perkembangbiakan makhluk hidup",
        options: ["Proses perkembangbiakan makhluk hidup", "Proses pertumbuhan", "Proses pemisahan", "Proses perubahan energi"]
    },
    {
        question: "Apa yang menjadi ciri khas dari hewan mamalia?",
        answer: "Menyusui anaknya",
        options: ["Bertelur", "Menyusui anaknya", "Hibernasi", "Berenang"]
    },
    {
        question: "Apa yang dimaksud dengan ekosistem?",
        answer: "Interaksi antara makhluk hidup dan lingkungan sekitarnya",
        options: ["Interaksi antara makhluk hidup dan lingkungan sekitarnya", "Hanya hewan", "Hanya tumbuhan", "Hanya manusia"]
    },
    {
        question: "Apa yang menjadi contoh hewan herbivora?",
        answer: "Kambing",
        options: ["Kucing", "Kambing", "Singa", "Ular"]
    },
    {
        question: "Apa yang dimaksud dengan keanekaragaman hayati?",
        answer: "Variasi makhluk hidup di suatu daerah",
        options: ["Variasi makhluk hidup di suatu daerah", "Hanya hewan", "Hanya tumbuhan", "Jumlah makhluk hidup yang sedikit"]
    },
    {
        question: "Apa yang menjadi ciri khas dari tumbuhan berbunga?",
        answer: "Menghasilkan bunga dan buah",
        options: ["Menghasilkan umbi", "Menghasilkan bunga dan buah", "Tidak berbunga", "Hanya tumbuhan kecil"]
    },
    {
        question: "Apa yang dimaksud dengan predator?",
        answer: "Hewan pemangsa",
        options: ["Hewan pemangsa", "Hewan pemakan tumbuhan", "Hewan pemakan bangkai", "Hewan yang tidak makan"]
    },
    {
        question: "Apa yang menjadi fungsi daun pada tanaman?",
        answer: "Tempat fotosintesis",
        options: ["Tempat fotosintesis", "Tempat penyimpanan air", "Tempat penyimpanan nutrisi", "Tempat pertumbuhan akar"]
    },
    {
        question: "Apa yang dimaksud dengan hibernasi?",
        answer: "Tidur panjang hewan saat cuaca dingin",
        options: ["Tidur panjang hewan saat cuaca dingin", "Bergerak aktif di malam hari", "Berenang", "Makan banyak"]
    },
    {
        question: "Apa yang menjadi penyebab kerusakan ekosistem?",
        answer: "Penebangan hutan",
        options: ["Penebangan hutan", "Pertanian", "Budidaya ikan", "Kegiatan bercocok tanam"]
    },
    {
        question: "Apa yang dimaksud dengan fotosintesis pada tumbuhan?",
        answer: "Proses di mana tanaman menghasilkan makanan dengan bantuan cahaya",
        options: ["Proses di mana tanaman menghasilkan makanan dengan bantuan cahaya", "Proses penguraian", "Proses pembuatan obat", "Proses pertumbuhan"]
    },
    {
        question: "Apa yang menjadi ciri dari hewan vertebrata?",
        answer: "Memiliki tulang belakang",
        options: ["Tidak memiliki tulang belakang", "Memiliki tulang belakang", "Hanya bisa terbang", "Hanya bisa hidup di air"]
    },
    {
        question: "Apa yang dimaksud dengan spesies?",
        answer: "Kelompok makhluk hidup yang memiliki kesamaan",
        options: ["Kelompok makhluk hidup yang memiliki kesamaan", "Semua makhluk hidup", "Makhluk hidup yang langka", "Makhluk hidup yang punah"]
    },
    {
        question: "Apa yang menjadi contoh tanaman penghasil biji?",
        answer: "Padi",
        options: ["Padi", "Kaktus", "Alga", "Jamur"]
    },
    {
        question: "Apa yang menjadi fungsi akar bagi tanaman?",
        answer: "Menyerap air dan nutrisi",
        options: ["Menyimpan makanan", "Menyerap air dan nutrisi", "Menghasilkan bunga", "Menghasilkan buah"]
    },
    {
        question: "Apa yang dimaksud dengan adaptasi?",
        answer: "Kemampuan makhluk hidup menyesuaikan diri dengan lingkungan",
        options: ["Kemampuan makhluk hidup menyesuaikan diri dengan lingkungan", "Perkembangbiakan", "Proses fotosintesis", "Pemakanannya"]
    },
    {
        question: "Apa yang menjadi contoh hewan omnivora?",
        answer: "Bebek",
        options: ["Bebek", "Singa", "Kambing", "Ular"]
    },
    {
        question: "Apa yang dimaksud dengan organisme?",
        answer: "Makhluk hidup",
        options: ["Makhluk hidup", "Benda mati", "Zat kimia", "Proses"]
    },
        {
        question: "Apa hasil dari 3/4 + 1/4?",
        answer: "1",
        options: ["1/4", "1/2", "1", "2"]
    },
    {
        question: "Jika panjang sebuah meja 2,5 meter, berapa sentimeter panjangnya?",
        answer: "250 cm",
        options: ["25 cm", "250 cm", "2,5 cm", "200 cm"]
    },
    {
        question: "Apa hasil dari 12 × 8?",
        answer: "96",
        options: ["80", "96", "100", "90"]
    },
    {
        question: "Jika sebuah buku beratnya 300 gram, berapa berat 5 buku?",
        answer: "1500 gram",
        options: ["150 gram", "1500 gram", "1000 gram", "500 gram"]
    },
    {
        question: "Apa yang dimaksud dengan bilangan desimal?",
        answer: "Bilangan yang memiliki koma",
        options: ["Bilangan bulat", "Bilangan negatif", "Bilangan yang memiliki koma", "Bilangan cacah"]
    },
        {
        question: "Apa yang dimaksud dengan ekosistem?",
        answer: "Interaksi antara makhluk hidup dan lingkungan",
        options: ["Hanya hewan", "Hanya tumbuhan", "Interaksi antara makhluk hidup dan lingkungan", "Semua makhluk hidup"]
    },
    {
        question: "Apa yang menjadi sumber energi utama bagi manusia?",
        answer: "Matahari",
        options: ["Angin", "Air", "Matahari", "Baterai"]
    },
    {
        question: "Apa yang dimaksud dengan fotosintesis?",
        answer: "Proses di mana tanaman mengubah cahaya matahari menjadi makanan",
        options: ["Proses pembuatan obat", "Proses di mana tanaman mengubah cahaya matahari menjadi makanan", "Proses reproduksi", "Proses penguraian"]
    },
    {
        question: "Apa yang menjadi bagian dari sistem peredaran darah?",
        answer: "Jantung",
        options: ["Lambung", "Jantung", "Paru-paru", "Hati"]
    },
    {
        question: "Apa yang dimaksud dengan predator?",
        answer: "Hewan pemangsa",
        options: ["Hewan pemakan tumbuhan", "Hewan pemangsa", "Hewan pemakan bangkai", "Hewan yang tidak makan"]
    },
        {
        question: "Apa yang menjadi ciri khas dari budaya Indonesia?",
        answer: "Keberagaman",
        options: ["Kesatuan", "Keberagaman", "Kesederhanaan", "Kekayaan"]
    },
    {
        question: "Apa yang dimaksud dengan peta?",
        answer: "Representasi visual dari wilayah",
        options: ["Gambar langit", "Representasi visual dari wilayah", "Daftar kota", "Dokumen sejarah"]
    },
    {
        question: "Siapa yang dikenal sebagai Bapak Proklamator Indonesia?",
        answer: "Soekarno",
        options: ["Jenderal Soedirman", "Soekarno", "Suharto", "Hatta"]
    },
    {
        question: "Apa yang menjadi tujuan dari kegiatan pertanian?",
        answer: "Memproduksi makanan",
        options: ["Memproduksi barang", "Memproduksi makanan", "Menghasilkan energi", "Meningkatkan ekonomi"]
    },
    {
        question: "Apa yang dimaksud dengan demografi?",
        answer: "Studi tentang populasi",
        options: ["Studi tentang sejarah", "Studi tentang populasi", "Studi tentang budaya", "Studi tentang ekonomi"]
    },
        {
        question: "Apa yang dimaksud dengan kalimat efektif?",
        answer: "Kalimat yang jelas dan padat",
        options: ["Kalimat yang panjang", "Kalimat yang tidak jelas", "Kalimat yang jelas dan padat", "Kalimat yang rumit"]
    },
    {
        question: "Apa yang menjadi struktur utama dari sebuah cerita?",
        answer: "Awal, tengah, akhir",
        options: ["Pengantar, isi, penutup", "Awal, tengah, akhir", "Deskripsi, dialog, narasi", "Plot, tema, karakter"]
    },
    {
        question: "Apa yang dimaksud dengan sinonim?",
        answer: "Kata yang memiliki makna sama",
        options: ["Kata yang memiliki makna berbeda", "Kata yang memiliki makna sama", "Kata yang tidak dikenal", "Kata yang jarang digunakan"]
    },
    {
        question: "Apa yang dimaksud dengan puisi?",
        answer: "Karya sastra yang berirama dan berima",
        options: ["Karya tulis ilmiah", "Karya sastra yang berirama dan berima", "Cerita pendek", "Novel"]
    },
    {
        question: "Apa yang menjadi tujuan dari membaca?",
        answer: "Mendapatkan informasi dan pengetahuan",
        options: ["Mendapatkan informasi dan pengetahuan", "Menghibur diri", "Menyenangkan orang lain", "Menghabiskan waktu"]
    },
        {
        question: "Apa yang dimaksud dengan hak asasi manusia?",
        answer: "Hak yang dimiliki setiap orang sejak lahir",
        options: ["Hak yang diberikan oleh pemerintah", "Hak yang dimiliki setiap orang sejak lahir", "Hak yang hanya dimiliki oleh warga negara", "Hak yang dapat dicabut"]
    },
    {
        question: "Apa yang menjadi prinsip Pancasila yang pertama?",
        answer: "Ketuhanan yang Maha Esa",
        options: ["Kemanusiaan yang adil dan beradab", "Persatuan Indonesia", "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan", "Ketuhanan yang Maha Esa"]
    },
    {
        question: "Apa yang menjadi kewajiban warga negara?",
        answer: "Mematuhi hukum",
        options: ["Hanya memilih pemimpin", "Mematuhi hukum", "Menikmati hak", "Berdiam diri"]
    },
    {
        question: "Apa yang dimaksud dengan demokrasi?",
        answer: "Sistem pemerintahan oleh rakyat",
        options: ["Sistem pemerintahan oleh rakyat", "Sistem pemerintahan oleh satu orang", "Sistem pemerintahan oleh militer", "Sistem pemerintahan oleh pihak asing"]
    },
    {
        question: "Apa yang menjadi tujuan dari pendidikan kewarganegaraan?",
        answer: "Membentuk warga negara yang baik",
        options: ["Membentuk pemimpin", "Membentuk warga negara yang baik", "Membentuk penulis", "Membentuk seniman"]
    },
        {
        question: "What is the capital of Indonesia?",
        answer: "Jakarta",
        options: ["Bali", "Jakarta", "Surabaya", "Bandung"]
    },
    {
        question: "What is the opposite of 'hot'?",
        answer: "Cold",
        options: ["Warm", "Cold", "Cool", "Sunny"]
    },
    {
        question: "How many days are there in a week?",
        answer: "Seven",
        options: ["Five", "Six", "Seven", "Eight"]
    },
    {
        question: "What do we call the color of the sky on a clear day?",
        answer: "Blue",
        options: ["Red", "Green", "Blue", "Yellow"]
    },
    {
        question: "What is the past tense of 'go'?",
        answer: "Went",
        options: ["Gone", "Go", "Goes", "Went"]
    },
    {
        question: "What do you call a baby cat?",
        answer: "Kitten",
        options: ["Puppy", "Kitten", "Cub", "Foal"]
    },
    {
        question: "Which word is a synonym for 'happy'?",
        answer: "Joyful",
        options: ["Sad", "Angry", "Joyful", "Bored"]
    },
    {
        question: "What is the first month of the year?",
        answer: "January",
        options: ["February", "January", "March", "April"]
    },
    {
        question: "How many colors are there in a rainbow?",
        answer: "Seven",
        options: ["Five", "Six", "Seven", "Eight"]
    },
    {
        question: "What is the English word for 'kucing'?",
        answer: "Cat",
        options: ["Dog", "Cat", "Bird", "Fish"]
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        answer: "Lion",
        options: ["Tiger", "Elephant", "Lion", "Bear"]
    },
    {
        question: "What do we use to write on paper?",
        answer: "Pen",
        options: ["Brush", "Pen", "Chalk", "Crayon"]
    },
    {
        question: "What is the opposite of 'big'?",
        answer: "Small",
        options: ["Large", "Huge", "Small", "Wide"]
    },
    {
        question: "Which of these is a fruit?",
        answer: "Apple",
        options: ["Carrot", "Apple", "Broccoli", "Potato"]
    },
    {
        question: "What is the term for a story that is made up?",
        answer: "Fiction",
        options: ["Non-fiction", "Biography", "Fiction", "Documentary"]
    },
    {
        question: "What do you call a person who teaches students?",
        answer: "Teacher",
        options: ["Doctor", "Engineer", "Teacher", "Nurse"]
    },
    {
        question: "What is the weather like when it is raining?",
        answer: "Wet",
        options: ["Dry", "Hot", "Wet", "Cold"]
    },
    {
        question: "What is the correct spelling of 'beruang' in English?",
        answer: "Bear",
        options: ["Beir", "Beer", "Bear", "Bearr"]
    },
    {
        question: "What do we call the celebration of the new year?",
        answer: "New Year's Day",
        options: ["Christmas", "New Year's Day", "Eid", "Halloween"]
    },
    {
        question: "What is the color of grass?",
        answer: "Green",
        options: ["Blue", "Yellow", "Green", "Red"]
    },
        {
        question: "What is the capital of Indonesia?",
        answer: "Jakarta",
        options: ["Bali", "Jakarta", "Surabaya", "Bandung"]
    },
    {
        question: "What is the opposite of 'hot'?",
        answer: "Cold",
        options: ["Warm", "Cold", "Cool", "Sunny"]
    },
    {
        question: "How many days are there in a week?",
        answer: "Seven",
        options: ["Five", "Six", "Seven", "Eight"]
    },
    {
        question: "What color is the sky on a clear day?",
        answer: "Blue",
        options: ["Red", "Green", "Blue", "Yellow"]
    },
    {
        question: "What is the past tense of 'go'?",
        answer: "Went",
        options: ["Gone", "Go", "Goes", "Went"]
    },
    {
        question: "What do you call a baby cat?",
        answer: "Kitten",
        options: ["Puppy", "Kitten", "Cub", "Foal"]
    },
    {
        question: "Which word is a synonym for 'happy'?",
        answer: "Joyful",
        options: ["Sad", "Angry", "Joyful", "Bored"]
    },
    {
        question: "What is the first month of the year?",
        answer: "January",
        options: ["February", "January", "March", "April"]
    },
    {
        question: "How many colors are there in a rainbow?",
        answer: "Seven",
        options: ["Five", "Six", "Seven", "Eight"]
    },
    {
        question: "What is the English word for 'kucing'?",
        answer: "Cat",
        options: ["Dog", "Cat", "Bird", "Fish"]
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        answer: "Lion",
        options: ["Tiger", "Elephant", "Lion", "Bear"]
    },
    {
        question: "What do we use to write on paper?",
        answer: "Pen",
        options: ["Brush", "Pen", "Chalk", "Crayon"]
    },
    {
        question: "What is the opposite of 'big'?",
        answer: "Small",
        options: ["Large", "Huge", "Small", "Wide"]
    },
    {
        question: "Which of these is a fruit?",
        answer: "Apple",
        options: ["Carrot", "Apple", "Broccoli", "Potato"]
    },
    {
        question: "What is the term for a story that is made up?",
        answer: "Fiction",
        options: ["Non-fiction", "Biography", "Fiction", "Documentary"]
    },
    {
        question: "What do you call a person who teaches students?",
        answer: "Teacher",
        options: ["Doctor", "Engineer", "Teacher", "Nurse"]
    },
    {
        question: "What is the weather like when it is raining?",
        answer: "Wet",
        options: ["Dry", "Hot", "Wet", "Cold"]
    },
    {
        question: "What is the correct spelling of 'beruang' in English?",
        answer: "Bear",
        options: ["Beir", "Beer", "Bear", "Bearr"]
    },
    {
        question: "What do we call the celebration of the new year?",
        answer: "New Year's Day",
        options: ["Christmas", "New Year's Day", "Eid", "Halloween"]
    },
    {
        question: "What color is grass?",
        answer: "Green",
        options: ["Blue", "Yellow", "Green", "Red"]
    },
    {
question: "Siapa nabi terakhir dalam Islam?",
answer: "Nabi Muhammad",
options: ["Nabi Musa", "Nabi Isa", "Nabi Muhammad", "Nabi Ibrahim"]
},
{
question: "Apa kitab suci umat Islam?",
answer: "Al-Qur'an",
options: ["Al-Qur'an", "Injil", "Taurat", "Zabur"]
},
{
question: "Apa nama hari raya umat Islam yang dirayakan setelah sebulan berpuasa di bulan Ramadan?",
answer: "Idul Fitri",
options: ["Idul Adha", "Maulid Nabi", "Isra Mi'raj", "Idul Fitri"]
},
{
question: "Berapa jumlah rukun Islam?",
answer: "5",
options: ["3", "4", "5", "6"]
},
{
question: "Apa nama tempat ibadah umat Islam?",
answer: "Masjid",
options: ["Gereja", "Pura", "Vihara", "Masjid"]
},
{
question: "Apa arti kata 'Islam'?",
answer: "Kedamaian",
options: ["Perjuangan", "Kedamaian", "Kebebasan", "Kasih sayang"]
},
{
question: "Siapa malaikat yang menyampaikan wahyu kepada Nabi Muhammad?",
answer: "Malaikat Jibril",
options: ["Malaikat Mikail", "Malaikat Jibril", "Malaikat Israfil", "Malaikat Munkar"]
},
{
question: "Apa nama bulan dalam kalender Islam yang diwajibkan berpuasa?",
answer: "Ramadan",
options: ["Syawal", "Muharram", "Rajab", "Ramadan"]
},
{
question: "Apa nama kota kelahiran Nabi Muhammad?",
answer: "Mekah",
options: ["Madinah", "Jerusalem", "Baghdad", "Mekah"]
},
{
question: "Apa arti kata 'Al-Qur'an'?",
answer: "Bacaan",
options: ["Tulisan", "Bacaan", "Cerita", "Pesan"]
},
{
question: "Berapa kali umat Islam diwajibkan shalat dalam sehari?",
answer: "5",
options: ["3", "5", "7", "9"]
},
{
question: "Apa nama ibadah haji kecil yang dilakukan di luar musim haji?",
answer: "Umrah",
options: ["Umrah", "Tawaf", "Sai", "Arafah"]
},
{
question: "Apa nama kota tempat Nabi Muhammad hijrah?",
answer: "Madinah",
options: ["Mekah", "Jerusalem", "Baghdad", "Madinah"]
},
{
question: "Apa nama surah pertama dalam Al-Qur'an?",
answer: "Al-Fatihah",
options: ["Al-Baqarah", "Al-Fatihah", "An-Nas", "Al-Ikhlas"]
},
{
question: "Siapa khalifah pertama dalam sejarah Islam?",
answer: "Abu Bakar As-Siddiq",
options: ["Umar bin Khattab", "Utsman bin Affan", "Ali bin Abi Thalib", "Abu Bakar As-Siddiq"]
},
{
question: "Apa saja rukun Islam yang ketiga?",
answer: "Zakat",
options: ["Shalat", "Puasa", "Zakat", "Haji"]
},
{
question: "Apa arti kata 'iman' dalam Islam?",
answer: "Kepercayaan",
options: ["Kepercayaan", "Ketaatan", "Kepedulian", "Kedermawanan"]
},
{
question: "Berapa jumlah malaikat yang wajib diketahui dalam Islam?",
answer: "10",
options: ["8", "10", "12", "14"]
},
{
question: "Apa nama ibadah puasa wajib bagi umat Islam?",
answer: "Puasa Ramadan",
options: ["Puasa Syawal", "Puasa Arafah", "Puasa Asyura", "Puasa Ramadan"]
},
{
question: "Apa nama surah terakhir dalam Al-Qur'an?",
answer: "An-Nas",
options: ["Al-Falaq", "Al-Ikhlas", "An-Nas", "Al-Kafirun"]
},
{
question: "Apa nama malaikat yang bertugas meniup sangkakala pada hari kiamat?",
answer: "Malaikat Israfil",
options: ["Malaikat Jibril", "Malaikat Mikail", "Malaikat Israfil", "Malaikat Munkar"]
},
{
question: "Apa nama bulan pertama dalam kalender Islam?",
answer: "Muharram",
options: ["Muharram", "Ramadan", "Syawal", "Rajab"]
},
{
question: "Apa nama malam yang lebih baik dari seribu bulan?",
answer: "Lailatul Qadr",
options: ["Lailatul Qadr", "Isra Mi'raj", "Nuzulul Qur'an", "Maulid Nabi"]
},
{
question: "Siapa istri pertama Nabi Muhammad?",
answer: "Khadijah",
options: ["Aisyah", "Khadijah", "Hafsah", "Zainab"]
},
{
question: "Apa nama kitab suci yang diturunkan kepada Nabi Musa?",
answer: "Taurat",
options: ["Al-Qur'an", "Injil", "Taurat", "Zabur"]
},
{
question: "Apa nama kitab suci yang diturunkan kepada Nabi Isa?",
answer: "Injil",
options: ["Al-Qur'an", "Injil", "Taurat", "Zabur"]
},
{
question: "Apa nama kitab suci yang diturunkan kepada Nabi Daud?",
answer: "Zabur",
options: ["Al-Qur'an", "Injil", "Taurat", "Zabur"]
},
{
question: "Siapa nama ayah Nabi Muhammad?",
answer: "Abdullah",
options: ["Abdul Muttalib", "Abu Talib", "Abdullah", "Abu Lahab"]
},
{
question: "Siapa nama ibu Nabi Muhammad?",
answer: "Aminah",
options: ["Aminah", "Halimah", "Khadijah", "Aisyah"]
},
{
question: "Apa nama peristiwa naiknya Nabi Muhammad ke langit untuk menerima perintah shalat?",
answer: "Isra Mi'raj",
options: ["Isra Mi'raj", "Lailatul Qadr", "Hijrah", "Haji Wada"]
},
{
question: "Apa nama perang pertama yang diikuti oleh Nabi Muhammad?",
answer: "Perang Badar",
options: ["Perang Uhud", "Perang Khandaq", "Perang Badar", "Perang Tabuk"]
},
{
question: "Apa nama masjid pertama yang dibangun oleh Nabi Muhammad?",
answer: "Masjid Quba",
options: ["Masjid Nabawi", "Masjid Quba", "Masjid Al-Aqsa", "Masjid Al-Haram"]
},
{
question: "Apa nama peristiwa hijrahnya Nabi Muhammad dari Mekah ke Madinah?",
answer: "Hijrah",
options: ["Hijrah", "Isra Mi'raj", "Lailatul Qadr", "Haji Wada"]
},
{
question: "Apa nama surat dalam Al-Qur'an yang paling pendek?",
answer: "Al-Kausar",
options: ["Al-Ikhlas", "Al-Kafirun", "Al-Falaq", "Al-Kausar"]
},
{
question: "Apa nama surat dalam Al-Qur'an yang paling panjang?",
answer: "Al-Baqarah",
options: ["Al-Baqarah", "Ali Imran", "An-Nisa", "Al-Maidah"]
},
{
question: "Siapa nama malaikat yang bertugas mencatat amal manusia?",
answer: "Malaikat Raqib dan Atid",
options: ["Malaikat Jibril dan Mikail", "Malaikat Raqib dan Atid", "Malaikat Israfil dan Izrail", "Malaikat Munkar dan Nakir"]
},
{
question: "Apa nama sungai yang dijanjikan bagi orang-orang yang beriman di surga?",
answer: "Sungai Kautsar",
options: ["Sungai Nil", "Sungai Eufrat", "Sungai Kautsar", "Sungai Salsabil"]
},
{
question: "Siapa nama malaikat yang bertugas mencabut nyawa?",
answer: "Malaikat Izrail",
options: ["Malaikat Jibril", "Malaikat Mikail", "Malaikat Izrail", "Malaikat Israfil"]
},
{
question: "Apa nama surah yang menceritakan kisah Nabi Yusuf?",
answer: "Surah Yusuf",
options: ["Surah Maryam", "Surah Yusuf", "Surah Ibrahim", "Surah Nuh"]
}
    // Tambahkan pertanyaan lain di sini
];


module.exports = triviaQuestions;
