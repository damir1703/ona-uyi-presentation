export type Lang = "ru" | "uz";

export const houses = [
  { num: 1, city_ru: "Ташкент (Дом 1)", city_uz: "Toshkent (1-uy)", lat: 41.2995, lng: 69.2401, desc_ru: "Первый ресурсный центр. Открыт июнь 2024", desc_uz: "Birinchi resurs markaz. Iyun 2024 da ochildi" },
  { num: 2, city_ru: "Ташкент (Дом 2)", city_uz: "Toshkent (2-uy)", lat: 41.3111, lng: 69.2797, desc_ru: "Второй дом в Ташкенте", desc_uz: "Toshkentdagi ikkinchi uy" },
  { num: 3, city_ru: "Чирчик", city_uz: "Chirchiq", lat: 41.4686, lng: 69.5826, desc_ru: "В 30 км от Ташкента", desc_uz: "Toshkentdan 30 km" },
  { num: 4, city_ru: "Нукус", city_uz: "Nukus", lat: 42.4602, lng: 59.6102, desc_ru: "Столица Каракалпакстана. Открыт февраль 2026", desc_uz: "Qoraqalpog'iston poytaxti. Fevral 2026 da ochildi" },
  { num: 5, city_ru: "Самарканд", city_uz: "Samarqand", lat: 39.6542, lng: 66.9597, desc_ru: "Исторический центр Узбекистана", desc_uz: "O'zbekistonning tarixiy markazi" },
  { num: 6, city_ru: "Бухара", city_uz: "Buxoro", lat: 39.768, lng: 64.4219, desc_ru: "Юго-западный регион", desc_uz: "Janubi-g'arbiy viloyat" },
  { num: 7, city_ru: "Андижан", city_uz: "Andijon", lat: 40.7829, lng: 72.3442, desc_ru: "Ферганская долина, восток", desc_uz: "Farg'ona vodiysi, sharq" },
  { num: 8, city_ru: "Кувасой", city_uz: "Quvosoy", lat: 40.2983, lng: 71.5167, desc_ru: "Рядом с Андижаном", desc_uz: "Andijon yaqinida" },
];

