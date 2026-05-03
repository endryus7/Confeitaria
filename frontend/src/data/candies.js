import Brigadeiro from "../assets/images/Brigadeiro.jpg"
import Beijinho from '../assets/images/Beijinho.jpg'
import Branquinho from '../assets/images/Branquinho.jpg'
import Ovos_de_colher from "../assets/images/Ovos_de_colher.jpeg";
import Bolo_de_laranja from "../assets/images/Bolo_de_laranja.png";
import Bolo_de_chocolate from "../assets/images/Bolo_de_chocolate.jpeg";
import Trufas from "../assets/images/Trufas.jpeg";
import Ovo_de_colher_morango from "../assets/images/Ovo_de_colher_morango.jpeg"

export const categories = [
  "Todos",
  "Brigadeiros Tradicionais",
  "Sobremesas",
  "Bolos",
  "Importados",
];

export const candies = [
  {
    id: 1,
    name: "Brigadeiro",
    price: 3.5,
    image: Brigadeiro,
    category: "Brigadeiros Tradicionais",
    desc: "Clássico com chocolate e granulado",
  },
  {
    id: 2,
    name: "Beijinho",
    price: 3.5,
    image: Beijinho,
    category: "Brigadeiros Tradicionais",
    desc: "Coco ralado com leite condensado",
  },
  {
    id: 3,
    name: "Branquinho",
    price: 3.5,
    image: Branquinho,
    category: "Brigadeiros Tradicionais",
    desc: "Clássico com leite condensado",
  },
  {
    id: 4,
    name: "Bolo de Chocolate",
    price: 12.0,
    image: Bolo_de_chocolate,
    category: "Bolos",
    desc: "Pudim de leite condensado caramelado",
  },
  {
    id: 5,
    name: "Bolo de Lranja",
    price: 18.0,
    image: Bolo_de_laranja,
    category: "Bolos",
    desc: "Com cobertura de ",
  },
  {
    id: 6,
    name: "Macarons",
    price: 7.0,
    image: Ovo_de_colher_morango,
    category: "Importados",
    desc: "Franceses com recheios variados",
  },
  {
    id: 7,
    name: "Trufa",
    price: 6.0,
    image: Trufas,
    category: "Importados",
    desc: "Belga com ganache especial",
  },
  {
    id: 8,
    name: "Palha Italiana",
    price: 4.0,
    image: "",
    category: "Brasileiros",
    desc: "Biscoito com brigadeiro cremoso",
  },
  {
    id: 9,
    name: "Torta de Limão",
    price: 22.0,
    image: "",
    category: "Bolos",
    desc: "Massa crocante com creme azedo",
  },
  {
    id: 10,
    name: "Pavê",
    price: 20.0,
    image: "",
    category: "Sobremesas",
    desc: "Camadas de biscoito e creme",
  },
  {
    id: 11,
    name: "Bolo Red Velvet",
    price: 25.0,
    image: "",
    category: "Bolos",
    desc: "Veludo vermelho com cream cheese",
  },
  {
    id: 12,
    name: "Churros",
    price: 8.0,
    image: "",
    category: "Sobremesas",
    desc: "Crocante com doce de leite",
  },
];
