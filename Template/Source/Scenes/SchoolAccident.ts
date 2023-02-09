namespace Template {
    export class SchoolAccident {
        public static async firstSchoolAccident(): Promise<void> {
            console.log("1. School Accident");
            //*** FOURTH BAD ENDING***
            await fS.Speech.tell(Sho, "Was für Hausaufgaben hast du heute? Ich muss noch für Kunst was erledigen, hast du eine Schere?");
            await fS.Speech.tell(Rika, "Nein, leider nicht. Aber ich glaube, im Schrank sollten welche sein.");
            await fS.Speech.tell(Sho, "Ah, danke.");

            //Changing storyState to SchoolAccidentHappend
            StateManager.storyState = StoryState.SchoolAccidentHappend;

            //TODO: Open Cabinet Sound adding 

            await fS.Speech.tell(Sho, "Ohje, die stehen ja ganz oben.");

            //TODO: Sound of things falling down adding 
            //TODO: ADD ENDPICUTRE
            //*** GAME OVER***
            console.log("GAME OVER: School Accident");  
        }
        public static async schoolAccidentHappend(): Promise<void> {
            //*** FOURTH BAD ENDING***
            //TODO: ADD SOUNDS
            //TODO: ADD ENDPICUTRE
            //*** GAME OVER***
            console.log("GAME OVER: School Accident");  
        }
    }
}