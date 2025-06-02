import "../../../styles/footer.css";
import instagram from "@/assets/image/instagram.png";
import facebook from "@/assets/image/facebook.png";
import whatsApp from "@/assets/image/whatsApp.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-10 pb-5 px-6 md:px-16">
      <div className="footer-container">
        <div className="footer-socials">
          <a href="https://www.facebook.com/VargasYAsociados" target="_blank" rel="noreferrer">
            <Image
              src={whatsApp}
              alt="WhatsApp"
              className="footer-icon"
              width={30}
              height={30}
            />
          </a>
          <a href="https://www.facebook.com/VargasYAsociados" target="_blank" rel="noreferrer">
            <Image
              src={facebook}
              alt="Facebook"
              className="footer-icon"
              width={30}
              height={30}
            />
          </a>
          <a href="https://www.instagram.com/VargasYAsociados" target="_blank" rel="noreferrer">
            <Image
              src={instagram}
              alt="Instagram"
              className="footer-icon"
              width={30}
              height={30}
            />
          </a>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h3>Vargas & Asociados</h3>
            <p>
              Fundado en 1998, somos un bufete de abogados con un equipo altamente capacitado, ofreciendo servicios legales en áreas como derecho civil, penal, administrativo, familiar y aduanero. Nos comprometemos a brindar soluciones jurídicas personalizadas y de alta calidad.
            </p>
          </div>
          <div className="footer-column">
            <h3>Misión</h3>
            <p>
              Proporcionamos asesoría legal integral, garantizando la protección de los derechos e intereses de nuestros clientes con un enfoque ético y accesible. Nuestra misión es innovar en los procesos legales mediante el uso de tecnología.
            </p>
          </div>
          <div className="footer-column">
            <h3>Visión</h3>
            <p>
              Ser un referente en el ámbito jurídico nacional, destacándonos por nuestra capacidad de adaptación a las nuevas demandas legales y el uso de tecnologías avanzadas que optimizan la gestión de procesos.
            </p>
          </div>
          <div className="footer-column">
            <h3>Contacto</h3>
            <a href="/about">Acerca de nosotros</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
