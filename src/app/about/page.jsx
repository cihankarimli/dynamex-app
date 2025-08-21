import Image from "next/image";
import React from "react";
// Bu üsullardan birini yoxlayın:

// Üsul 1: Default import

import styles from "../styles/AboutPage.css";
const aboutData = [
  {
    id: 1,
    title:
      "Dynamex kuryer şirkəti 13 il logistika sahəsində fəaliyyət göstərən Türkiyə əsaslı Gets Global Lojistik şirkətinin törəmə şirkətidir. Gets Lojistik olaraq hava, quru, dəmir və dəniz yolu ilə daşınmalardan qazandığımız təcrübəni Dynamex-ə tətbiq edərək Azərbaycan xalqına yüksək keyfiyyətli və operativ xidmət göstərməkdən qürur duyuruq. Bizimlə sifariş zamanı siz Türkiyədən daşınan bağlamalarınızı yeni yaranmış və daha az təcrübəyə malik şirkətə deyil, beynəlxalq yük daşıma sahəsində 13 illik tərcübəyə sahib şirkətə həvalə etmiş olursunuz.",
  },
  {
    id: 2,
    title:
      "Dynamex kuryer şirkəti isə 2018-ci ildən etibarən fəaliyyət göstərən sürətli poçt şirkətidir.",
  },
  {
    id: 3,
    title:
      "Şirkətimiz hal-hazırda AZAL, SilkWay, Türk Hava Yolları kimi təcrübəli aviaşirkətlərlə əməkdaşlıq edərək Türkiyədən şəxsi və korporativ yüklərin daşınmasını həyata keçirir.",
  },
  {
    id: 4,
    title:
      "Bizim vasitəmizlə daşınan və beynəlxalq yük daşıma qaydalarına əsasən qablaşdırılmış bütün bağlamalar üçün “Ödənişsiz Sığortalama” xidmətini təklif edirik. ",
  },
  {
    id: 5,
    title:
      "Aydındır ki, Türkiyə onlayn alış-veriş mağazaları bəzən məhsulun rəngini, ölçüsünü səhv göndərə bilər və ya məhsul qüsurlu ola bilər. Bu kimi halların qarşısını almaq və müştəri məmnuniyyətini hər zaman yüksək səviyyədə saxlamaq üçün “Geri Qaytarma” xidmətimizi aktivləşdirmişik.",
  },
  {
    id: 6,
    title:
      "Biz bütün Azərbaycan əhalisinin Türkiyədən onlayn alış-veriş etməsini və sifarişlərini sürətli şəkildə əldə etməsini təmin etmək üçün bağlamaları bütün Azərbaycana poçt vasitəsilə çatdırırıq. ",
  },
  {
    id: 7,
    title:
      "Bizimlə siz həm də onlayn ödəniş qəbul etməyən, yalnız Türkiyədə “Kapıda Ödeme” tələb edən mağazalardan da alış-veriş edə bilərsiniz.",
  },
  {
    id: 8,
    title:
      "Operativ “Mənim üçün Sifariş Et” xidməti və fasiləsiz işləyən anbarımız, peşəkar müştəri xidmətlərimiz, rahat və zəngin interfeysli veb saytımızla xidmətinizdəyik!",
  },
];

function About() {
  return (
    <>
      <div className="about-container">
        <h1>Haqqimizda</h1>
        <p className="title">
          Bizi yaxından tanıdığınız halda müştərimizə çevrilmək ehtimalınız
          yüksəkdir.
        </p>
        <div className="about-image">
          <Image
            src="/haqqimizda.png"
            alt="about-img"
            width={825}
            height={400}
          />
          <div className="ping-card"></div>
        </div>
        <div className="text">
          <h3 className="headline">13 il öncə başlayan hekayəmiz...</h3>
          {aboutData.map((about) => (
            <div className="content" key={about.id}>
              <p>{about.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
