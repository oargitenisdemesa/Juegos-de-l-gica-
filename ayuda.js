(function () {
  var juego = document.currentScript.getAttribute("data-juego");

  var AYUDA = {
    "codigo-secreto": {
      titulo: "Código secreto",
      objetivo: "Descubrir el código de colores que ha escondido el ordenador, antes de quedarte sin intentos.",
      pasos: [
        "Toca un color de la paleta y luego una casilla de la fila marcada con línea discontinua. También puedes tocar varios colores seguidos y se van colocando en orden.",
        "Cuando la fila esté completa, pulsa «Comprobar».",
        "A la derecha de la fila aparecen bolitas de pista. <b>Negra</b>: una ficha tiene el color y la posición correctos. <b>Blanca</b>: el color está en el código, pero en otra posición. Si no hay bolita, ese color no está.",
        "Las bolitas no dicen qué ficha es cuál. Tienes que deducirlo comparando las pistas de varios intentos.",
        "Ganas si aciertas el código. Si se acaban los intentos (o el tiempo, en contrarreloj), pierdes y se muestra la solución."
      ],
      ejemplo: "Código oculto: 1-2-3-4. Pruebas 1-1-2-5. Resultado: una bolita negra (el 1 de la primera casilla está bien) y una blanca (el 2 está en el código, pero no en la tercera casilla).",
      niveles: "Fácil: 4 fichas y los colores no se repiten. Medio: 4 fichas y los colores pueden repetirse. Difícil: 5 fichas y 8 colores."
    },
    "sudoku": {
      titulo: "Sudoku",
      objetivo: "Rellenar toda la cuadrícula con números del 1 al 9.",
      pasos: [
        "Cada <b>fila</b>, cada <b>columna</b> y cada <b>bloque</b> de 3×3 (los recuadros de línea gruesa) debe contener los números del 1 al 9 sin repetir ninguno.",
        "Toca una casilla vacía y después un número del teclado de abajo. Los números en negrita vienen dados y no se pueden cambiar.",
        "Los números repetidos en una fila, columna o bloque se marcan en rojo. Es un aviso de que hay un conflicto, aunque no te dice cuál de los dos está mal.",
        "«Notas» sirve para apuntar candidatos pequeños en una casilla sin comprometerte. Actívalo, toca números y quedan como notas. «Borrar» vacía la casilla seleccionada.",
        "«Pista» rellena la casilla seleccionada con el número correcto. Tienes 3 por partida."
      ],
      ejemplo: "Si una fila ya tiene 1, 2, 3, 4, 5, 6, 7 y 8, la casilla que queda vacía solo puede ser un 9.",
      niveles: "Cuanto más difícil el nivel, menos números vienen dados al empezar. Todos los tableros tienen una única solución."
    },
    "apagar-luces": {
      titulo: "Apagar luces",
      objetivo: "Dejar todas las luces apagadas.",
      pasos: [
        "Al tocar una luz, esa luz cambia (si estaba encendida se apaga y al revés) y también cambian las cuatro vecinas: arriba, abajo, izquierda y derecha.",
        "Las luces de las esquinas y los bordes tienen menos vecinas, así que cambian menos casillas.",
        "Intenta resolverlo con pocos movimientos. El récord es el menor número de movimientos en ese nivel.",
        "«Deshacer» anula tu último movimiento y «Reiniciar» vuelve al tablero del principio. «Pista» marca con borde discontinuo una casilla que te acerca a la solución (3 por partida)."
      ],
      ejemplo: "Truco para tableros grandes: ve fila por fila de arriba abajo. Para apagar una luz de arriba, pulsa la casilla que tiene justo debajo.",
      niveles: "Fácil: 4×4. Medio: 5×5. Difícil: 6×6. Todos los tableros se pueden resolver."
    },
    "torres-de-hanoi": {
      titulo: "Torres de Hanói",
      objetivo: "Llevar todos los discos de la torre de la izquierda a la torre de la derecha.",
      pasos: [
        "Toca una torre para coger su disco de arriba y toca otra torre para soltarlo allí. Si te arrepientes, toca la misma torre otra vez.",
        "Solo puedes mover un disco cada vez.",
        "Un disco grande nunca puede colocarse encima de uno más pequeño.",
        "El contador te dice cuántos movimientos llevas y cuál es el mínimo posible. Con 3 discos son 7, con 5 son 31 y con 7 son 127."
      ],
      ejemplo: "Con 3 discos: mueve el pequeño a la torre derecha, el mediano a la central, el pequeño sobre el mediano, y así hasta pasar el grande a su sitio.",
      niveles: "Fácil: 3 discos. Medio: 5 discos. Difícil: 7 discos. Truco: el disco más pequeño se mueve cada dos turnos, siempre en la misma dirección."
    },
    "parejas": {
      titulo: "Parejas",
      objetivo: "Encontrar todas las parejas de símbolos iguales.",
      pasos: [
        "Todas las cartas empiezan boca abajo. En cada turno destapa dos cartas tocándolas.",
        "Si los dos símbolos son iguales, forman pareja y se quedan descubiertas.",
        "Si son distintos, se vuelven a tapar tras un momento. Intenta recordar dónde estaba cada símbolo.",
        "Ganas cuando has encontrado todas las parejas. Cuantos menos intentos uses, mejor récord."
      ],
      ejemplo: "Si destapas 🌙 y 🍎 y no coinciden, apunta mentalmente dónde estaban: cuando salga otro 🌙 sabrás dónde está su pareja.",
      niveles: "Fácil: 12 cartas. Medio: 16 cartas. Difícil: 24 cartas. En contrarreloj, si se acaba el tiempo pierdes."
    },
    "deslizante": {
      titulo: "Puzle deslizante",
      objetivo: "Ordenar las fichas de menor a mayor, con el hueco en la esquina de abajo a la derecha.",
      pasos: [
        "Toca una ficha que esté en la misma fila o columna que el hueco: se desliza hacia él. Si hay varias fichas entre medias, se mueven todas a la vez.",
        "Las fichas que no comparten fila ni columna con el hueco no se pueden mover.",
        "Ordena primero la fila de arriba, luego la siguiente, y así hasta llegar a las últimas filas.",
        "Debajo del título ves cuántos movimientos llevas. Ganas cuando todas las fichas están en orden."
      ],
      ejemplo: "Truco: no intentes colocar la última ficha de una fila directamente. Déjala una fila más abajo, cierra la fila con las demás y vuélvela a subir.",
      niveles: "Fácil: 3×3 (2 minutos en contrarreloj). Medio: 4×4 (5 minutos). Difícil: 5×5 (10 minutos). El tablero siempre se puede resolver."
    },
    "buscaminas": {
      titulo: "Buscaminas",
      objetivo: "Destapar todas las casillas que no tienen mina.",
      pasos: [
        "Toca una casilla para destaparla. La primera nunca tiene mina y suele abrir una zona.",
        "Un número indica cuántas minas hay en las 8 casillas de alrededor. Si es una casilla vacía, se abren solas las vecinas.",
        "Para marcar una mina, pulsa «Modo bandera» y toca la casilla (con ratón, botón derecho). Vuelve a tocarla para quitar la bandera.",
        "Si tocas un número que ya tiene a su alrededor tantas banderas como indica, se abren el resto de vecinas de golpe. Cuidado: si alguna bandera está mal, pisarás una mina.",
        "Arriba ves cuántas minas quedan por marcar. Si destapas una mina, pierdes."
      ],
      ejemplo: "Si un 1 solo tiene una casilla tapada a su alrededor, esa casilla es una mina. Si ya la has marcado, el resto de vecinas de ese 1 son seguras.",
      niveles: "Fácil: 8×8 con 8 minas (3 minutos en contrarreloj). Medio: 10×10 con 15 (7 minutos). Difícil: 12×12 con 30 (15 minutos). El reloj empieza al destapar la primera casilla."
    },
    "nonograma": {
      titulo: "Nonograma",
      objetivo: "Rellenar casillas hasta que cada fila y cada columna cumpla sus pistas y aparezca el dibujo.",
      pasos: [
        "Cada número de la izquierda de una fila (o encima de una columna) indica un grupo de casillas rellenas seguidas. Los grupos van en ese orden y con al menos una casilla vacía entre ellos.",
        "Con «■ Rellenar» activado, toca una casilla para rellenarla. Con «✕ Marcar vacía» puedes señalar las que sabes que están vacías. Tocar otra vez la borra.",
        "Arrastra el dedo para pintar varias casillas seguidas.",
        "Cuando una fila o columna cumple su pista, los números se atenúan. Eso no garantiza que el resto esté bien, solo que esa línea cuadra.",
        "Ganas cuando todas las filas y columnas cumplen sus pistas."
      ],
      ejemplo: "En una fila de 5 casillas, la pista «5» se rellena entera. Con la pista «4», las 3 casillas del centro seguro están rellenas. Con «0» toda la fila está vacía.",
      niveles: "Fácil: 5×5 (3 minutos en contrarreloj). Medio: 8×8 (8 minutos). Difícil: 10×10 (15 minutos). El reloj empieza con tu primer toque."
    },
    "secuencias": {
      titulo: "Secuencias",
      objetivo: "Descubrir la regla de cada serie de números y escribir el que viene a continuación.",
      pasos: [
        "Mira los números y piensa cómo pasa de uno al siguiente: sumas, restas, multiplicaciones, cuadrados, saltos que crecen o dos series mezcladas.",
        "Escribe el número que sustituye al «?» y pulsa «Comprobar» (o Intro).",
        "Si aciertas, pasas a la siguiente serie. Si fallas, pierdes una vida ❤️ y se te enseña la regla para que aprendas.",
        "Ganas si resuelves 8 series. Pierdes si te quedas sin las 3 vidas."
      ],
      ejemplo: "Serie 2, 4, 8, 16, ?: cada número es el doble del anterior, así que sigue el 32. Serie 1, 4, 9, 16, ?: son cuadrados (1², 2², 3², 4²), sigue el 25.",
      niveles: "Fácil: sumas y restas, con 5 números a la vista. Medio: multiplicaciones, cuadrados, saltos crecientes y series entrelazadas. Difícil: tipo Fibonacci, cubos, triangulares y combinaciones de operaciones. En contrarreloj el tiempo es para las 8 series: 2:30, 4:00 y 6:00 minutos."
    },
    "inundacion": {
      titulo: "Inundación",
      objetivo: "Conseguir que todo el tablero sea de un solo color sin pasarte del número de movimientos.",
      pasos: [
        "Tu zona empieza en la esquina de arriba a la izquierda, con las casillas de su mismo color que estén pegadas.",
        "Toca un color de la paleta de abajo: toda tu zona cambia a ese color y absorbe las vecinas que ya lo tenían.",
        "Cada color tiene también un símbolo, para distinguirlos mejor. El color que ya tiene tu zona aparece desactivado.",
        "Arriba ves los movimientos usados y el máximo permitido. Si llegas al máximo sin haber terminado, pierdes."
      ],
      ejemplo: "Una buena norma es elegir el color que absorbe más casillas de golpe. Mejor aún si te acerca a los rincones lejanos, porque son los más difíciles de alcanzar al final.",
      niveles: "Fácil: 8×8 con 4 colores y mucho margen de movimientos (2 minutos en contrarreloj). Medio: 10×10 con 5 colores (4 minutos). Difícil: 12×12 con 6 colores y muy poco margen (7 minutos). Siempre hay al menos una forma de ganar dentro del límite."
    }
  };

  var A = AYUDA[juego];
  if (!A) return;

  var css = document.createElement("style");
  css.textContent =
    ".ayuda-btn{font:inherit;font-size:.85rem;font-weight:normal;margin-left:10px;padding:5px 10px;border-radius:8px;" +
    "border:1.5px solid var(--line,#ccc);background:var(--panel,#fff);color:var(--ink,#222);cursor:pointer;vertical-align:middle}" +
    "dialog.ayuda{max-width:min(480px,calc(100vw - 24px));max-height:calc(100vh - 32px);overflow:auto;padding:20px;" +
    "border:1.5px solid var(--line,#ccc);border-radius:14px;background:var(--panel,#fff);color:var(--ink,#222);font:16px/1.5 Georgia,serif}" +
    "dialog.ayuda::backdrop{background:rgba(0,0,0,.5)}" +
    "dialog.ayuda h2{margin:0 0 6px;font-size:1.3rem}" +
    "dialog.ayuda h3{margin:16px 0 4px;font-size:1rem}" +
    "dialog.ayuda p{margin:0 0 6px}" +
    "dialog.ayuda ol{margin:0;padding-left:22px}" +
    "dialog.ayuda li{margin-bottom:6px}" +
    "dialog.ayuda .cerrar{display:block;width:100%;margin-top:16px;padding:10px;font:inherit;border-radius:8px;" +
    "border:1.5px solid var(--accent,#222);background:var(--accent,#222);color:var(--panel,#fff);cursor:pointer}" +
    "dialog.ayuda :focus-visible,.ayuda-btn:focus-visible{outline:3px solid var(--accent,#222);outline-offset:2px}";
  document.head.appendChild(css);

  var d = document.createElement("dialog");
  d.className = "ayuda";
  d.setAttribute("aria-labelledby", "ayuda-t");
  d.innerHTML =
    '<h2 id="ayuda-t">Cómo se juega: ' + A.titulo + "</h2>" +
    "<p>" + A.objetivo + "</p>" +
    "<h3>Paso a paso</h3><ol>" + A.pasos.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ol>" +
    "<h3>Ejemplo o truco</h3><p>" + A.ejemplo + "</p>" +
    "<h3>Niveles</h3><p>" + A.niveles + "</p>" +
    '<button type="button" class="cerrar">Entendido</button>';
  document.body.appendChild(d);
  d.querySelector(".cerrar").onclick = function () { d.close(); };
  d.addEventListener("click", function (e) { if (e.target === d) d.close(); });

  var h1 = document.querySelector("h1");
  var b = document.createElement("button");
  b.type = "button";
  b.className = "ayuda-btn";
  b.textContent = "Cómo se juega";
  b.onclick = function () { d.showModal(); };
  if (h1) h1.appendChild(b); else document.body.insertBefore(b, document.body.firstChild);

  var clave = "ayuda-visto-" + juego;
  var visto = false;
  try { visto = !!localStorage.getItem(clave); } catch (e) {}
  if (!visto) {
    d.showModal();
    try { localStorage.setItem(clave, "1"); } catch (e) {}
  }
})();
