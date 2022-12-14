namespace Template {
    export class Choices {
        public static async livingHereChoice(): Promise<void> {
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

        public static async livingWhereChoice(): Promise<void> {
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

        public static async goingHomeFastChoice(): Promise<void> {
            let goingHomeFastChoice = {
                tooMuchHomework: "Ich muss noch sehr viele Hausaufgaben machen.",
                strangeDreams: "Ich habe die letzten Tage was sehr Komisches geträumt.",
                showingFastestRoute: "Ehm... Um dir den schnellsten Weg zu zeigen. Morgen können wir gerne den schöneren Weg nehmen. ",
            };
            let thirdDialogueElement = await fS.Menu.getInput(goingHomeFastChoice, "choicesCSSClass");

            switch (thirdDialogueElement) {
                case goingHomeFastChoice.tooMuchHomework:
                    await fS.Speech.tell(Rika, "Wir haben heute echt einige Aufgaben für zu Hause bekommen. Ich denke, bei dir wird das nicht anders sein.");
                    await fS.Speech.tell(Sho, "Ja, stimmt. Wir haben heute auch viele Aufgaben bekommen. Sollen wir das vielleicht zusammen machen?");
                    await fS.Speech.tell(Rika, "J-Ja klar…");
                    //TODO: ADDING FALLING SOUND
                    await fS.Speech.tell(Rika, "SHO, VORSICHT!");
                    break;

                case goingHomeFastChoice.strangeDreams:
                    await fS.Speech.tell(Rika, "Ich habe die letzten Tage etwas echt Komisches geträumt und ich habe das Gefühl, wenn wir schneller nach Hause gehen, dann hören diese Träume auf… ");
                    await fS.Speech.tell(Sho, "Ach so…");
                    StateManager.loveOMeter -= 10;
                    //TODO: ADDING FALLING SOUND
                    await fS.Speech.tell(Rika, "SHO, VORSICHT!");
                    break;

                case goingHomeFastChoice.showingFastestRoute:
                    await fS.Speech.tell(Rika, "Ehm… Um dir den schnellsten Weg zu zeigen. Wir können morgen gerne den anderen Weg nehmen.");
                    await fS.Speech.tell(Sho, "Haha. Irgendwie habe ich ein Déjá-vu. Als hättest du das mit dem schnellsten Weg schon einmal gesagt.");
                    await fS.Speech.tell(Rika, "<i>//Was?!… Hat er auch solche komischen Träume?</i>");
                    await fS.Speech.tell(Rika, "Witzig, dass du das sagst. Ich habe zurzeit so komisch…");
                    //TODO: ADDING FALLING SOUND
                    await fS.Speech.tell(Rika, "SHO, VORSICHT!");
                    StateManager.loveOMeter += 10;
                    break;
            }
        }

        public static async askingShoAboutFriends(): Promise<void> {
            let askingAboutFriends = {
                hardToMoveOften: "Das muss schwer sein, so oft umzuziehen.",
                manyFriends: "Du hast bestimmt viele Freunde, wenn du so oft umziehst.",
            };
            let fourthDialogueElement = await fS.Menu.getInput(askingAboutFriends, "choicesCSSClass");

            switch (fourthDialogueElement) {
                case askingAboutFriends.hardToMoveOften:
                    await fS.Speech.tell(Rika, "Das muss schwer sein, so oft umzuziehen.");
                    await fS.Speech.tell(Sho, "Ja, also es geht eigentlich. Dadurch habe ich viele Bekannte, aber leider kaum gute Freunde.");
                    await fS.Speech.tell(Rika, "Hoffentlich bleibst du dieses Mal länger hier.");
                    await fS.Speech.tell(Sho, "… Danke, Rika.");

                    StateManager.loveOMeter += 10;

                    //TODO: ADDING FALLING SOUND
                    await fS.Speech.tell(Rika, "SHO, VORSICHT!");
                    break;

                case askingAboutFriends.manyFriends:
                    await fS.Speech.tell(Rika, "Ich habe die letzten Tage etwas echt Komisches geträumt und ich habe das Gefühl, wenn wir schneller nach Hause gehen, dann hören diese Träume auf… ");
                    await fS.Speech.tell(Sho, "Ach so…");
                    StateManager.loveOMeter -= 10;
                    //TODO: ADDING FALLING SOUND
                    await fS.Speech.tell(Rika, "SHO, VORSICHT!");
                    break;
            }
        }
    }
}
