"use client";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

export function SectionLocation() {
  return (
    <div className="justify-content mq725:gap-[1.938rem_0rem] mq725:pl-[4.75rem] mq725:pr-[3.563rem] mq725:box-border relative box-border flex w-full flex-col items-center gap-[3.875rem_0rem] overflow-hidden bg-[#74BEE0] pb-[5.688rem] pt-[8.125rem] tracking-[normal] mq450:box-border mq450:gap-[0.938rem_0rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem]">
      <section className="flex w-[61.063rem] max-w-full flex-row items-start justify-center text-center font-inter text-[0.938rem] text-white">
        <div className="flex w-[44.688rem] max-w-full flex-col items-end justify-start gap-[0.75rem_0rem]">
          <div className="flex flex-row items-start justify-center self-stretch px-[1.25rem] py-[0rem]">
            <div className="relative inline-block w-[33.188rem] font-medium tracking-[1px]">{`Você está convidado a compartilhar de nossa alegria & felicidade`}</div>
          </div>
          <h1 className="mq975:text-[3.688rem] mq975:leading-[4.5rem] relative m-0 self-stretch font-jomolhari text-[4.625rem] font-normal leading-[122%] mq450:text-[2.75rem] mq450:leading-[3.375rem]">
            Vamos celebrar
          </h1>
        </div>
      </section>
      <section className="justify-content mq725:gap-[1.063rem_0rem] mq1025:gap-[2.063rem_0rem] flex max-w-full flex-col items-center gap-[4.188rem_0rem] self-stretch">
        <div className="z-100 rounded-8xl relative max-w-full object-cover">
          <MapLocation />
        </div>
        <div className=" justify-content flex max-w-full flex-row flex-wrap items-center gap-[0rem_1.063rem] text-left font-jomolhari text-[1.125rem] text-white">
          <div className="flex w-[18.5rem] flex-row items-start justify-start gap-[0rem_1rem]">
            <img
              className="relative h-[4.375rem] w-[4.375rem] object-cover"
              loading="lazy"
              alt=""
              src="/location-section-cheers.svg"
            />
            <div className="flex flex-1 flex-col items-start justify-start px-[0rem] pb-[0rem] pt-[1.375rem]">
              <div className="flex flex-col items-start justify-start gap-[1.125rem_0rem] self-stretch">
                <h3 className="font-inherit relative m-0 self-stretch text-inherit font-normal tracking-[1px]">
                  Chá de panela
                </h3>
                <div className="relative inline-block w-[11.5rem] font-inter text-[0.75rem] tracking-[1px]">
                  SHIN QI 1, Conjunto 2, Casa 16, Lago Norte, Brasília - DF,
                  71505-020
                </div>
              </div>
            </div>
          </div>
          <div className="box-border flex min-w-[15.5rem] max-w-full flex-1 flex-row items-start justify-start gap-[0rem_1.063rem] py-[0rem] pl-[0rem] pr-[2.75rem] mq450:box-border mq450:flex-wrap mq450:pr-[1.25rem]">
            <img
              className="relative h-[4.375rem] w-[4.375rem] object-cover"
              loading="lazy"
              alt=""
              src="/location-section-church.svg"
            />
            <div className="box-border flex min-w-[10.188rem] flex-1 flex-col items-start justify-start px-[0rem] pb-[0rem] pt-[1.375rem]">
              <div className="flex flex-col items-start justify-start gap-[1.125rem_0rem] self-stretch">
                <h3 className="font-inherit relative m-0 self-stretch text-inherit font-normal tracking-[1px]">
                  Celebração do casamento
                </h3>
                <div className="relative inline-block w-[11rem] font-inter text-[0.75rem] tracking-[1px]">
                  SMPW Quadra 5 Conjunto 03 Casa 03, Park Way, Brasília - DF,
                  71735-503
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[18.813rem] flex-row items-start justify-start gap-[0rem_1.313rem]">
            <img
              className="relative h-[4.375rem] w-[4.375rem] object-cover"
              loading="lazy"
              alt=""
              src="/location-section-cake.svg"
            />
            <div className="flex flex-1 flex-col items-start justify-start px-[0rem] pb-[0rem] pt-[1.375rem]">
              <div className="flex flex-col items-start justify-start gap-[1.125rem_0rem] self-stretch">
                <h3 className="font-inherit relative m-0 self-stretch text-inherit font-normal tracking-[1px]">{`Recepção & Jantar`}</h3>
                <div className="relative self-stretch font-inter text-[0.75rem] tracking-[1px]">
                  SMPW Quadra 5 Conjunto 03 Casa 03, Park Way, Brasília - DF,
                  71735-503
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const MapLocation = () => {
  const mapContainer = useRef(null);
  const latitude = -15.8426904;
  const longitude = -48.0014105;
  const zoom = 13;

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [longitude, latitude],
      zoom: zoom,
      scrollZoom: false,
      zoomControl: true,
      attributionControl: false,
    });

    /*map.on('load', () => {
       // Adicionando um marcador
       new mapboxgl.Marker()
         .setLngLat([longitude, latitude])
         .addTo(map);
     });*/

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      className="map-container"
      style={{ width: "61rem", height: "29.188rem" }}
    />
  );
};
