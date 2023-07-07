namespace YesterdayGame {
    export class EndScene {
        public static async gameOver(): Promise<void> {
            console.log("End Scene starting");

            await fS.Location.show(location.darkBackground);
            await fS.update(0.5);
            await fS.Speech.tell(characters.narrator, "Du hast es nicht geschafft, Sho zu retten.");

            let startingAgain = {
                startAgain: "Sho retten",
            };

            let userInput = await fS.Menu.getInput(startingAgain, "play-again");

            if (userInput == startingAgain.startAgain) {
                window.location.reload();
            }
        }
        public static async carEnding(): Promise<void> {
            console.log("Car Game Over starting");
            await fS.Location.show(location.darkBackground);
            await fS.update(0.5);
            await fS.Speech.tell(characters.narrator, "Du hast es geschafft, Sho zu retten.");
            await fS.Speech.tell(characters.narrator, "Aber du musstest dafür dein Leben geben.");
            await fS.Speech.tell(characters.narrator, "ENDING: Auto Unfall");
        }

        public static async goodEndingWaiting(): Promise<void> {
            console.log("Good Ending starting");
            await fS.Location.show(location.darkBackground);
            await fS.update(0.5);
            await fS.Speech.tell(characters.narrator, "Du hast es geschafft, Sho zu retten.");
            await fS.Speech.tell(characters.narrator, "ENDING: Gewartet");
        }

        public static async badEndingSagi(): Promise<void> {
            console.log("Bad Ending Sagi starting");
            await fS.Location.show(location.darkBackground);
            await fS.update(0.5);
            await fS.Speech.tell(characters.narrator, "Du hast es nicht geschafft, Sho zu retten.");
            await fS.Speech.tell(characters.narrator, "ENDING: Sagi konfrontiert");
        }
    }
}
