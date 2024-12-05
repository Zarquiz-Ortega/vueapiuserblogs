export const nameRules = [
    v => !!v || "El nombre es requerido",
    v => (v && v.length >= 3) || "Este campo debe tener mas de 3 caracteres",
    v => !/[`'"<>;=(){}[\]\/\\]/.test(v) || "El campo contienen caracteres no permitidos",
];

export const emailRules = [
    v => !!v || "El email es requerido",
    v => /.+@.+\..+/.test(v) || "Debe ser un email válido",
    v => !/[`'"<>;=(){}[\]\/\\]/.test(v) || "El campo contiene caracteres no permitidos"
];

export const urlRules = [
    v => !!v || "La Url es requerida",
    v => (v && v.length >= 3) || "Este campo debe tener mas de 3 caracteres",
    v => /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/.test(v) || "La URL no es válida"
];