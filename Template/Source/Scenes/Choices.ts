namespace Template {
    export async function Choices(): fS.SceneReturn {
        let livingHereChoice = {
            movedrecently: "Vor kurzem hergezogen?",
            movedLongAgo: "Wohnst du schon lange hier?",
        };

        let dialogueElement = await fS.Menu.getInput(livingHereChoice, "choicesCSSClass");

        if (storyState == "") {
            switch (dialogueElement) {
                case livingHereChoice.movedrecently:
                    // continue path here
                    await fS.Speech.tell(Rika, "Du bist erst vor kurzem hier hergezogen, oder? ");
                    loveOMeter -= 10;
                    await fS.Speech.tell(Sho, "Ehm…ja…");

                    console.log("Love-O-Meter: " + loveOMeter);
                    break;
                case livingHereChoice.movedLongAgo:
                    // continue path here
                    await fS.Speech.tell(Rika, "Wohnst du schon lange hier? ");
                    await fS.Speech.tell(Rika, "Nein, meine Familie musste umziehen, da mein Vater oft wegen der Arbeit woanders stationiert wird.");
                    loveOMeter += 5;
                    console.log("Love-O-Meter: " + loveOMeter);
                    break;
            }
        }

        // NEXT CHOICE
    }
}
