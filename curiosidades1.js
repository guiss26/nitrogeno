// curiosidades.js
document.addEventListener("DOMContentLoaded", () => {
  const curiosidades = [
    {
      etapa: "🌍 Etapa 1: Presencia Natural y Descubrimiento",
      datos: [
        { titulo: "1. ¡Está en todas partes!", texto: "El nitrógeno compone el 78% del aire." },
        { titulo: "2. Tiene muchos nombres históricos", texto: "Antes se le conocía como “aire quemado” o “aire flogisticado”." }
      ]
    },
    {
      etapa: "🧬 Etapa 2: Rol en la Vida y la Naturaleza",
      datos: [
        { titulo: "3. Es esencial para la vida", texto: "Forma parte del ADN y proteínas." },
        { titulo: "4. Las plantas lo “comen” gracias a bacterias", texto: "Necesitan bacterias para convertirlo en formas utilizables." },
        { titulo: "5. El ciclo del nitrógeno es un proceso fascinante", texto: "Describe cómo viaja por el ambiente, plantas y animales." }
      ]
    },
    {
      etapa: "⚠️ Etapa 3: Propiedades y Riesgos",
      datos: [
        { titulo: "6. El nitrógeno líquido es ultrafrío", texto: "Temperatura de -196 °C. Congela instantáneamente." },
        { titulo: "7. También puede ser peligroso", texto: "Puede causar asfixia silenciosa en atmósferas sin oxígeno." },
        { titulo: "8. Puede hacer que las cosas “crujan” de frío", texto: "Frágiles al contacto tras sumergirse en nitrógeno líquido." }
      ]
    },
    {
      etapa: "💥 Etapa 4: Usos Explosivos y Ambientales",
      datos: [
        { titulo: "9. Forma parte de los explosivos", texto: "Se encuentra en TNT, nitroglicerina, etc." },
        { titulo: "10. Parte de la lluvia ácida", texto: "Óxidos de nitrógeno contribuyen a este fenómeno ambiental." },
        { titulo: "11. Forma parte de los fuegos artificiales", texto: "Se usa en pirotecnia." }
      ]
    },
    {
      etapa: "⚙️ Etapa 5: Aplicaciones Tecnológicas",
      datos: [
        { titulo: "12. Usado en chips y componentes electrónicos", texto: "Como gas inerte en su fabricación." },
        { titulo: "13. Usado para inflar llantas de aviones y autos de carrera", texto: "Más estable que el aire común." },
        { titulo: "14. Usado en empaques de alimentos", texto: "Protege snacks al evitar la oxidación." }
      ]
    },
    {
      etapa: "☕️🍺 Etapa 6: Usos Gastronómicos",
      datos: [
        { titulo: "15. Importante para la cerveza y el café", texto: "Usado para crear textura suave y cremosa." },
        { titulo: "16. Se usa en medicina y gastronomía", texto: "Para congelar alimentos o tejidos casi al instante." }
      ]
    },
    {
      etapa: "🧰 Etapa 7: Presencia Extraterrestre y Curiosidades",
      datos: [
        { titulo: "17. El nitrógeno está en otros planetas", texto: "Titán, luna de Saturno, tiene una atmósfera rica en nitrógeno." },
        { titulo: "18. ¡El nitrógeno también está en los diamantes!", texto: "Impurezas que alteran el color del diamante." }
      ]
    }
  ];

  const timeline = document.querySelector(".timeline");

  curiosidades.forEach(etapa => {
    const etapaTitle = document.createElement("h3");
    etapaTitle.textContent = etapa.etapa;
    etapaTitle.style.color = "#FFB6C1";
    timeline.appendChild(etapaTitle);

    etapa.datos.forEach(item => {
      const div = document.createElement("div");
      div.className = "timeline-item";
      div.innerHTML = `<h3>${item.titulo}</h3><p>${item.texto}</p>`;
      timeline.appendChild(div);
    });
  });
});
