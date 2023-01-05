namespace Template {
    export class Choices {
        
        public static async livingHereChoice(): Promise <void> {
            let livingHereChoice = {
                movedRecently: "Vor kurzem hergezogen?",
                movedLongAgo: "Wohnst du schon lange hier?",
            };

            let firstDialogueElement = await fS.Menu.getInput(livingHereChoice, "choicesCSSClass");

            switch (firstDialogueElement) {
                case livingHereChoice.movedRecently:
                    // continue path here
                    await fS.Speech.tell(Rika, "Du bist erst vor kurzem hier hergezogen, oder?");
                    StateManager.loveOMeter -= 10;
                    await fS.Speech.tell(Sho, "Ehm…ja…");
                    break;
                case livingHereChoice.movedLongAgo:
                    // continue path here
                    await fS.Speech.tell(Rika, "Wohnst du schon lange hier? ");
                    await fS.Speech.tell(Sho, "Nein, meine Familie musste umziehen, da mein Vater oft wegen der Arbeit woanders stationiert wird.");
                    StateManager.loveOMeter += 10;
                    break;
                default:
                    console.log("Default");
                    break;
            }
        }

        public static async livingWhereChoice(): Promise <void> {
            let livingWhereChoice = {
                livingInPark: "Wohnst gegenüber vom Park?",
                goingToCityTogether: "Anbieten zusammen die Stadt anschauen",
            };
            let secondDialogueElement = await fS.Menu.getInput(livingWhereChoice, "choicesCSSClass");

            switch (secondDialogueElement) {
                case livingWhereChoice.livingInPark:
                    await fS.Speech.tell(Rika, "Du wohnst gegenüber vom Umekoji Park, nicht wahr? ");
                    await fS.Speech.tell(Sho, "… J-ja, woher weißt du das?");
                    await fS.Speech.tell(Rika, "Oh, ehm ich habe einfach geraten…");
                    StateManager.loveOMeter -= 10;
                    break;

                case livingWhereChoice.goingToCityTogether:
                    await fS.Speech.tell(Rika, "Wenn du möchtest, können wir uns mal am Wochenende treffen und wir zeigen dir ein bisschen die Stadt. ");
                    await fS.Speech.tell(Sho, "Ja, gerne, dann verlaufe ich mich vielleicht nicht mehr so oft. Ich glaube, die Straße, in der ich wohne, heißt Kitsuya-bashi Dori.");
                    StateManager.loveOMeter += 10;
                    break;
            }
        }
    }
}
