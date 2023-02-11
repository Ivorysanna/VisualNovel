namespace Template {
    export class EndScene {
        public static async gameOver(): Promise<void> {
        console.log("End Scene starting");

        await fS.Location.show(location.darkBackground);
        await fS.update(0.5);
        await fS.Speech.tell(characters.narrator, "Du hast es nicht geschafft, Sho zu retten.");

        let startingAgain = {
            startAgain: "Sho retten"
        };

        let userInput = await fS.Menu.getInput(startingAgain, "play-again");

        if (userInput == startingAgain.startAgain) {
            window.location.reload();
        }
    }
}
}
