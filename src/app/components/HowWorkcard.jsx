import React from "react";
import Image from "next/image";
import Link from "next/link";

function HowWorkcard() {
  const steps = [
    {
      id: 1,
      title: "Nece Sifaris Edim?",
      description:
        "Məhsulu seçin Ödəniş edin Məhsulu biz alırıq Yaxud bəyan edin",
      image: "/Nec-sifari-edim.gif",
    },
    {
      id: 2,
      title: "Ödəmə",
      description:
        "Visa, Master bank kartları E-Manat vasitəsi ilə ödənişBank kartları olmayanlara yerində nəğd ödəniş Çatdırılma xidməti üçün yerində ödəniş",
      image: "/odeme.gif",
    },
    {
      id: 3,
      title: "Çatdırılma",
      description:
        "Bağlama Türkiyə və ya Amerika anbarına qəbul edilir. Yüklər qablaşdırılır və  Azərbaycana göndərilir.Bakı,Gəncə və ya Sumqayıt ofisindən bağlamalar təhvil verilir.",
      image: "/catdirilma-dy.gif",
    },
  ];
  return (
    <>
      {steps.map((step) => (
        <div key={step.id} className="how-work-card">
          <Image
            src={step.image}
            alt={step.title}
            width={80}
            height={80}
            className="how-work-image"
          />
          <h5>{step.title}</h5>
          <p>{step.description}</p>
          <Link className="more-info" href="/faq">
            <span>Daha cox</span>
          </Link>
        </div>
      ))}
    </>
  );
}

export default HowWorkcard;
