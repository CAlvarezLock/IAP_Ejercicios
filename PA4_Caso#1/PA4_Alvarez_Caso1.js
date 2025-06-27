function calcularFactorial() {
            
            // Declarar variables
            var i, num, factorial, salidaHTML;

            // Fase 1: Entrada
            num = parseInt(document.getElementById("num").value);

            // Asegurarse de que el número no sea negativo
            if (num < 0) { 
                    salidaHTML = "<h3> Error </h3>" +
                                 "El número debe ser un entero no negativo.";
                    document.getElementById("resultado").innerHTML = salidaHTML;
                    return;
                }

            // Fase 2: Proceso
            // Inicializar el factorial
            factorial = 1;

            // Calcular el factorial
            for (i = 1; i <= num; i++) {
                factorial = i * factorial;
            }

            // Fase 3: Salida
            salidaHTML = "<h3> Resultado </h3>" +
                        "El factorial de " + num + " es: " + factorial;

            // Mostrar el resultado
            document.getElementById("resultado").innerHTML = salidaHTML;
        }