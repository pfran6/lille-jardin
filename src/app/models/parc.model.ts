export class Parc {
    constructor(
        public id: number,
        public nom: string,
        public quartier: string,
        public hiearchie: number,
        public sous_type: string,
        public ouvert_public: string,
        public ouverture_etat: string,
        public horaire_ouverture_estivale: string,
        public horaire_ouverture_hivernale: string,
        public jeux_enfants: string,
        public adresse: string,
        public surface: string,
        public acces_metro_500m: string,
        public acces_tramway_500m: string,
        public acces_ville_300m: string,
        public annee_ouverture: string,
        public x: number,
        public y: number,
        public longitude: number,
        public latitude: number
    ) {  }
}