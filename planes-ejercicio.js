// Sistema completo de planes de ejercicio
// Adaptado según objetivo y duración

const planesEjercicio = {
    aumentar: {
        principiante: {
            nombre: "Plan para Ganar Masa Muscular - Principiante",
            descripcion: "Rutina básica para comenzar a ganar masa muscular",
            frecuencia: "3-4 días por semana",
            semanas: [
                {
                    numero: 1,
                    dias: [
                        {
                            dia: "LUNES",
                            grupoMuscular: "Pecho y Tríceps",
                            ejercicios: [
                                { nombre: "Press de banca con barra", series: 3, repeticiones: "8-10", descanso: "90s", notas: "Peso moderado" },
                                { nombre: "Aperturas con mancuernas", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Press inclinado con barra", series: 3, repeticiones: "8-10", descanso: "90s", notas: "" },
                                { nombre: "Fondos en paralelas", series: 2, repeticiones: "6-8", descanso: "90s", notas: "Asistidos si es necesario" },
                                { nombre: "Extensiones de tríceps", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" }
                            ],
                            cardio: "5-10 min caminata ligera al inicio",
                            duracion: "50-60 minutos"
                        },
                        {
                            dia: "MIÉRCOLES",
                            grupoMuscular: "Espalda y Bíceps",
                            ejercicios: [
                                { nombre: "Dominadas asistidas", series: 3, repeticiones: "6-8", descanso: "90s", notas: "" },
                                { nombre: "Remo con barra", series: 3, repeticiones: "8-10", descanso: "90s", notas: "" },
                                { nombre: "Jalones al pecho", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Remo con mancuerna a un brazo", series: 3, repeticiones: "10-12 cada brazo", descanso: "60s", notas: "" },
                                { nombre: "Curl de bíceps con barra", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" }
                            ],
                            cardio: "5-10 min caminata ligera al inicio",
                            duracion: "50-60 minutos"
                        },
                        {
                            dia: "VIERNES",
                            grupoMuscular: "Piernas y Hombros",
                            ejercicios: [
                                { nombre: "Sentadillas", series: 3, repeticiones: "10-12", descanso: "120s", notas: "" },
                                { nombre: "Prensa de piernas", series: 3, repeticiones: "12-15", descanso: "90s", notas: "" },
                                { nombre: "Peso muerto rumano", series: 3, repeticiones: "8-10", descanso: "90s", notas: "Con barra o mancuernas" },
                                { nombre: "Extensiones de cuádriceps", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Press militar", series: 3, repeticiones: "8-10", descanso: "90s", notas: "" },
                                { nombre: "Elevaciones laterales", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" }
                            ],
                            cardio: "5-10 min caminata ligera al inicio",
                            duracion: "55-65 minutos"
                        }
                    ]
                }
            ]
        },
        intermedio: {
            nombre: "Plan para Ganar Masa Muscular - Intermedio",
            descripcion: "Rutina avanzada para maximizar la ganancia de masa muscular",
            frecuencia: "4-5 días por semana",
            semanas: [
                {
                    numero: 1,
                    dias: [
                        {
                            dia: "LUNES",
                            grupoMuscular: "Pecho, Tríceps y Hombros",
                            ejercicios: [
                                { nombre: "Press de banca con barra", series: 4, repeticiones: "6-8", descanso: "120s", notas: "Peso pesado" },
                                { nombre: "Press inclinado con mancuernas", series: 3, repeticiones: "8-10", descanso: "90s", notas: "" },
                                { nombre: "Aperturas inclinadas", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Press de hombros con barra", series: 3, repeticiones: "8-10", descanso: "90s", notas: "" },
                                { nombre: "Elevaciones laterales", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Fondos en paralelas", series: 3, repeticiones: "8-10", descanso: "90s", notas: "Con peso si es posible" },
                                { nombre: "Extensiones de tríceps en polea", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" }
                            ],
                            cardio: "10 min estiramientos + 10 min cardio ligero",
                            duracion: "70-80 minutos"
                        },
                        {
                            dia: "MARTES",
                            grupoMuscular: "Espalda y Bíceps",
                            ejercicios: [
                                { nombre: "Peso muerto", series: 4, repeticiones: "5-6", descanso: "180s", notas: "Ejercicio principal" },
                                { nombre: "Dominadas", series: 3, repeticiones: "8-10", descanso: "120s", notas: "Con peso si es posible" },
                                { nombre: "Remo con barra agarre prono", series: 3, repeticiones: "8-10", descanso: "90s", notas: "" },
                                { nombre: "Jalones al pecho agarre ancho", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Remo con mancuerna", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Curl de bíceps martillo", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Curl concentrado", series: 2, repeticiones: "12-15", descanso: "45s", notas: "" }
                            ],
                            cardio: "10 min estiramientos + 10 min cardio ligero",
                            duracion: "70-80 minutos"
                        },
                        {
                            dia: "MIÉRCOLES",
                            grupoMuscular: "Descanso o Cardio",
                            ejercicios: [
                                { nombre: "Estiramientos completos", series: 1, repeticiones: "15-20 min", descanso: "-", notas: "Flexibilidad" },
                                { nombre: "Cardio ligero (opcional)", series: 1, repeticiones: "20-30 min", descanso: "-", notas: "Bicicleta o caminata" }
                            ],
                            cardio: "Cardio opcional 20-30 min",
                            duracion: "30-45 minutos"
                        },
                        {
                            dia: "JUEVES",
                            grupoMuscular: "Piernas y Glúteos",
                            ejercicios: [
                                { nombre: "Sentadillas con barra", series: 4, repeticiones: "8-10", descanso: "120s", notas: "Ejercicio principal" },
                                { nombre: "Prensa de piernas", series: 3, repeticiones: "12-15", descanso: "90s", notas: "" },
                                { nombre: "Zancadas con barra", series: 3, repeticiones: "10 cada pierna", descanso: "90s", notas: "" },
                                { nombre: "Peso muerto rumano", series: 3, repeticiones: "10-12", descanso: "90s", notas: "" },
                                { nombre: "Extensiones de cuádriceps", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Curl de femoral", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Elevaciones de gemelos", series: 4, repeticiones: "15-20", descanso: "60s", notas: "" }
                            ],
                            cardio: "10 min estiramientos",
                            duracion: "70-80 minutos"
                        },
                        {
                            dia: "VIERNES",
                            grupoMuscular: "Hombros, Tríceps y Abdominales",
                            ejercicios: [
                                { nombre: "Press militar detrás del cuello", series: 3, repeticiones: "8-10", descanso: "90s", notas: "" },
                                { nombre: "Press Arnold", series: 3, repeticiones: "10-12", descanso: "90s", notas: "" },
                                { nombre: "Elevaciones laterales inclinado", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Elevaciones frontales con mancuerna", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Press de tríceps cerrado", series: 3, repeticiones: "8-10", descanso: "90s", notas: "" },
                                { nombre: "Extensiones de tríceps acostado", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Abdominales en crunch", series: 3, repeticiones: "15-20", descanso: "45s", notas: "" },
                                { nombre: "Plancha", series: 3, repeticiones: "30-60s", descanso: "45s", notas: "" }
                            ],
                            cardio: "10 min estiramientos",
                            duracion: "60-70 minutos"
                        }
                    ]
                }
            ]
        },
        avanzado: {
            nombre: "Plan para Ganar Masa Muscular - Avanzado",
            descripcion: "Rutina elite para atletas experimentados, maximizando hipertrofia",
            frecuencia: "5-6 días por semana",
            semanas: [
                {
                    numero: 1,
                    dias: [
                        {
                            dia: "LUNES",
                            grupoMuscular: "Pecho, Tríceps y Hombros (Volumen)",
                            ejercicios: [
                                { nombre: "Calentamiento completo", series: 1, repeticiones: "15 min", descanso: "-", notas: "Movilidad y activación" },
                                { nombre: "Press de banca con barra", series: 5, repeticiones: "5-6", descanso: "180s", notas: "Peso máximo" },
                                { nombre: "Press inclinado con mancuernas", series: 4, repeticiones: "6-8", descanso: "120s", notas: "" },
                                { nombre: "Aperturas con cable cruzado", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Press de hombros con barra", series: 4, repeticiones: "6-8", descanso: "120s", notas: "" },
                                { nombre: "Press Arnold", series: 3, repeticiones: "8-10", descanso: "90s", notas: "" },
                                { nombre: "Elevaciones laterales con cable", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Fondos en paralelas con peso", series: 4, repeticiones: "6-8", descanso: "90s", notas: "Peso adicional" },
                                { nombre: "Extensiones de tríceps tras nuca", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Press francés con barra EZ", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" }
                            ],
                            cardio: "Solo estiramientos 10 min",
                            duracion: "90-105 minutos"
                        },
                        {
                            dia: "MARTES",
                            grupoMuscular: "Espalda y Bíceps (Volumen)",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "10 min", descanso: "-", notas: "" },
                                { nombre: "Peso muerto convencional", series: 5, repeticiones: "3-5", descanso: "240s", notas: "Ejercicio principal máximo" },
                                { nombre: "Dominadas con peso", series: 4, repeticiones: "6-8", descanso: "120s", notas: "Peso máximo posible" },
                                { nombre: "Remo con barra agarre prono", series: 4, repeticiones: "6-8", descanso: "120s", notas: "" },
                                { nombre: "Remo con barra agarre supino", series: 3, repeticiones: "8-10", descanso: "90s", notas: "Variación de agarre" },
                                { nombre: "Jalones al pecho agarre ancho", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Remo unilateral con mancuerna", series: 3, repeticiones: "10-12 cada brazo", descanso: "60s", notas: "" },
                                { nombre: "Curl de bíceps con barra", series: 4, repeticiones: "8-10", descanso: "90s", notas: "Peso pesado" },
                                { nombre: "Curl martillo alternado", series: 3, repeticiones: "10-12 cada brazo", descanso: "60s", notas: "" },
                                { nombre: "Curl concentrado", series: 3, repeticiones: "12-15", descanso: "45s", notas: "Aislamiento" }
                            ],
                            cardio: "Solo estiramientos 10 min",
                            duracion: "90-105 minutos"
                        },
                        {
                            dia: "MIÉRCOLES",
                            grupoMuscular: "Piernas Completa (Volumen)",
                            ejercicios: [
                                { nombre: "Calentamiento completo", series: 1, repeticiones: "15 min", descanso: "-", notas: "Activación piernas y glúteos" },
                                { nombre: "Sentadillas con barra", series: 5, repeticiones: "5-6", descanso: "180s", notas: "Peso máximo" },
                                { nombre: "Prensa de piernas 45°", series: 4, repeticiones: "10-12", descanso: "120s", notas: "" },
                                { nombre: "Zancadas caminando con barra", series: 3, repeticiones: "10 cada pierna", descanso: "90s", notas: "" },
                                { nombre: "Peso muerto rumano", series: 4, repeticiones: "8-10", descanso: "120s", notas: "" },
                                { nombre: "Extensiones de cuádriceps unilateral", series: 3, repeticiones: "12-15 cada pierna", descanso: "60s", notas: "" },
                                { nombre: "Curl de femoral acostado", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Peso muerto estilo sumo", series: 3, repeticiones: "8-10", descanso: "120s", notas: "Variación" },
                                { nombre: "Elevaciones de gemelos de pie", series: 4, repeticiones: "12-15", descanso: "60s", notas: "Peso completo" },
                                { nombre: "Elevaciones de gemelos sentado", series: 3, repeticiones: "15-20", descanso: "60s", notas: "Aislamiento" }
                            ],
                            cardio: "Solo estiramientos 15 min",
                            duracion: "100-115 minutos"
                        },
                        {
                            dia: "JUEVES",
                            grupoMuscular: "Hombros, Trapecios y Antebrazo",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "10 min", descanso: "-", notas: "" },
                                { nombre: "Press militar con barra", series: 4, repeticiones: "6-8", descanso: "120s", notas: "Peso pesado" },
                                { nombre: "Press Arnold con mancuernas", series: 3, repeticiones: "8-10", descanso: "90s", notas: "" },
                                { nombre: "Elevaciones laterales con mancuerna", series: 4, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Elevaciones frontales con barra", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Encogimientos de hombros", series: 4, repeticiones: "10-12", descanso: "90s", notas: "Trapecios" },
                                { nombre: "Elevaciones laterales inclinado", series: 3, repeticiones: "12-15", descanso: "60s", notas: "Deltoides posterior" },
                                { nombre: "Curl de muñeca con barra", series: 3, repeticiones: "15-20", descanso: "45s", notas: "Antebrazo" },
                                { nombre: "Extensión de muñeca", series: 3, repeticiones: "15-20", descanso: "45s", notas: "Antebrazo" }
                            ],
                            cardio: "Cardio ligero 15 min",
                            duracion: "75-85 minutos"
                        },
                        {
                            dia: "VIERNES",
                            grupoMuscular: "Brazo, Abdominales y Core",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "10 min", descanso: "-", notas: "" },
                                { nombre: "Press de tríceps en banco", series: 4, repeticiones: "8-10", descanso: "90s", notas: "Peso pesado" },
                                { nombre: "Extensiones de tríceps en polea alta", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Press francés con barra EZ", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Curl de bíceps con barra", series: 4, repeticiones: "8-10", descanso: "90s", notas: "" },
                                { nombre: "Curl martillo con mancuerna", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Curl 21s con barra", series: 3, repeticiones: "21 cada fase", descanso: "90s", notas: "Técnica especial" },
                                { nombre: "Elevaciones de piernas colgado", series: 4, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Plancha", series: 3, repeticiones: "60-90s", descanso: "60s", notas: "" },
                                { nombre: "Russian twists con peso", series: 3, repeticiones: "20-25", descanso: "45s", notas: "" },
                                { nombre: "Dragon flag", series: 3, repeticiones: "8-10", descanso: "90s", notas: "Nivel avanzado" }
                            ],
                            cardio: "Cardio ligero 15 min",
                            duracion: "80-90 minutos"
                        },
                        {
                            dia: "SÁBADO",
                            grupoMuscular: "Cardio y Recuperación",
                            ejercicios: [
                                { nombre: "Cardio de elección", series: 1, repeticiones: "30-40 min", descanso: "-", notas: "Ritmo moderado" },
                                { nombre: "Yoga o estiramientos completos", series: 1, repeticiones: "30-40 min", descanso: "-", notas: "Flexibilidad y recuperación" }
                            ],
                            cardio: "30-40 minutos",
                            duracion: "60-80 minutos"
                        },
                        {
                            dia: "DOMINGO",
                            grupoMuscular: "Descanso Total",
                            ejercicios: [
                                { nombre: "Recuperación activa (opcional)", series: 1, repeticiones: "20-30 min", descanso: "-", notas: "Caminata ligera o estiramientos" }
                            ],
                            cardio: "Opcional",
                            duracion: "20-30 min opcional"
                        }
                    ]
                }
            ]
        }
    },
    adelgazar: {
        principiante: {
            nombre: "Plan para Perder Peso - Principiante",
            descripcion: "Rutina cardiovascular y de fuerza ligera para principiantes",
            frecuencia: "4-5 días por semana",
            semanas: [
                {
                    numero: 1,
                    dias: [
                        {
                            dia: "LUNES",
                            grupoMuscular: "Cardio y Piernas",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "5-10 min", descanso: "-", notas: "Caminata rápida o bicicleta" },
                                { nombre: "Sentadillas sin peso", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Zancadas", series: 2, repeticiones: "10 cada pierna", descanso: "60s", notas: "" },
                                { nombre: "Cardio: caminata inclinada", series: 1, repeticiones: "20 min", descanso: "-", notas: "Ritmo constante" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "5-10 min", descanso: "-", notas: "" }
                            ],
                            cardio: "20-30 minutos total",
                            duracion: "40-50 minutos"
                        },
                        {
                            dia: "MARTES",
                            grupoMuscular: "Cardio y Tren Superior",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "5-10 min", descanso: "-", notas: "" },
                                { nombre: "Flexiones modificadas (rodillas)", series: 2, repeticiones: "8-12", descanso: "60s", notas: "" },
                                { nombre: "Remo con mancuerna ligera", series: 2, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Cardio: bicicleta estática", series: 1, repeticiones: "20 min", descanso: "-", notas: "Ritmo moderado" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "5-10 min", descanso: "-", notas: "" }
                            ],
                            cardio: "20-30 minutos total",
                            duracion: "40-50 minutos"
                        },
                        {
                            dia: "MIÉRCOLES",
                            grupoMuscular: "Descanso Activo",
                            ejercicios: [
                                { nombre: "Caminata ligera", series: 1, repeticiones: "30-45 min", descanso: "-", notas: "Ritmo suave" },
                                { nombre: "Estiramientos completos", series: 1, repeticiones: "15-20 min", descanso: "-", notas: "Yoga o estiramientos" }
                            ],
                            cardio: "30-45 minutos caminata",
                            duracion: "45-60 minutos"
                        },
                        {
                            dia: "JUEVES",
                            grupoMuscular: "Cardio y Cuerpo Completo",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "5-10 min", descanso: "-", notas: "" },
                                { nombre: "Sentadillas", series: 2, repeticiones: "15-20", descanso: "60s", notas: "" },
                                { nombre: "Plancha", series: 2, repeticiones: "20-30s", descanso: "45s", notas: "" },
                                { nombre: "Cardio: elíptica", series: 1, repeticiones: "20 min", descanso: "-", notas: "Ritmo constante" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "5-10 min", descanso: "-", notas: "" }
                            ],
                            cardio: "20-30 minutos total",
                            duracion: "40-50 minutos"
                        },
                        {
                            dia: "VIERNES",
                            grupoMuscular: "Cardio Intenso",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "5 min", descanso: "-", notas: "" },
                                { nombre: "HIIT básico (alternar ritmos)", series: 6, repeticiones: "30s rápido / 60s lento", descanso: "Entre intervalos", notas: "Caminata o bicicleta" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "10-15 min", descanso: "-", notas: "" }
                            ],
                            cardio: "15-20 minutos HIIT",
                            duracion: "30-40 minutos"
                        }
                    ]
                }
            ]
        },
        intermedio: {
            nombre: "Plan para Perder Peso - Intermedio",
            descripcion: "Rutina intensa de fuerza y cardio para quemar grasa",
            frecuencia: "5-6 días por semana",
            semanas: [
                {
                    numero: 1,
                    dias: [
                        {
                            dia: "LUNES",
                            grupoMuscular: "Piernas y Cardio",
                            ejercicios: [
                                { nombre: "Calentamiento dinámico", series: 1, repeticiones: "10 min", descanso: "-", notas: "" },
                                { nombre: "Sentadillas con barra", series: 4, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Zancadas con mancuernas", series: 3, repeticiones: "12 cada pierna", descanso: "60s", notas: "" },
                                { nombre: "Extensión de cuádriceps", series: 3, repeticiones: "15-20", descanso: "45s", notas: "" },
                                { nombre: "Curl de femoral", series: 3, repeticiones: "15-20", descanso: "45s", notas: "" },
                                { nombre: "Cardio: correr o elíptica", series: 1, repeticiones: "25-30 min", descanso: "-", notas: "Ritmo moderado-alto" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "10 min", descanso: "-", notas: "" }
                            ],
                            cardio: "30-40 minutos total",
                            duracion: "75-90 minutos"
                        },
                        {
                            dia: "MARTES",
                            grupoMuscular: "Tren Superior y Core",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "5 min", descanso: "-", notas: "" },
                                { nombre: "Press de pecho con mancuernas", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Remo con barra", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Press de hombro", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Tríceps en polea", series: 3, repeticiones: "15-20", descanso: "45s", notas: "" },
                                { nombre: "Curl de bíceps", series: 3, repeticiones: "15-20", descanso: "45s", notas: "" },
                                { nombre: "Abdominales con elevación de piernas", series: 3, repeticiones: "15-20", descanso: "45s", notas: "" },
                                { nombre: "Plancha lateral", series: 2, repeticiones: "30-45s cada lado", descanso: "30s", notas: "" },
                                { nombre: "Cardio ligero: remo o bicicleta", series: 1, repeticiones: "15 min", descanso: "-", notas: "" }
                            ],
                            cardio: "15 minutos",
                            duracion: "70-80 minutos"
                        },
                        {
                            dia: "MIÉRCOLES",
                            grupoMuscular: "HIIT Completo",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "5-10 min", descanso: "-", notas: "" },
                                { nombre: "Circuito de ejercicios funcionales (4 rondas)", series: 4, repeticiones: "Véase descripción", descanso: "60s entre rondas", notas: "Burpees (10), Saltos (15), Plancha (30s), Mountain climbers (20)" },
                                { nombre: "Cardio: correr intervalos", series: 5, repeticiones: "1 min rápido / 2 min lento", descanso: "-", notas: "" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "10-15 min", descanso: "-", notas: "" }
                            ],
                            cardio: "Intervalos 15-20 min",
                            duracion: "45-55 minutos"
                        },
                        {
                            dia: "JUEVES",
                            grupoMuscular: "Piernas (Posterior) y Glúteos",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "10 min", descanso: "-", notas: "" },
                                { nombre: "Peso muerto rumano", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Elevaciones de cadera", series: 3, repeticiones: "15-20", descanso: "60s", notas: "" },
                                { nombre: "Zancadas laterales", series: 3, repeticiones: "12 cada lado", descanso: "60s", notas: "" },
                                { nombre: "Elevaciones de gemelos", series: 4, repeticiones: "20-25", descanso: "45s", notas: "" },
                                { nombre: "Cardio: caminata inclinada", series: 1, repeticiones: "25-30 min", descanso: "-", notas: "Inclinación 6-8%" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "10 min", descanso: "-", notas: "" }
                            ],
                            cardio: "30 minutos",
                            duracion: "70-80 minutos"
                        },
                        {
                            dia: "VIERNES",
                            grupoMuscular: "Cuerpo Completo y Core",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "5 min", descanso: "-", notas: "" },
                                { nombre: "Sentadillas + Press", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Remo + sentadilla", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Burpees", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Kettlebell swings", series: 3, repeticiones: "15-20", descanso: "60s", notas: "" },
                                { nombre: "Plancha completa", series: 3, repeticiones: "45-60s", descanso: "45s", notas: "" },
                                { nombre: "Cardio: correr", series: 1, repeticiones: "20-25 min", descanso: "-", notas: "Ritmo constante" }
                            ],
                            cardio: "25 minutos",
                            duracion: "65-75 minutos"
                        },
                        {
                            dia: "SÁBADO",
                            grupoMuscular: "Cardio Largo",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "5 min", descanso: "-", notas: "" },
                                { nombre: "Cardio continuo: correr o bicicleta", series: 1, repeticiones: "45-60 min", descanso: "-", notas: "Ritmo moderado constante" },
                                { nombre: "Estiramientos completos", series: 1, repeticiones: "15-20 min", descanso: "-", notas: "" }
                            ],
                            cardio: "45-60 minutos",
                            duracion: "65-80 minutos"
                        }
                    ]
                }
            ]
        },
        avanzado: {
            nombre: "Plan para Perder Peso - Avanzado",
            descripcion: "Rutina intensa para pérdida de grasa acelerada con máximo rendimiento",
            frecuencia: "6 días por semana",
            semanas: [
                {
                    numero: 1,
                    dias: [
                        {
                            dia: "LUNES",
                            grupoMuscular: "Piernas y Cardio HIIT",
                            ejercicios: [
                                { nombre: "Calentamiento dinámico", series: 1, repeticiones: "15 min", descanso: "-", notas: "Activación completa" },
                                { nombre: "Sentadillas con barra", series: 4, repeticiones: "12-15", descanso: "60s", notas: "Peso moderado" },
                                { nombre: "Prensa de piernas", series: 4, repeticiones: "15-20", descanso: "45s", notas: "" },
                                { nombre: "Zancadas con mancuernas", series: 3, repeticiones: "15 cada pierna", descanso: "60s", notas: "" },
                                { nombre: "Extensión de cuádriceps unilateral", series: 3, repeticiones: "15-20 cada pierna", descanso: "45s", notas: "" },
                                { nombre: "Curl de femoral", series: 3, repeticiones: "15-20", descanso: "45s", notas: "" },
                                { nombre: "HIIT: Sprint intervalos", series: 8, repeticiones: "30s sprint / 60s recuperación", descanso: "Entre intervalos", notas: "Correr o bicicleta" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "15 min", descanso: "-", notas: "" }
                            ],
                            cardio: "HIIT 20 minutos",
                            duracion: "85-100 minutos"
                        },
                        {
                            dia: "MARTES",
                            grupoMuscular: "Tren Superior y Core Completo",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "10 min", descanso: "-", notas: "" },
                                { nombre: "Press de pecho con mancuernas", series: 4, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Remo con barra", series: 4, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Press de hombro con mancuernas", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Tríceps en polea", series: 3, repeticiones: "15-20", descanso: "45s", notas: "" },
                                { nombre: "Curl de bíceps", series: 3, repeticiones: "15-20", descanso: "45s", notas: "" },
                                { nombre: "Abdominales con elevación de piernas", series: 4, repeticiones: "15-20", descanso: "45s", notas: "" },
                                { nombre: "Plancha lateral", series: 3, repeticiones: "45-60s cada lado", descanso: "30s", notas: "" },
                                { nombre: "Russian twists con peso", series: 3, repeticiones: "25-30", descanso: "45s", notas: "" },
                                { nombre: "Cardio: remo o elíptica", series: 1, repeticiones: "20 min", descanso: "-", notas: "Ritmo intenso" }
                            ],
                            cardio: "20 minutos",
                            duracion: "85-95 minutos"
                        },
                        {
                            dia: "MIÉRCOLES",
                            grupoMuscular: "HIIT Completo y Circuito Full Body",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "10 min", descanso: "-", notas: "" },
                                { nombre: "Circuito funcional intenso (5 rondas)", series: 5, repeticiones: "Véase descripción", descanso: "90s entre rondas", notas: "Burpees (15), Saltos caja (20), Mountain climbers (30s), Kettlebell swings (20), Plancha (45s)" },
                                { nombre: "HIIT: Correr intervalos", series: 6, repeticiones: "1 min máximo / 2 min lento", descanso: "-", notas: "" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "15 min", descanso: "-", notas: "" }
                            ],
                            cardio: "Intervalos 25-30 min",
                            duracion: "70-85 minutos"
                        },
                        {
                            dia: "JUEVES",
                            grupoMuscular: "Piernas Posterior y Glúteos + Cardio",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "15 min", descanso: "-", notas: "" },
                                { nombre: "Peso muerto rumano", series: 4, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Elevaciones de cadera con peso", series: 4, repeticiones: "15-20", descanso: "60s", notas: "" },
                                { nombre: "Zancadas laterales con mancuerna", series: 3, repeticiones: "15 cada lado", descanso: "60s", notas: "" },
                                { nombre: "Hip thrust con barra", series: 3, repeticiones: "12-15", descanso: "60s", notas: "Activación glúteos" },
                                { nombre: "Elevaciones de gemelos", series: 4, repeticiones: "20-25", descanso: "45s", notas: "" },
                                { nombre: "Cardio: Escaladora", series: 1, repeticiones: "25-30 min", descanso: "-", notas: "Inclinación variable" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "15 min", descanso: "-", notas: "" }
                            ],
                            cardio: "30 minutos",
                            duracion: "85-100 minutos"
                        },
                        {
                            dia: "VIERNES",
                            grupoMuscular: "Cuerpo Completo Funcional y Core",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "10 min", descanso: "-", notas: "" },
                                { nombre: "Sentadillas + Press con barra", series: 4, repeticiones: "12-15", descanso: "60s", notas: "Complejo" },
                                { nombre: "Remo + sentadilla lateral", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Burpees con salto", series: 4, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Kettlebell swings", series: 4, repeticiones: "20-25", descanso: "45s", notas: "" },
                                { nombre: "Plancha completa", series: 3, repeticiones: "60-90s", descanso: "60s", notas: "" },
                                { nombre: "V-ups", series: 3, repeticiones: "15-20", descanso: "45s", notas: "" },
                                { nombre: "Cardio: correr tempo", series: 1, repeticiones: "25-30 min", descanso: "-", notas: "Ritmo constante-alto" }
                            ],
                            cardio: "30 minutos",
                            duracion: "75-90 minutos"
                        },
                        {
                            dia: "SÁBADO",
                            grupoMuscular: "Cardio Endurance y Recuperación",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "10 min", descanso: "-", notas: "" },
                                { nombre: "Cardio largo: correr o bicicleta", series: 1, repeticiones: "60-75 min", descanso: "-", notas: "Zona 2-3 intensidad" },
                                { nombre: "Yoga o estiramientos completos", series: 1, repeticiones: "30-40 min", descanso: "-", notas: "Recuperación activa" }
                            ],
                            cardio: "60-75 minutos",
                            duracion: "100-125 minutos"
                        },
                        {
                            dia: "DOMINGO",
                            grupoMuscular: "Descanso o Recuperación Activa",
                            ejercicios: [
                                { nombre: "Caminata ligera", series: 1, repeticiones: "30-45 min", descanso: "-", notas: "Opcional" },
                                { nombre: "Estiramientos completos", series: 1, repeticiones: "20-30 min", descanso: "-", notas: "Flexibilidad" }
                            ],
                            cardio: "Opcional",
                            duracion: "50-75 min opcional"
                        }
                    ]
                }
            ]
        }
    },
    mantener: {
        principiante: {
            nombre: "Plan para Mantener Peso - Principiante",
            descripcion: "Rutina equilibrada de mantenimiento",
            frecuencia: "3-4 días por semana",
            semanas: [
                {
                    numero: 1,
                    dias: [
                        {
                            dia: "LUNES",
                            grupoMuscular: "Cuerpo Completo",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "5-10 min", descanso: "-", notas: "Caminata rápida o trote ligero" },
                                { nombre: "Sentadillas", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Flexiones", series: 3, repeticiones: "10-12", descanso: "60s", notas: "Modificadas si es necesario" },
                                { nombre: "Remo con mancuerna", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Peso muerto rumano", series: 2, repeticiones: "12-15", descanso: "90s", notas: "" },
                                { nombre: "Plancha", series: 2, repeticiones: "30-45s", descanso: "45s", notas: "" },
                                { nombre: "Cardio ligero: caminata o bicicleta", series: 1, repeticiones: "15-20 min", descanso: "-", notas: "Ritmo moderado" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "10 min", descanso: "-", notas: "" }
                            ],
                            cardio: "15-20 minutos",
                            duracion: "55-65 minutos"
                        },
                        {
                            dia: "MIÉRCOLES",
                            grupoMuscular: "Cuerpo Completo",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "5-10 min", descanso: "-", notas: "" },
                                { nombre: "Zancadas", series: 3, repeticiones: "12 cada pierna", descanso: "60s", notas: "" },
                                { nombre: "Press de pecho con mancuernas", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Remo horizontal", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Press de hombro", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Cardio: elíptica o caminata", series: 1, repeticiones: "15-20 min", descanso: "-", notas: "" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "10 min", descanso: "-", notas: "" }
                            ],
                            cardio: "15-20 minutos",
                            duracion: "55-65 minutos"
                        },
                        {
                            dia: "VIERNES",
                            grupoMuscular: "Cardio y Flexibilidad",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "5 min", descanso: "-", notas: "" },
                                { nombre: "Cardio de elección", series: 1, repeticiones: "25-30 min", descanso: "-", notas: "Correr, nadar, bicicleta" },
                                { nombre: "Yoga o estiramientos", series: 1, repeticiones: "20-30 min", descanso: "-", notas: "" }
                            ],
                            cardio: "30 minutos",
                            duracion: "50-60 minutos"
                        }
                    ]
                }
            ]
        },
        intermedio: {
            nombre: "Plan para Mantener Peso - Intermedio",
            descripcion: "Rutina completa para mantener condición física óptima",
            frecuencia: "4-5 días por semana",
            semanas: [
                {
                    numero: 1,
                    dias: [
                        {
                            dia: "LUNES",
                            grupoMuscular: "Piernas y Glúteos",
                            ejercicios: [
                                { nombre: "Calentamiento dinámico", series: 1, repeticiones: "10 min", descanso: "-", notas: "" },
                                { nombre: "Sentadillas con barra", series: 4, repeticiones: "10-12", descanso: "90s", notas: "" },
                                { nombre: "Zancadas con mancuernas", series: 3, repeticiones: "12 cada pierna", descanso: "60s", notas: "" },
                                { nombre: "Prensa de piernas", series: 3, repeticiones: "15-18", descanso: "60s", notas: "" },
                                { nombre: "Elevaciones de cadera", series: 3, repeticiones: "15-20", descanso: "60s", notas: "" },
                                { nombre: "Curl de femoral", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Elevaciones de gemelos", series: 3, repeticiones: "20-25", descanso: "45s", notas: "" },
                                { nombre: "Cardio: bicicleta o elíptica", series: 1, repeticiones: "20-25 min", descanso: "-", notas: "Ritmo constante" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "10 min", descanso: "-", notas: "" }
                            ],
                            cardio: "20-25 minutos",
                            duracion: "70-85 minutos"
                        },
                        {
                            dia: "MARTES",
                            grupoMuscular: "Pecho, Hombros y Tríceps",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "5-10 min", descanso: "-", notas: "" },
                                { nombre: "Press de banca con barra", series: 4, repeticiones: "8-10", descanso: "90s", notas: "" },
                                { nombre: "Press inclinado con mancuernas", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Aperturas con mancuernas", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Press de hombro con mancuernas", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Elevaciones laterales", series: 3, repeticiones: "15-18", descanso: "45s", notas: "" },
                                { nombre: "Fondos en paralelas", series: 3, repeticiones: "8-12", descanso: "60s", notas: "O con peso si es posible" },
                                { nombre: "Extensiones de tríceps en polea", series: 3, repeticiones: "12-15", descanso: "45s", notas: "" },
                                { nombre: "Cardio ligero: remo", series: 1, repeticiones: "15 min", descanso: "-", notas: "" }
                            ],
                            cardio: "15 minutos",
                            duracion: "70-80 minutos"
                        },
                        {
                            dia: "MIÉRCOLES",
                            grupoMuscular: "Espalda y Bíceps",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "5-10 min", descanso: "-", notas: "" },
                                { nombre: "Peso muerto rumano", series: 3, repeticiones: "10-12", descanso: "90s", notas: "" },
                                { nombre: "Dominadas", series: 3, repeticiones: "8-10", descanso: "90s", notas: "O asistidas" },
                                { nombre: "Remo con barra", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Jalones al pecho", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Remo con mancuerna a un brazo", series: 3, repeticiones: "10-12 cada brazo", descanso: "60s", notas: "" },
                                { nombre: "Curl de bíceps con barra", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Curl martillo con mancuernas", series: 3, repeticiones: "12-15", descanso: "45s", notas: "" }
                            ],
                            cardio: "Sin cardio adicional",
                            duracion: "65-75 minutos"
                        },
                        {
                            dia: "JUEVES",
                            grupoMuscular: "Descanso Activo o Cardio",
                            ejercicios: [
                                { nombre: "Caminata o trote ligero", series: 1, repeticiones: "30-40 min", descanso: "-", notas: "Ritmo moderado" },
                                { nombre: "Estiramientos completos", series: 1, repeticiones: "20 min", descanso: "-", notas: "Yoga o rutina de flexibilidad" }
                            ],
                            cardio: "30-40 minutos",
                            duracion: "50-60 minutos"
                        },
                        {
                            dia: "VIERNES",
                            grupoMuscular: "Cuerpo Completo Funcional",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "5-10 min", descanso: "-", notas: "" },
                                { nombre: "Sentadillas + Press de hombro", series: 3, repeticiones: "10-12", descanso: "60s", notas: "Movimiento compuesto" },
                                { nombre: "Burpees", series: 3, repeticiones: "10-12", descanso: "60s", notas: "" },
                                { nombre: "Remo + Sentadilla con mancuernas", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Mountain climbers", series: 3, repeticiones: "20-30", descanso: "45s", notas: "" },
                                { nombre: "Kettlebell swings", series: 3, repeticiones: "15-20", descanso: "60s", notas: "" },
                                { nombre: "Plancha completa", series: 3, repeticiones: "45-60s", descanso: "45s", notas: "" },
                                { nombre: "Cardio: correr o bicicleta", series: 1, repeticiones: "20-25 min", descanso: "-", notas: "Ritmo moderado" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "10 min", descanso: "-", notas: "" }
                            ],
                            cardio: "25 minutos",
                            duracion: "70-80 minutos"
                        }
                    ]
                }
            ]
        },
        avanzado: {
            nombre: "Plan para Mantener Peso - Avanzado",
            descripcion: "Rutina completa de alto rendimiento para mantener condición física óptima",
            frecuencia: "5-6 días por semana",
            semanas: [
                {
                    numero: 1,
                    dias: [
                        {
                            dia: "LUNES",
                            grupoMuscular: "Piernas y Glúteos Avanzado",
                            ejercicios: [
                                { nombre: "Calentamiento dinámico completo", series: 1, repeticiones: "15 min", descanso: "-", notas: "Activación completa" },
                                { nombre: "Sentadillas con barra", series: 4, repeticiones: "10-12", descanso: "90s", notas: "" },
                                { nombre: "Prensa de piernas 45°", series: 3, repeticiones: "15-20", descanso: "60s", notas: "" },
                                { nombre: "Zancadas con barra tras nuca", series: 3, repeticiones: "12 cada pierna", descanso: "90s", notas: "" },
                                { nombre: "Hip thrust con barra", series: 4, repeticiones: "12-15", descanso: "60s", notas: "Activación glúteos" },
                                { nombre: "Extensiones de cuádriceps unilateral", series: 3, repeticiones: "15-18 cada pierna", descanso: "45s", notas: "" },
                                { nombre: "Curl de femoral acostado", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Elevaciones de gemelos de pie", series: 4, repeticiones: "15-20", descanso: "45s", notas: "" },
                                { nombre: "Cardio: correr o elíptica", series: 1, repeticiones: "25-30 min", descanso: "-", notas: "Ritmo moderado" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "15 min", descanso: "-", notas: "" }
                            ],
                            cardio: "30 minutos",
                            duracion: "85-100 minutos"
                        },
                        {
                            dia: "MARTES",
                            grupoMuscular: "Pecho, Hombros y Tríceps Avanzado",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "10 min", descanso: "-", notas: "" },
                                { nombre: "Press de banca con barra", series: 4, repeticiones: "8-10", descanso: "120s", notas: "" },
                                { nombre: "Press inclinado con mancuernas", series: 3, repeticiones: "10-12", descanso: "90s", notas: "" },
                                { nombre: "Aperturas inclinadas con mancuernas", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Aperturas en cable cruzado", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Press Arnold con mancuernas", series: 3, repeticiones: "10-12", descanso: "90s", notas: "" },
                                { nombre: "Elevaciones laterales con mancuerna", series: 3, repeticiones: "15-18", descanso: "60s", notas: "" },
                                { nombre: "Elevaciones laterales inclinado", series: 3, repeticiones: "12-15", descanso: "60s", notas: "Deltoides posterior" },
                                { nombre: "Fondos en paralelas con peso", series: 3, repeticiones: "8-12", descanso: "90s", notas: "O con peso si es posible" },
                                { nombre: "Extensiones de tríceps en polea", series: 3, repeticiones: "15-20", descanso: "45s", notas: "" },
                                { nombre: "Cardio ligero: remo", series: 1, repeticiones: "20 min", descanso: "-", notas: "" }
                            ],
                            cardio: "20 minutos",
                            duracion: "85-95 minutos"
                        },
                        {
                            dia: "MIÉRCOLES",
                            grupoMuscular: "Espalda y Bíceps Avanzado",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "10 min", descanso: "-", notas: "" },
                                { nombre: "Peso muerto convencional", series: 4, repeticiones: "8-10", descanso: "120s", notas: "" },
                                { nombre: "Dominadas con peso", series: 4, repeticiones: "8-10", descanso: "120s", notas: "O con peso si es posible" },
                                { nombre: "Remo con barra agarre prono", series: 3, repeticiones: "10-12", descanso: "90s", notas: "" },
                                { nombre: "Remo con barra agarre supino", series: 3, repeticiones: "10-12", descanso: "90s", notas: "Variación" },
                                { nombre: "Jalones al pecho agarre ancho", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Remo unilateral con mancuerna", series: 3, repeticiones: "12-15 cada brazo", descanso: "60s", notas: "" },
                                { nombre: "Curl de bíceps con barra", series: 3, repeticiones: "10-12", descanso: "90s", notas: "" },
                                { nombre: "Curl martillo alternado", series: 3, repeticiones: "12-15 cada brazo", descanso: "60s", notas: "" },
                                { nombre: "Curl concentrado", series: 3, repeticiones: "15-18", descanso: "45s", notas: "Aislamiento" },
                                { nombre: "Cardio: bicicleta", series: 1, repeticiones: "15 min", descanso: "-", notas: "" }
                            ],
                            cardio: "15 minutos",
                            duracion: "80-95 minutos"
                        },
                        {
                            dia: "JUEVES",
                            grupoMuscular: "Descanso Activo y Movilidad",
                            ejercicios: [
                                { nombre: "Caminata o trote ligero", series: 1, repeticiones: "30-45 min", descanso: "-", notas: "Ritmo moderado" },
                                { nombre: "Yoga completo", series: 1, repeticiones: "40-50 min", descanso: "-", notas: "Rutina completa de flexibilidad" }
                            ],
                            cardio: "30-45 minutos",
                            duracion: "70-95 minutos"
                        },
                        {
                            dia: "VIERNES",
                            grupoMuscular: "Cuerpo Completo Funcional Intenso",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "10 min", descanso: "-", notas: "" },
                                { nombre: "Sentadillas + Press de hombro", series: 4, repeticiones: "10-12", descanso: "90s", notas: "Complejo pesado" },
                                { nombre: "Peso muerto rumano + remo", series: 3, repeticiones: "10-12", descanso: "90s", notas: "Complejo" },
                                { nombre: "Burpees con salto", series: 3, repeticiones: "12-15", descanso: "60s", notas: "" },
                                { nombre: "Kettlebell swings", series: 4, repeticiones: "20-25", descanso: "60s", notas: "" },
                                { nombre: "Mountain climbers", series: 3, repeticiones: "30-40", descanso: "45s", notas: "" },
                                { nombre: "Turkish get-ups", series: 3, repeticiones: "5 cada lado", descanso: "90s", notas: "Ejercicio funcional avanzado" },
                                { nombre: "Plancha completa avanzada", series: 3, repeticiones: "60-90s", descanso: "60s", notas: "" },
                                { nombre: "V-ups", series: 3, repeticiones: "15-20", descanso: "45s", notas: "" },
                                { nombre: "Cardio: correr o bicicleta", series: 1, repeticiones: "25-30 min", descanso: "-", notas: "Ritmo moderado-alto" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "15 min", descanso: "-", notas: "" }
                            ],
                            cardio: "30 minutos",
                            duracion: "90-110 minutos"
                        },
                        {
                            dia: "SÁBADO",
                            grupoMuscular: "Cardio, Core y Flexibilidad",
                            ejercicios: [
                                { nombre: "Calentamiento", series: 1, repeticiones: "10 min", descanso: "-", notas: "" },
                                { nombre: "Cardio continuo: correr o nadar", series: 1, repeticiones: "40-50 min", descanso: "-", notas: "Zona 2 intensidad" },
                                { nombre: "Core completo: planchas, ab cracks, etc", series: 1, repeticiones: "20 min", descanso: "-", notas: "Variedades" },
                                { nombre: "Yoga o estiramientos completos", series: 1, repeticiones: "30-40 min", descanso: "-", notas: "" }
                            ],
                            cardio: "40-50 minutos",
                            duracion: "100-120 minutos"
                        },
                        {
                            dia: "DOMINGO",
                            grupoMuscular: "Descanso o Recuperación Activa",
                            ejercicios: [
                                { nombre: "Caminata ligera", series: 1, repeticiones: "30-45 min", descanso: "-", notas: "Opcional" },
                                { nombre: "Estiramientos", series: 1, repeticiones: "20-30 min", descanso: "-", notas: "Flexibilidad" }
                            ],
                            cardio: "Opcional",
                            duracion: "50-75 min opcional"
                        }
                    ]
                }
            ]
        }
    }
};

// Exportar función para obtener plan de ejercicio
window.generarPlanEjercicio = function(objetivo, nivel = 'principiante', duracion = 'semana') {
    if (!planesEjercicio[objetivo] || !planesEjercicio[objetivo][nivel]) {
        return null;
    }
    
    const planBase = planesEjercicio[objetivo][nivel];
    
    // Determinar número de semanas
    let numSemanas = 1;
    if (duracion === '2semanas') numSemanas = 2;
    else if (duracion === '3semanas') numSemanas = 3;
    else if (duracion === 'mes') numSemanas = 4;
    
    const planCompleto = {
        nombre: planBase.nombre,
        descripcion: planBase.descripcion,
        frecuencia: planBase.frecuencia,
        semanas: []
    };
    
    // Duplicar semanas según duración
    for (let i = 0; i < numSemanas; i++) {
        planCompleto.semanas.push({
            numero: i + 1,
            dias: planBase.semanas[0].dias.map(dia => ({...dia}))
        });
    }
    
    return planCompleto;
};

