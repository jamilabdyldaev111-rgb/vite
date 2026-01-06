import Car from "./components/Car.jsx";
import "./main.js";
import "./index.css";
import "./App.css";

function App() {
  const card = [
    {
      id: 1,
      title: "Salon",
      description:
        "Многофункциональный трёхспицевый руль с кожаной обшивкой (обычно Nappa-кожа).",
      image:
        "https://kolesa-uploads.ru/r/880x/e650d50b-0036-4b15-b16c-76957cb3b9e0/mercedes-e-3.jpg",
    },
    {
      id: 2,
      title: "Kapot",
      description: "2.0 л бензиновый рядный 4-цилиндровый M254, около 204 л.с.",
      image:
        "https://avatars.mds.yandex.net/get-autoru-vos/3933340/015cd860ee76a84e479a626e154ac398/456x342",
    },
    {
      id: 3,
      title: "Bagazhnik",
      description: "Объём багажника — примерно 540 литров.",
      image:
        "https://homato.ru/upload/resizer2/22/4fa/4fabc9035a01257f48dd4f661b7f8069.jpg",
    },
    {
      id: 4,
      title: "Kolesa",
      description:
        "Штатные колёса Mercedes-Benz E-Class W214: диски 17″, 18″, 19″, 20″ (реже 21″) с шинами 225/60 R17, 225/55 R18, 245/45 R19 и 275/40 R19, а также 245/40 R20 и 275/35 R20.",
      image:
        "https://avatars.mds.yandex.net/get-autoru-vos/1936112/54c3c930ddff92f3786e53793a221293/456x342",
    },
  ];

  return (
    <Car />
  );
}

export default App;
