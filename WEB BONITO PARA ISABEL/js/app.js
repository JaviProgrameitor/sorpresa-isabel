particlesJS('particles-js', 
  {
    "particles": {
      "number": {
        "value": 45,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#6c4675"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 8,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 300,
        "color": "#32cd32",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 12,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 800,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 800,
          "size": 80,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
)

let body = document.getElementById("body");
body.addEventListener('mousemove', cambiarColor);

let item1 = document.getElementById("item1");
item1.addEventListener('mouseover', mostrarLetras1);
item1.addEventListener('mouseout', esconderLetras1);

let item2 = document.getElementById("item2");
item2.addEventListener('mouseover', mostrasLetras2);
item2.addEventListener('mouseout', esconderLetras2);

let item3 = document.getElementById("item3");
item3.addEventListener('mouseover', mostrasLetras3);
item3.addEventListener('mouseout', esconderLetras3);

let item4 = document.getElementById("item4");
item4.addEventListener('mouseover', mostrasLetras4);
item4.addEventListener('mouseout', esconderLetras4);

let colores = [];
colores.push("LightCoral")
colores.push("blue")
colores.push("purple")
colores.push("brown")
colores.push("green")
colores.push("DeepPink")
colores.push("OrangeRed")
colores.push("yellow")
colores.push("DarkViolet")
colores.push("Lime")
colores.push("GreenYellow")
colores.push("SpringGreen")
colores.push("Cyan")
colores.push("Aquamarine")
colores.push("SandyBrown")

function cambiarColor() {
  document.getElementById("titulo").style.color = colores[aleatorio(0,14)];
}

function mostrarLetras1() {
  document.getElementById("div-burro-bailando").style.display = "inline";
  document.getElementById("div-homero-bailando").style.display = "inline";
}

function esconderLetras1() {
  document.getElementById("div-burro-bailando").style.display = "none";
  document.getElementById("div-homero-bailando").style.display = "none";
}

function aleatorio(min, maxi) {
  var resultado;
  resultado =  Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

function mostrasLetras2() {
  document.getElementById("div-caja-3d").style.display = "inline";
  document.getElementById("div-corazon-animado").style.display = "inline";
}

function esconderLetras2() {
  document.getElementById("div-caja-3d").style.display = "none";
  document.getElementById("div-corazon-animado").style.display = "none";
}

function mostrasLetras3() {
  document.getElementById("div-fotos-animadas").style.display = "inline";
}

function esconderLetras3() {
  document.getElementById("div-fotos-animadas").style.display = "none";
}

function mostrasLetras4() {
  document.getElementById("div-letrero").style.display = "inline";
}

function esconderLetras4() {
  document.getElementById("div-letrero").style.display = "none";
}