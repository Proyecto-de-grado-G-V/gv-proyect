"use client";

import { useState, useEffect } from "react";
import userImage from '@/assets/image/user.png';
import '../../styles/UserAccount.css';

export default function UserAccount() {
  const [usuario, setUsuario] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [tempNombre, setTempNombre] = useState('');
  const [tempTelefono, setTempTelefono] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUsuario(JSON.parse(storedUser)); 
    } else {
      setUsuario({
        nombre: '',
        telefono: '',
        correoElectronico: '',
      });
    }
  }, []);

  const handleEdit = () => {
    if (usuario) {
      setTempNombre(usuario.nombre);
      setTempTelefono(usuario.telefono);
    }
    setIsEditing(true);
  };

  const handleSave = () => {
    if (usuario && tempNombre && tempTelefono) {
      const updatedUsuario = {
        ...usuario,
        nombre: tempNombre,
        telefono: tempTelefono,
      };
      setUsuario(updatedUsuario);
      setIsEditing(false);
      localStorage.setItem("user", JSON.stringify(updatedUsuario));  
      console.log('Usuario actualizado:', updatedUsuario);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="cuenta-usuario">
      <div className="avatar-container">
        <img src={userImage.src} alt="Usuario" className="cuenta-avatar" />
      </div>
      <h2>{isEditing ? 'Editando' : 'Información del Usuario'}</h2>
      <div className="info-container">
        <div className="info-item">
          <label className="info-label">Teléfono</label>
          {isEditing ? (
            <input
              type="text"
              value={tempTelefono}
              onChange={(e) => setTempTelefono(e.target.value)}
              className="info-input"
            />
          ) : (
            <span className="info-value">{usuario?.telefono || 'Teléfono no disponible'}</span>
          )}
        </div>
        <div className="info-item">
          <label className="info-label">Nombre</label>
          {isEditing ? (
            <input
              type="text"
              value={tempNombre}
              onChange={(e) => setTempNombre(e.target.value)}
              className="info-input"
            />
          ) : (
            <span className="info-value">{usuario?.nombre || 'No especificado'}</span>
          )}
        </div>
        <div className="info-item">
          <label className="info-label">Rubro</label>
          <span className="info-value">Asesor legal</span>
        </div>
        <div className="info-item">
          <label className="info-label">Correo Electrónico</label>
          <span className="info-value">{usuario?.correoElectronico || 'Correo no disponible'}</span>
        </div>
        <div className="info-item">
          <label className="info-label">Despacho</label>
          <span className="info-value">Vargas y Asociados</span> 
        </div>
      </div>
      <div className="action-buttons">
        {isEditing ? (
          <>
            <button className="cta-btn" onClick={handleSave}>Guardar cambios</button>
            <button className="cta-btn cancelar" onClick={handleCancel}>Cancelar</button>
          </>
        ) : (
          <button className="cta-btn" onClick={handleEdit}>Editar</button>
        )}
      </div>
    </div>
  );
}
