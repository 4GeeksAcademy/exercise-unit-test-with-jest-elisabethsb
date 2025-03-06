// Contenido de app.js 
console.log("Hello World")

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// Solo un registro en consola para nosotros
console.log(sum(7,3))
// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// Definimos las tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // Japan Yen
    "USD": 1.07, // US Dollar
    "GBP": 0.87  // British Pound
};

// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // Retornamos el valor en dólares
    return valueInDollar;
};

// Función para convertir de Dólares a Yenes
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs["USD"]; // Convertimos dólares a euros
    return valueInEuro * oneEuroIs["JPY"]; // Convertimos euros a yenes
};

// Función para convertir de Yenes a Libras Esterlinas
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs["JPY"]; // Convertimos yenes a euros
    return valueInEuro * oneEuroIs["GBP"]; // Convertimos euros a libras esterlinas
};

// Exportamos las funciones para pruebas
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
