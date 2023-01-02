namespace Template {
    export async function Choices(): fS.SceneReturn {
        let livingHereChoice = {
            movedrecently: "Vor kurzem hergezogen?",
            movedLongAgo: "Wohnst du schon lange hier?",
        };

        let livingWhereChoice = {
            livingInPark: "Wohnst gegenüber vom Park?",
            goingToCityTogether: "<i>Anbieten zusammen die Stadt anschauen</i>"
        };

        let firstDialogueElement = await fS.Menu.getInput(livingHereChoice, "choicesCSSClass");
        let secondDialogueElement = await fS.Menu.getInput(livingWhereChoice, "choicesCSSClass");

        switch (choicesState) {
            case "firstChoice":
                switch (firstDialogueElement) {
                    case livingHereChoice.movedrecently:
                        // continue path here
                        await fS.Speech.tell(Rika, "Du bist erst vor kurzem hier hergezogen, oder?");
                        loveOMeter -= 10;
                        await fS.Speech.tell(Sho, "Ehm…ja…");

                        
                        break;
                    case livingHereChoice.movedLongAgo:
                        // continue path here
                        await fS.Speech.tell(Rika, "Wohnst du schon lange hier? ");
                        await fS.Speech.tell(Sho, "Nein, meine Familie musste umziehen, da mein Vater oft wegen der Arbeit woanders stationiert wird.");
                        loveOMeter += 10;
                        break;
                }
            case "secondChoice":
                switch (secondDialogueElement) {
                        case livingWhereChoice.livingInPark:
                            await fS.Speech.tell(Rika, "Du wohnst gegenüber vom Umekoji Park, nicht wahr? ");
                            await fS.Speech.tell(Sho, "… J-ja, woher weißt du das?");
                            await fS.Speech.tell(Rika, "Oh, ehm ich habe einfach geraten…");
                            loveOMeter -= 10;
                            break;

                        case livingWhereChoice.goingToCityTogether:
                            await fS.Speech.tell(Rika, "Wenn du möchtest, können wir uns mal am Wochenende treffen und wir zeigen dir ein bisschen die Stadt. ");
                            await fS.Speech.tell(Sho, "Ja, gerne, dann verlaufe ich mich vielleicht nicht mehr so oft. Ich glaube, die Straße, in der ich wohne, heißt Kitsuya-bashi Dori.");
                            loveOMeter += 10;
                            break;
                }
        }
        // NEXT CHOICE
    }
}