export const content = {
  meta: {
    brand: { ru: "ONA UYI", uz: "ONA UYI" },
    pdf: { ru: "Скачать PDF", uz: "PDF yuklab olish" },
    upload: { ru: "Нажмите или перетащите фото", uz: "Rasm yuklang yoki torting" },
    uploadGrid: { ru: "Фото", uz: "Rasm" },
  },
  slide01: {
    tag: { ru: "МЕЖДУНАРОДНЫЙ БЛАГОТВОРИТЕЛЬНЫЙ ФОНД", uz: "XALQARO XAYRIYA JAMG'ARMASI" },
    title: "ONA UYI",
    sub: { ru: "Дом №1, Ташкент", uz: "1-uy, Toshkent" },
    desc: {
      ru: "Ресурсный центр помощи мамам с детьми в трудной жизненной ситуации. Открыт при поддержке НАСЗ в июне 2024 года.",
      uz: "Qiyin vaziyatdagi onalar va bolalarga yordam ko'rsatuvchi resurs markaz. NASZ yordamida 2024-yil iyunda ochildi.",
    },
    stats: [
      { ru: "8 домов", uz: "8 uy", color: "#064E3B" },
      { ru: "212+ мам", uz: "212+ ona", color: "#D97706" },
      { ru: "100% бесплатно", uz: "100% bepul", color: "#0D9488" },
    ],
    housesLabel: { ru: "8 домов", uz: "8 uy" },
    footer: { ru: "Здесь каждая мама знает: она не одна", uz: "Bu yerda har bir ona biladi: u yolg'iz emas" },
  },
  slide02: {
    banner: {
      ru: "Официальное открытие ресурсного центра «ONA UYI» (Дом №1) при поддержке НАСЗ в городе Ташкент",
      uz: "«ONA UYI» resurs markazining (1-uy) NASZ yordamida Toshkent shahrida rasmiy ochilishi",
    },
    date: { ru: "Июнь 2024", uz: "Iyun 2024" },
    photo1: { ru: "Официальная церемония", uz: "Rasmiy marosim" },
    photo2: { ru: "Команда фонда и партнёры", uz: "Jamoa va hamkorlar" },
  },
  slide03: {
    title: { ru: "Проект «ONA UYI» — Кому мы помогаем?", uz: "Loyiha «ONA UYI» — Kimga yordam beramiz?" },
    categories: [
      { icon: "🤱", title: { ru: "Женщины в трудной жизненной ситуации", uz: "Qiyin hayotiy vaziyatdagi ayollar" }, sub: { ru: "с новорождённым ребёнком на руках", uz: "yangi tug'ilgan bola bilan" } },
      { icon: "🏠", title: { ru: "Женщины, вынужденно оставившие ребёнка", uz: "Bolasini majburan tashlab ketgan ayollar" }, sub: { ru: "в интернатном учреждении", uz: "internat muassasasida" } },
      { icon: "💔", title: { ru: "Женщины на грани отказа от ребёнка", uz: "Boladan voz kechish xavfi ostidagi ayollar" }, sub: { ru: "из-за тяжёлой жизненной ситуации", uz: "og'ir hayotiy vaziyat tufayli" } },
    ],
    criteria: [
      { icon: "👩", ru: "Возраст: 16–40 лет", uz: "Yosh: 16–40" },
      { icon: "👶", ru: "Дети до 6 лет", uz: "6 yoshgacha bolalar" },
      { icon: "🤰", ru: "Беременные с 3-го триместра", uz: "3-chi trimestrdan homilador" },
      { icon: "🏛", ru: "Через центры «Инсон» при НАСЗ", uz: "«Inson» markazi orqali" },
      { icon: "✅", ru: "Всё бесплатно и конфиденциально", uz: "Hammasi bepul va maxfiy" },
    ],
  },
  slide04: {
    title: { ru: "Какую помощь мы оказываем", uz: "Qanday yordam ko'rsatamiz" },
    text1: {
      ru: "Проект «ONA UYI» оказывает помощь матерям, давая им возможность самим растить своих детей.",
      uz: "«ONA UYI» loyihasi onalarga o'z farzandlarini o'zlari tarbiyalash imkoniyatini berish orqali yordam ko'rsatadi.",
    },
    text2: {
      ru: "«ONA UYI» предлагает жильё, питание, медицинское обслуживание и всё необходимое для жизни на срок до 6 месяцев.",
      uz: "«ONA UYI» ayollarga uy-joy, ovqat, tibbiy xizmat va 6 oygacha hayot uchun zarur barcha narsalarni taqdim etadi.",
    },
    services: [
      { icon: "🏠", ru: "Проживание до 6 месяцев (продление +6 мес.)", uz: "Turar joy 6 oygacha (uzaytirish mumkin)", color: "#065F46" },
      { icon: "🧠", ru: "Психологическая поддержка с первого дня", uz: "Psixologik qo'llab-quvvatlash birinchi kundan", color: "#0D9488" },
      { icon: "🏥", ru: "Медицинская помощь", uz: "Tibbiy yordam", color: "#065F46" },
      { icon: "📄", ru: "Восстановление документов и оформление пособий", uz: "Hujjatlarni tiklash va nafaqalar rasmiylashtirish", color: "#0D9488" },
      { icon: "📚", ru: "Обучение профессии и ремеслу", uz: "Kasb va hunar o'rgatish", color: "#065F46" },
      { icon: "💼", ru: "Стажировки и трудоустройство", uz: "Amaliyot va ish bilan ta'minlash", color: "#0D9488" },
    ],
  },
  slide05: {
    title: { ru: "ОСНОВНЫЕ РЕЗУЛЬТАТЫ ДЕЯТЕЛЬНОСТИ «ONA UYI»", uz: "ONA UYI FAOLIYATINING ASOSIY NATIJALARI" },
    period: { ru: "Июнь 2024 — Июль 2026", uz: "Iyun 2024 — Iyul 2026" },
    stats_big: [
      { num: 212, ru: "мам получили помощь", uz: "ona yordam oldi", grad: "linear-gradient(135deg, #10B981, #0D9488)" },
      { num: 102, ru: "детей остались с мамами", uz: "bola onasi bilan qoldi", grad: "linear-gradient(135deg, #F59E0B, #D97706)" },
      { num: 76, ru: "женщин вышли из кризиса", uz: "ayol inqirozdan chiqdi", grad: "linear-gradient(135deg, #065F46, #064E3B)" },
      { num: 36, ru: "выпускниц Дома №1", uz: "1-uy bitiruvchisi", grad: "linear-gradient(135deg, #0D9488, #065F46)" },
    ],
    stats_small: [
      { num: 74, ru: "Трудная жизненная ситуация (ТЖС)", uz: "TQV (qiyin hayotiy vaziyat)", tint: "rgba(16,185,129,0.16)", border: "rgba(52,211,153,0.35)" },
      { num: 3, ru: "Риск изъятия ребёнка", uz: "Bolani olib qo'yish xavfi", tint: "rgba(190,18,60,0.16)", border: "rgba(244,63,94,0.35)" },
      { num: 34, ru: "ЖБН (жертвы бытового насилия)", uz: "JBH", tint: "rgba(217,119,6,0.16)", border: "rgba(245,158,11,0.35)" },
      { num: 101, ru: "Риск отказа от ребёнка", uz: "Boladan voz kechish xavfi", tint: "rgba(6,95,70,0.35)", border: "rgba(52,211,153,0.3)" },
    ],
  },
  slide06: {
    title: { ru: "Выпускницы Дома №1 — 36 мам, 48 детей", uz: "1-uy bitiruvchalari — 36 ona, 48 bola" },
    badge: { ru: "36 мам · 48 детей", uz: "36 ona · 48 bola" },
    achievements: [
      { num: 11, icon: "💼", ru: "Устроились на работу", uz: "Ishga joylashdi", color: "#10B981" },
      { num: 9, icon: "🎒", ru: "Детей в детском саду", uz: "Bolalar bog'chaga", color: "#0D9488" },
      { num: 14, icon: "🏡", ru: "Вернулись в семью", uz: "Oilaga qaytdi", color: "#D97706" },
      { num: 10, icon: "🔑", ru: "Живут самостоятельно", uz: "Mustaqil yashaydi", color: "#065F46" },
      { num: 10, icon: "📄", ru: "Восстановили документы", uz: "Hujjatlarini tikladi", color: "#10B981" },
      { num: 11, icon: "🤝", ru: "Получили пособия", uz: "Nafaqa oldi", color: "#0D9488" },
      { num: 3, icon: "⚖️", ru: "Судебные дела", uz: "Sud ishlari", color: "#D97706" },
      { num: 5, icon: "👶", ru: "Детей родились в проекте", uz: "Loyihada tug'ilgan bolalar", color: "#065F46" },
    ],
    geoTitle: { ru: "География", uz: "Geografiya" },
    regions: [
      { ru: "Ташкентская обл.", uz: "Toshkent vil.", count: 13 },
      { ru: "Андижанская обл.", uz: "Andijon vil.", count: 5 },
      { ru: "Сурхандарьинская", uz: "Surxondaryo", count: 3 },
      { ru: "Самаркандская", uz: "Samarqand", count: 3 },
      { ru: "Кашкадарьинская", uz: "Qashqadaryo", count: 2 },
      { ru: "г. Ташкент", uz: "Toshkent sh.", count: 2 },
      { ru: "Каракалпакия", uz: "Qoraqalpog'iston", count: 2 },
      { ru: "Другие", uz: "Boshqalar", count: 6 },
    ],
  },
  slide07: {
    title: { ru: "Обучение и мероприятия в «ONA UYI»", uz: "«ONA UYI»da o'qitish va tadbirlar" },
    text: {
      ru: "В ресурсном центре «ONA UYI» проходят важные лекции и тренинги с участием врачей-гинекологов и педиатров, бизнес-коучей и экспертов Ассоциации деловых женщин Узбекистана.",
      uz: "«ONA UYI» markazida ginekologlar, pediatrlar, biznes-kouchlar va O'zbekiston tadbirkor ayollar assotsiatsiyasi ekspertlari ishtirokida muhim ma'ruzalar va treninglar o'tkaziladi.",
    },
    masterclasses: [
      { icon: "🧠", ru: "Психология", uz: "Psixologiya" },
      { icon: "🌱", ru: "Лайфкоучинг", uz: "Layfkouching" },
      { icon: "💄", ru: "Маникюр", uz: "Manikur" },
      { icon: "🌸", ru: "Флористика", uz: "Floristika" },
      { icon: "🍳", ru: "Кулинария", uz: "Oshpazlik" },
      { icon: "🧵", ru: "Швейное дело", uz: "Tikuvchilik" },
      { icon: "🏋️", ru: "Йога", uz: "Yoga" },
      { icon: "📸", ru: "Мобилография", uz: "Mobilografiya" },
      { icon: "💊", ru: "Первая мед. помощь", uz: "Tibbiy yordam" },
      { icon: "🚗", ru: "ПДД", uz: "YHX" },
      { icon: "📝", ru: "Бизнес-план", uz: "Biznes-reja" },
      { icon: "💅", ru: "Косметология", uz: "Kosmetologiya" },
      { icon: "🧶", ru: "Вязание", uz: "To'qimachilik" },
      { icon: "📿", ru: "Бисероплетение", uz: "Boncuk ishi" },
      { icon: "🎭", ru: "Уроки танцев", uz: "Raqs darslari" },
    ],
  },
  slide08: {
    tag: { ru: "✨ ИСТОРИЯ УСПЕХА", uz: "✨ MUVAFFAQIYAT HIKOYASI" },
    name: "Zarnig'or Rahmonova",
    caption: { ru: "Сурхандарьинская обл. → Россия → Возвращение", uz: "Surxondaryo viloyati → Rossiya → Qaytish" },
    situationTitle: { ru: "Ситуация", uz: "Vaziyat" },
    situation: {
      ru: "Вернулась из России без документов. Разлучена с тремя детьми почти на год. Без жилья, дохода, поддержки родственников.",
      uz: "Rossiyadan hujjatsiz qaytdi. Uch nafar farzandidan deyarli bir yil ajralgan edi. Uy-joy, daromad, qarindoshlar yordami yo'q edi.",
    },
    actionTitle: { ru: "Что сделал фонд", uz: "Fond nima qildi" },
    action: {
      ru: "Организовали поездку для восстановления документов. Оформили ID-карту. Получили ПИНФЛ для всех троих детей. Устроили старших детей в детский сад. Направили на бесплатные курсы кройки и шитья.",
      uz: "Hujjatlarni tiklash uchun safar tashkil qilindi. ID-karta rasmiylashtirildi. Barcha uch farzand uchun PINFL olindi. Katta yoshli bolalar bog'chaga joylashtirildi. Bepul tikuvchilik kurslariga yo'naltirildi.",
    },
    resultTitle: { ru: "Результат", uz: "Natija" },
    result: {
      ru: "Семья полностью социально адаптирована. Мама получает востребованную профессию швеи. Дети посещают детский сад и развиваются.",
      uz: "Oila to'liq ijtimoiy moslashdi. Ona tikuvchilik kasbini egallamoqda. Bolalar bog'chaga qatnaydi va rivojlanmoqda.",
    },
  },
  slide09: {
    tag: { ru: "✨ ИСТОРИЯ УСПЕХА", uz: "✨ MUVAFFAQIYAT HIKOYASI" },
    name: "Dinara Barakayeva",
    caption: { ru: "21 год, Самарканд → Ташкент", uz: "21 yosh, Samarqand → Toshkent" },
    situationTitle: { ru: "Ситуация", uz: "Vaziyat" },
    situation: {
      ru: "Муж и свекровь требовали отказаться от дочери с задержкой развития. Ребёнок питался через шприц. Давление, изоляция, намерение отдать дочь в Дом малютки.",
      uz: "Er va qaynona rivojlanishida muammolari bor qiz boladan voz kechishni talab qilishdi. Bola shprits orqali ovqatlanardi. Bosim, izolyatsiya, bolani Bolalar uyiga topshirish niyati.",
    },
    actionTitle: { ru: "Что сделал фонд", uz: "Fond nima qildi" },
    action: {
      ru: "Психолог работал над укреплением материнской привязанности. Фонд оплатил длительную реабилитацию Муслибону (ЛФК, массажи, физиотерапия). После выхода — помогли найти жильё, передали памперсы и продукты.",
      uz: "Psixolog ona va bola munosabatini mustahkamlash bo'yicha ishladi. Fond Muslibonuning uzoq muddatli reabilitatsiyasini (LFK, massaj, fizioterapiya) moliyalashtirdi. Chiqgandan so'ng — uy-joy topishda yordam berdi.",
    },
    resultTitle: { ru: "Результат", uz: "Natija" },
    result: {
      ru: "Муслибону теперь самостоятельно ходит и ест. Динара работает воспитателем в детском саду, где воспитывается её дочь. Живёт самостоятельно, получает алименты и детское пособие.",
      uz: "Muslibonu endi mustaqil yuradi va ovqatlanadi. Dinara qizining bog'chasida tarbiyachi bo'lib ishlaydi. Mustaqil yashaydi, nafaqa va alimentlar oladi.",
    },
  },
  slideMadina: {
    tag: { ru: "✨ ИСТОРИЯ УСПЕХА", uz: "✨ MUVAFFAQIYAT HIKOYASI" },
    name: "Madina Barnoxo'jayeva",
    caption: {
      ru: "С июля 2024 · менеджер в салоне ASHLEY",
      uz: "2024-yil iyuldan · ASHLEY salonida menejer",
    },
    situationTitle: { ru: "Ситуация", uz: "Vaziyat" },
    situation: {
      ru: "Обратилась в проект в июле 2024 года в тяжёлой жизненной ситуации. Без постоянного жилья и стабильного дохода, с серьёзными психологическими, материальными трудностями и проблемами со здоровьем.",
      uz: "2024-yil iyulda og'ir hayotiy vaziyatda loyihaga murojaat qildi. Doimiy uy-joy va barqaror daromadsiz, jiddiy psixologik, moddiy qiyinchiliklar va sog'ligʻida muammolar bilan.",
    },
    actionTitle: { ru: "Что сделал фонд", uz: "Fond nima qildi" },
    action: {
      ru: "Разработали индивидуальный план сопровождения: психологическая, медицинская, юридическая и социальная поддержка. Стабилизировали здоровье и давление, при поддержке благотворителей провели зубопротезирование (импланты). Младшую дочь устроили в государственный детский сад.",
      uz: "Individual hamrohlik rejasi tuzildi: psixologik, tibbiy, yuridik va ijtimoiy yordam. Sog'ligʻi va qon bosimi barqarorlashtirildi, xayriyachilar yordamida tish protezlash (implantlar) o'tkazildi. Kichik qizi davlat bogʻchasiga joylashtirildi.",
    },
    resultTitle: { ru: "Результат", uz: "Natija" },
    result: {
      ru: "Трудоустроилась менеджером по продажам в мебельный салон ASHLEY со стабильным официальным доходом. Самостоятельно воспитывает дочь, обрела финансовую независимость, психологическую устойчивость и уверенность в будущем.",
      uz: "ASHLEY mebel saloniga savdo menejeri bo'lib, barqaror rasmiy daromad bilan ishga joylashdi. Qizini mustaqil tarbiyalaydi, moliyaviy mustaqillik, psixologik barqarorlik va kelajakka ishonch topdi.",
    },
  },
  slide10: {
    title: { ru: "8 домов по всему Узбекистану", uz: "O'zbekistondagi 8 ta uyimiz" },
    total: { ru: "212+ мам и их детей получили помощь", uz: "212+ ona va ularning bolalari yordam oldi" },
  },
  slide11: {
    tag: "ONA UYI · 2024–2026",
    line1: { ru: "Здесь каждая мама знает:", uz: "Bu yerda har bir ona biladi:" },
    slogan: { ru: "она не одна", uz: "u yolg'iz emas" },
    stats: [
      { icon: "📱", value: "@ona.uyi.uz", ru: "14 655 подписчиков", uz: "14 655 obunachi" },
      { icon: "👁", value: "2.3 млн", ru: "просмотров", uz: "ko'rishlar" },
      { icon: "📈", value: "+14 447", ru: "новых подписчиков", uz: "yangi obunachi" },
      { icon: "🌍", value: "1.18 млн", ru: "охват", uz: "qamrov" },
    ],
    cta: { ru: "Обратитесь через центры «Инсон» при НАСЗ", uz: "«Inson» markazlari orqali murojaat qiling" },
  },
} as const;
