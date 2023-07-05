namespace Template {
    export class Library {
        public static async inLibrary(): Promise<void> {
            console.log("Library");
            await fS.Location.show(location.library);
            await fS.update(transition.wipeLeft.duration, transition.wipeLeft.alpha, transition.wipeLeft.edge);
            await fS.update();
            
            fS.Sound.play(sound.librarySound, 0.5, true);

            await fS.Speech.tell(Rika, "<i>Okay, wo schaue ich das jetzt nach?</i>");
            fS.Sound.play(sound.book, 0.7, false);
            await fS.Progress.delay(1);
            fS.Sound.play(sound.book, 0.7, false);
            await fS.Progress.delay(1);
            await fS.Speech.tell(Rika, "<i>Mal sehen. “Japanische Mythologie”. Das sieht vielversprechend aus.</i>");
            fS.Sound.play(sound.book, 0.7, false);
            await fS.Progress.delay(1);
            await fS.Speech.tell(Rika, "<i>Das ist wirklich viel. Ich sollte das Buch ausleihen.</i>");

            InterfaceHelper.toggleAusleihButton();
            await fS.Progress.delay(10);
            // InterfaceHelper.toggleAusleihButton();
            
            await fS.Speech.tell(Rika, "<i>Okay also, das Buch sagt, ich muss den Namen von diesem Dämon kennen.</i>");
            //TODO: *** ADDING IF FOR CHECKING THE NAME***
            let nameGuessed: boolean = false;
            while (!nameGuessed) {
                await fS.Speech.tell(Rika, "<i>Wer könnte der Dämon sein?</i>");
                let demonName: string  = await fS.Speech.getInput();
                console.log(demonName);
                if (demonName == "Sagi" || demonName == "sagi" || demonName == "Sagi Aoki" || demonName == "sagi aoki" || demonName == "Sagi aoki" || demonName == "sagi Aoki") {
                    await fS.Speech.tell(Rika, "<i>… Sagi. Wir sind schon so lange Freunde. Wie kann sie mir das antun.</i>");  
                    await fS.Speech.tell(Rika, "<i>Soll ich mit Sagi sprechen, oder versuchen Sho überreden, dazubleiben?</i>");
                    nameGuessed = true;
                    // *** Auswahlmöglichkeit ***
                    // fS.Sound.fade(sound.librarySound, 0, 1);
                    await EndingChoices.fourthEnding();
                } else {
                    await fS.Speech.tell(Rika, demonName + ". ... " + "<i>Nein, das ergibt keinen Sinn.</i>");
                }
            }
        }
    }
}