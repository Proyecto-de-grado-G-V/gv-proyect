"use client";

import Link from "next/link";
import { useState } from "react";
import "../../styles/header.css";
import Image from "next/image";
import logo from "@/assets/image/logo.png";

interface User {
  name: string;
}

export default function Header() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header className="header-container">
      <div className="header-left">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            className="logo"
            width={100}
            height={80}
          />
        </Link>
      </div>
      <nav className="nav-links">
        <Link href="/" className="nav-item">
          Inicio
        </Link>
        <Link href="/services" className="nav-item">
          Servicios
        </Link>
        <Link href="/practice-areas" className="nav-item">
          Áreas de práctica
        </Link>
        <Link href="/gallery" className="nav-item">
          Galería
        </Link>
        <Link href="/attorney" className="nav-item">
          Abogados
        </Link>
        <Link href="/about" className="nav-item">
          Sobre Nosotros
        </Link>
        <Link href="/contact" className="nav-item">
          Contacto
        </Link>
        <Link href="/faq" className="nav-item">
          Preguntas Frecuentes
        </Link>
      </nav>
    </header>
  );
}
