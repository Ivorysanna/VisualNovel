namespace Template {
    export class Library {
        public static async inLibrary(): Promise<void> {
            console.log("Library");
            await fS.Location.show(location.library);
            await fS.update();
            //TODO: *** ADDING SOUND LIBRARY***

            await fS.Speech.tell(Rika, "<i>Okay, wo schaue ich das jetzt nach?</i>");
            await fS.Speech.tell(Rika, "<i>Mal sehen. “Japanische Mythologie”. Das sieht vielversprechend aus.</i>");

            //TODO: *** ADDING BOOK SOUND EFFECTS ***
            await fS.Speech.tell(Rika, "<i>Das ist wirklich viel. Ich sollte das Buch ausleihen.</i>");

            //TODO: *** ADD BORROW BUTTON*** 
            //TODO: *** ADDING RIDDLE DOWNLOAD***
            
            await fS.Speech.tell(Rika, "<i>Okay also, das Buch sagt, ich muss den Namen von diesem Dämon kennen.</i>");

            //TODO: *** ADDING IF FOR CHECKING THE NAME***
            let demonName: string = await fS.Menu.getInput("Wie heißt der Dämon?", "text");
            let nameGuessed: boolean = false;
            while (nameGuessed == false) {
                demonName = await fS.Menu.getInput("Wie heißt der Dämon?", "text");
                if (demonName == "Sagi" || "sagi") {
                    await fS.Speech.tell(Rika, "<i>… Sagi. Wir sind schon so lange Freunde. Wie kann sie mir das antun.</i>");  
                    await fS.Speech.tell(Rika, "<i>Soll ich mit Sagi sprechen, oder versuchen Sho überreden, dazubleiben.</i>");  
                    nameGuessed = true;
                } else {
                    await fS.Speech.tell(Rika, "<i>Nein, das macht ergibt keinen Sinn.</i>");
                }
            }

    


    



        }
    }
}