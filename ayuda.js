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
      niveles: "Fácil: 4 fichas de 7 colores, sin repetir, y 8 intentos. Medio: 5 fichas con repetición, y 9 intentos. Difícil: 6 fichas, 8 colores y 10 intentos."
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
      niveles: "Fácil: 5×5. Medio: 6×6. Difícil: 7×7. Todos los tableros se pueden resolver."
    },
    "torres-de-hanoi": {
      titulo: "Torres de Hanói",
      objetivo: "Llevar todos los discos de la torre de la izquierda a la torre de la derecha.",
      pasos: [
        "Toca una torre para coger su disco de arriba y toca otra torre para soltarlo allí. Si te arrepientes, toca la misma torre otra vez.",
        "Solo puedes mover un disco cada vez.",
        "Un disco grande nunca puede colocarse encima de uno más pequeño.",
        "El contador te dice cuántos movimientos llevas y cuál es el mínimo posible. Con 4 discos son 15, con 6 son 63 y con 8 son 255."
      ],
      ejemplo: "Con 3 discos: mueve el pequeño a la torre derecha, el mediano a la central, el pequeño sobre el mediano, y así hasta pasar el grande a su sitio.",
      niveles: "Fácil: 4 discos. Medio: 6 discos. Difícil: 8 discos. Truco: el disco más pequeño se mueve cada dos turnos, siempre en la misma dirección."
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
      niveles: "Fácil: 16 cartas. Medio: 20 cartas. Difícil: 24 cartas. En contrarreloj, si se acaba el tiempo pierdes."
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
      niveles: "Fácil: 4×4 (5 minutos en contrarreloj). Medio: 5×5 (8 minutos). Difícil: 6×6 (15 minutos). El tablero siempre se puede resolver."
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
      niveles: "Fácil: 10×10 con 14 minas (2:30 en contrarreloj). Medio: 12×12 con 24 (6 minutos). Difícil: 16×16 con 50 (12 minutos). El reloj empieza al destapar la primera casilla."
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
      niveles: "Fácil: 7×7 (2:30 en contrarreloj). Medio: 10×10 (7 minutos). Difícil: 12×12 (13 minutos). El reloj empieza con tu primer toque."
    },
    "secuencias": {
      titulo: "Secuencias",
      objetivo: "Descubrir la regla de cada serie de números y escribir el que viene a continuación.",
      pasos: [
        "Mira los números y piensa cómo pasa de uno al siguiente: sumas, restas, multiplicaciones, cuadrados, saltos que crecen o dos series mezcladas.",
        "Escribe el número que sustituye al «?» y pulsa «Comprobar» (o Intro).",
        "Si aciertas, pasas a la siguiente serie. Si fallas, pierdes una vida ❤️ y se te enseña la regla para que aprendas.",
        "Ganas si resuelves 10 series. Pierdes si te quedas sin las 3 vidas."
      ],
      ejemplo: "Serie 2, 4, 8, 16, ?: cada número es el doble del anterior, así que sigue el 32. Serie 1, 4, 9, 16, ?: son cuadrados (1², 2², 3², 4²), sigue el 25.",
      niveles: "Fácil: sumas y restas, con 4 números a la vista. Medio: multiplicaciones, cuadrados, saltos crecientes y series entrelazadas. Difícil: tipo Fibonacci, cubos, triangulares y combinaciones de operaciones. En contrarreloj el tiempo es para las 10 series: 2:00, 3:00 y 5:00 minutos."
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
      niveles: "Fácil: 10×10 con 5 colores y algo de margen (2:30 en contrarreloj). Medio: 12×12 con 6 colores y poco margen (5 minutos). Difícil: 14×14 con 6 colores y sin margen (8 minutos). Siempre hay al menos una forma de ganar dentro del límite."
    },
    "cadena-de-palabras": {
      titulo: "Cadena de palabras",
      objetivo: "Escribir una cadena de palabras en la que cada una empieza por la última letra de la anterior, con reglas que se van sumando, antes de que se acabe el tiempo.",
      pasos: [
        "Arriba ves la letra del día. La primera palabra tiene que empezar por ella.",
        "Escribe tu palabra y pulsa «OK» (o Intro). Si cumple las reglas, pasa al siguiente eslabón de la cadena. Si no, te dice qué falla y puedes probar otra.",
        "Cada palabra empieza por la última letra de la anterior. Si acaba en K, W, X, Y, Z, Ñ, Q o J, la siguiente empieza por la letra anterior que sí se pueda encadenar.",
        "Las reglas se acumulan. Desde el eslabón 3 la palabra debe <b>contener la letra A</b>. El 4 y el 5 necesitan <b>al menos 7 letras</b>, el 6 al menos 8, el 7 al menos 9 y el 8 al menos 10. Los eslabones 5, 7 y 8 tienen que ser <b>sustantivos abstractos</b>, como libertad o esperanza.",
        "Las palabras que no están en el diccionario básico del juego se comprueban en el Wiktionary en español. Si no hay conexión, se aceptan cuando parecen españolas. Puedes escribir con o sin tildes.",
        "«Pista» te enseña las dos primeras letras de una palabra válida y resta 3 puntos.",
        "Ganas si completas toda la cadena. Si se acaba el tiempo, pierdes. Cada palabra da un punto por letra, 2 más si está en el diccionario básico y 5 más si tiene 10 letras o más. Al terminar, cada segundo que sobre suma un punto."
      ],
      ejemplo: "Letra del día C, nivel fácil: <b>casa</b> (acaba en A) → <b>amor</b> (empieza por A, acaba en R) → <b>rana</b> (empieza por R y contiene A) → <b>aventura</b> (empieza por A y tiene 8 letras).",
      niveles: "Fácil: 5 eslabones y 100 segundos. Medio: 6 eslabones y 90 segundos. Difícil: 8 eslabones y 80 segundos, con palabras cada vez más largas. El reto del día es siempre de nivel medio, y tu racha sube un día cada vez que lo completas sin ningún error."
    },
    "dilema-del-orden": {
      titulo: "Dilema del orden",
      objetivo: "Ordenar 6 elementos descubriendo la regla secreta que los ordena.",
      pasos: [
        "Arrastra cada elemento por el agarrador ⋮⋮ (o usa las flechas ▲ y ▼) hasta ponerlos en el orden que crees correcto.",
        "Pulsa «Comprobar». Te dice cuántos elementos están en su sitio y, respecto al intento anterior, si estás <b>más cerca</b> o <b>más lejos</b>. El termómetro va de frío a caliente.",
        "Nadie te dice la regla: puede ser el orden alfabético, el tamaño, la fecha, el orden lógico de un proceso... Tienes que deducirla probando. No hay penalización por intentos, pero el reloj corre.",
        "Con el <b>criterio cambiante</b> (en todos los niveles), cuando aciertas 3 elementos la regla cambia en silencio. Si de pronto tus aciertos se hunden, piensa que la regla puede haber cambiado y vuelve a ordenar.",
        "En el modo <b>Orden inverso</b> el orden correcto ya está casi hecho, pero un elemento está fuera de su sitio a propósito. Encuentra cuál es y colócalo donde toca.",
        "Ganas cuando los 6 elementos están en su sitio. Al terminar (o si te rindes) se muestran la regla y el orden final."
      ],
      ejemplo: "Con Perro, Saturno, Cebolla, Marte, Gato y Júpiter, una regla posible es «animales, luego planetas, luego verduras, y alfabético dentro de cada grupo»: Gato, Perro, Júpiter, Marte, Saturno, Cebolla. Otra sería el orden alfabético simple. El marcador te dirá cuál se acerca más.",
      niveles: "Fácil: la regla cambia cuando aciertas 3, y ves el termómetro. Medio: igual, sin termómetro. Difícil: igual que medio, con 90 segundos en contrarreloj. Con contrarreloj tienes 3 minutos (fácil), 2 (medio) o 1:30 (difícil), y si se acaban pierdes. El reto del día es siempre de nivel medio y sin límite de tiempo."
    },
    "numeros-que-hablan": {
      titulo: "Números que hablan",
      objetivo: "Descubrir qué dígito esconde cada símbolo para que todas las ecuaciones sean correctas.",
      pasos: [
        "Cada símbolo (🍎, 🍌…) es un dígito del 0 al 9. Las ecuaciones pueden sumar, restar o multiplicar, y mezclan símbolos con números normales.",
        "Toca un símbolo de la lista y después un dígito del teclado (también sirve el teclado del ordenador). Al poner un dígito, se pasa solo al siguiente símbolo sin valor.",
        "Cuando todos tengan valor, pulsa «Comprobar». Solo existe una solución posible.",
        "Normalmente cada símbolo es un dígito distinto. En los códigos marcados con ⚠ <b>Gemelos</b>, dos símbolos pueden valer lo mismo.",
        "En difícil aparecen los <b>símbolos traicioneros</b>: te dan cuatro ecuaciones y una de ellas no puede cumplirse con los mismos valores que las otras tres. Toca esa ecuación.",
        "Son 8 códigos y 3 vidas. Si fallas, o se acaba el tiempo, se muestra la solución con las cuentas hechas. Cada acierto da 10 puntos por nivel más los segundos que sobren, y 5 aciertos seguidos dan la insignia 🏅 Descifrador.",
        "En el modo <b>Código inverso</b> te dan los valores de los símbolos y tú construyes una ecuación verdadera, con al menos dos símbolos distintos, eligiendo las piezas en los desplegables."
      ],
      ejemplo: "Con 🍎 + 🍎 = 🍌 y 🍌 + 🍎 = 9: si 🍎 vale 3, entonces 🍌 vale 6, y 6 + 3 = 9 cuadra. Empieza siempre por la ecuación con menos símbolos desconocidos y ve despejando el resto.",
      niveles: "Fácil: 3 símbolos, solo sumas y restas. Medio: 4 símbolos, con multiplicaciones. Difícil: 5 símbolos, resultados de hasta 99, algunos códigos con gemelos y algunos con símbolos traicioneros. Contrarreloj: 20 segundos por código (25 en el código inverso). El reto del día es de nivel medio y sin tiempo, y tu racha sube un día cada vez que lo completas sin ningún error."
    },
    "cadena-rota": {
      titulo: "Cadena rota",
      objetivo: "Encontrar el número que rompe el patrón de una secuencia.",
      pasos: [
        "Mira cómo cambian los números: saltos fijos, multiplicaciones, saltos que van creciendo, series mezcladas, cuadrados, primos, Fibonacci, o una propiedad de las cifras (todos terminan en 6, sus cifras suman 9…).",
        "Toca el número que no encaja. La respuesta se comprueba al instante.",
        "En difícil hay secuencias con <b>dos intrusos intercalados</b>: son dos series mezcladas, una en las posiciones impares y otra en las pares, con un intruso en cada una. Toca los dos. Si te equivocas antes del segundo, vuelve a tocar el primero para soltarlo.",
        "Si fallas, se muestran el patrón, el número que debía estar y la secuencia correcta, y pierdes una vida. Son 8 cadenas y 3 vidas.",
        "Cada acierto da 10 puntos por nivel más los segundos que sobren en contrarreloj. 5 aciertos seguidos dan la insignia 🏅 Cazador de patrones.",
        "En el modo <b>Patrón inverso</b> te dan la secuencia correcta, tocas un número y escribes el intruso que lo sustituya. Vale si queda un único intruso claro. Si tu número se parece mucho al original, ganas 10 puntos extra por sutil."
      ],
      ejemplo: "2 · 4 · 6 · 9 · 10 · 12 · 14: todos van de 2 en 2, así que sobra el 9 (debería ser 8).",
      niveles: "Fácil: 7 u 8 números con sumas, multiplicaciones y múltiplos. Medio: 8 números, con saltos crecientes, cuadrados, primos, Fibonacci, series mezcladas y propiedades de las cifras. Difícil: 8 números, con cubos y patrones más raros, y tres de las ocho cadenas tienen dos intrusos. Contrarreloj: 10 segundos por cadena (20 si hay dos intrusos o en patrón inverso), y tras varios aciertos seguidos el tiempo baja hasta 3 segundos. El reto del día es de nivel medio y sin tiempo, y tu racha sube un día cada vez que lo completas sin ningún error."
    },
    "cuadrado-magico": {
      titulo: "Cuadrado mágico",
      objetivo: "Rellenar el cuadrado de 3×3 con los números del 1 al 9, sin repetir ninguno, para que todas las filas, columnas y diagonales sumen 15.",
      pasos: [
        "Toca una casilla vacía. Las casillas en negrita vienen dadas y no se pueden cambiar.",
        "Toca un número del teclado de abajo para colocarlo en la casilla seleccionada. El botón ⌫ la vacía.",
        "Cada número solo puede usarse una vez. Si repites uno, el cuadrado no puede estar bien.",
        "Cuando las nueve casillas estén llenas, el juego comprueba el resultado. Si no cuadra, te lo indica y puedes corregir.",
        "Ganas cuando las tres filas, las tres columnas y las dos diagonales suman 15. En contrarreloj tienes 2 minutos."
      ],
      ejemplo: "En cualquier cuadrado mágico de este tipo el 5 está en el centro. Las casillas opuestas respecto al centro suman 10: por ejemplo, el 2 y el 8, o el 4 y el 6.",
      niveles: "Fácil: 4 casillas dadas. Medio: 3 casillas dadas. Difícil: 2 casillas dadas. En contrarreloj, si se acaban los 2 minutos, pierdes."
    },
    "caballeros-mentirosos": {
      titulo: "Caballeros y mentirosos",
      objetivo: "Averiguar quién dice la verdad y quién miente a partir de lo que afirma cada persona.",
      pasos: [
        "Hay varias personas (Ana, Beto, Carla, Dani y Eva). Los caballeros siempre dicen la verdad y los mentirosos siempre mienten.",
        "Cada persona hace una afirmación sobre otra: «X es caballero» o «X es mentiroso».",
        "Ana ya viene marcada como dato del enigma. Para cada una de las demás, marca si es Caballero o Mentiroso. Si vuelves a pulsar la misma opción, se quita la marca.",
        "Cuando las hayas marcado todas, pulsa «Comprobar». Si alguna afirmación no encaja con tus respuestas, el juego te lo dice.",
        "Ganas cuando tus respuestas son coherentes con todas las afirmaciones. Para resolverlo, prueba suposiciones y mira si se contradicen."
      ],
      ejemplo: "Ana dice: «Beto es mentiroso». Si Ana es caballero, Beto es mentiroso. Si Ana es mentirosa, Beto es caballero. Hay que mirar el resto de afirmaciones para saber cuál de las dos cosas es cierta.",
      niveles: "Fácil: 3 personas. Medio: 4 personas. Difícil: 5 personas. Cada enigma tiene una única solución, y Ana siempre viene marcada como dato. En contrarreloj tienes 2 minutos."
    },
    "balanza": {
      titulo: "Balanza",
      objetivo: "Encontrar la moneda más pesada con el menor número de pesadas.",
      pasos: [
        "Una moneda pesa más que las demás. Todas las demás pesan lo mismo.",
        "Toca una moneda para cambiarla: el número significa sin usar, I a la izquierda y D a la derecha. Sigue tocándola para cambiarla de nuevo.",
        "Pulsa «Pesar» para ver qué lado pesa más. Hay que poner el mismo número de monedas a cada lado. Si pesan lo mismo, la moneda pesada no está en la balanza.",
        "Cada pesada gasta una de las que tienes disponibles. Las monedas atenuadas ya son auténticas, y las marcas se quitan tras cada pesada.",
        "Para dar la respuesta, pulsa «Adivinar» y toca la moneda que crees pesada. Si fallas, puedes seguir probando sin perder nada, y adivinar no gasta pesadas.",
        "Ganas si encuentras la moneda pesada. En contrarreloj tienes 2 minutos."
      ],
      ejemplo: "Con 3 monedas y una sola pesada: pon la 1 a la izquierda y la 2 a la derecha. Si la izquierda pesa más, es la 1; si pesa más la derecha, es la 2; si pesan lo mismo, es la 3.",
      niveles: "Fácil: 9 monedas y 2 pesadas. Medio: 27 monedas y 3 pesadas. Difícil: 81 monedas y 4 pesadas. Cada pesada divide el grupo en tres partes, así que 2 pesadas bastan para 9 monedas, 3 para 27 y 4 para 81. En contrarreloj tienes 2 minutos."
    },
    "calculo-contrarreloj": {
      titulo: "Cálculo contrarreloj",
      objetivo: "Resolver 10 operaciones mentales en 60 segundos.",
      pasos: [
        "Pulsa «Empezar». Aparece una operación: escribe el resultado en la casilla.",
        "Responde con «Responder» o pulsando Intro. Te dirá si era correcto y, si no, cuál era el resultado.",
        "Pasa automáticamente a la siguiente operación. El contador muestra los segundos que te quedan.",
        "Ganas la ronda si aciertas 9 o más de las 10. Si se acaba el tiempo, la ronda termina y no cuenta como ganada, aunque tengas 9 aciertos.",
        "Puedes pulsar «Reiniciar» en cualquier momento para empezar otra ronda."
      ],
      ejemplo: "Para calcular 17 × 12 puedes hacer 17 × 10 = 170 y 17 × 2 = 34, y sumar: 204. Para el 20 % de un número, basta con dividirlo entre 5.",
      niveles: "Fácil: sumas y restas hasta 50. Medio: multiplicaciones hasta 15 × 15, divisiones exactas y sumas de dos cifras. Difícil: multiplicaciones de dos cifras (desde 13) por una cifra (desde 3), divisiones, operaciones con paréntesis y el 20 % de un número."
    },
    "fracciones-orden": {
      titulo: "Fracciones en orden",
      objetivo: "Ordenar un grupo de fracciones de menor a mayor.",
      pasos: [
        "Verás varias fracciones desordenadas. Ninguna tiene el mismo valor que otra.",
        "Toca la fracción que crees más pequeña, luego la siguiente más pequeña, y así hasta completar la lista de menor a mayor.",
        "En «Tu orden» ves la secuencia que llevas. Para quitar una fracción de la lista, vuelve a tocarla.",
        "«Borrar» vacía la lista para empezar de nuevo.",
        "Pulsa «Comprobar» cuando estén todas colocadas. Si el orden no es correcto, te lo indica y puedes corregirlo.",
        "Ganas si el orden es correcto. En contrarreloj tienes 1 minuto; si se acaba, se muestra el orden correcto."
      ],
      ejemplo: "Si dos fracciones tienen el mismo denominador, la que tiene el numerador más grande es la mayor. Para comparar 3/4 y 5/6, pásalas a un denominador común: 9/12 y 10/12. Como 9 es menor que 10, 3/4 es menor que 5/6.",
      niveles: "Fácil: 4 fracciones con denominadores 3, 4, 6 u 8. Medio: 5 fracciones con denominadores entre 5 y 10. Difícil: 6 fracciones con denominadores 8, 10, 12, 14 o 15."
    },
    "letras-zen": {
      titulo: "Letras Zen",
      objetivo: "Encontrar todas las palabras ocultas uniendo letras de la rueda.",
      pasos: [
        "Arrastra el dedo (o el ratón) por las letras de la rueda para formar una palabra. Al soltar, se comprueba. Si vuelves sobre la letra anterior, la quitas.",
        "Las casillas vacías marcan la longitud de cada palabra. Si la palabra es correcta, se rellena en su hueco; si no, aparece «Esa no está». Las palabras de menos de 3 letras no cuentan.",
        "Dentro de una palabra cada letra de la rueda se usa una sola vez, pero una misma letra puede aparecer en varias palabras.",
        "«Reordenar» cambia la posición de las letras en la rueda, por si te ayuda a verlas de otra forma.",
        "Cada palabra suma tantos puntos como letras tiene. El récord de cada nivel se guarda en este navegador.",
        "Cuando encuentras todas las palabras aparece la enhorabuena. «Nueva ronda» genera otro tablero."
      ],
      ejemplo: "Con las letras A, M, O, R, S y E puedes formar MARES: arrastra M, A, R, E y S en ese orden.",
      niveles: "Fácil: palabra base de 6 letras. Medio: 7 letras. Difícil: 8 letras y solo 3 pistas. En todos los niveles el tablero incluye todas las palabras que se pueden formar con sus letras. No hay tiempo. «Zen» muestra la primera letra de cada palabra; «Pistas» desvela letras al azar."
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
