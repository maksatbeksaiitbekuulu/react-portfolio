import React from "react";
import { useForm } from "react-hook-form";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import marker from "../../images/marker.svg";

import "./contact.scss";

function Contact() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  const position = [42.83425232902889, 74.61583255022894];

  const icon = L.icon({
    iconUrl: marker,
    iconAnchor: position,
    iconSize: [55, 55],
  });
  return (
    <section className="contact">
      <h1>Контакты</h1>
      <div className="container contact__container">
        <div className="contact__col">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Ваше имя:
              <input
                placeholder="Макс Сайитбеков"
                {...register("name", {
                  required: "Имя должно быть заполнено!",
                  minLength: {
                    value: 3,
                    message: "Минимум 3 символа!",
                  },
                })}
              />
            </label>
            <div className="contact__error">
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </div>
            <label>
              Ваша почта
              <input
                placeholder="maks@gmail.com"
                {...register("email", {
                  required: "Email должно быть заполнено!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                    message: "Введите корректный email!",
                  },
                })}
              />
            </label>
            <div className="contact__error">
              {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </div>
            <label>
            Ваше сообщение
              <textarea
                {...register("msg", {
                  maxLength: {
                    value: 10,
                    message: "Максимум 10 символов",
                  },
                })}
              ></textarea>
            </label>
            <div className="contact__error">
              {errors?.msg && <p>{errors?.msg?.message || "Error!"}</p>}
            </div>
            <input type="submit" disabled={!isValid} />
          </form>
        </div>

        <div className="contact__col">
          <MapContainer center={position} zoom={20}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={icon}>
              <Popup>Филармония</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  )
}

export default Contact