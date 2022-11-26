namespace Template {
    export async function firstScene(): fS.SceneReturn {
        console.log("First Scene starting");

        // let text = {
        //     Ai: {
        //         T0001: "Hallo",
        //         T0002: "Anderer Text",
        //         T0003: "Text Nummer 3",
        //     },
        // };
        
        fS.Speech.hide();
        await fS.Location.show(location.alley);
        await fS.Character.show(characters.Ai, characters.Ai.pose.neutral, fS.positions.bottomcenter);
        //await ƒS.Character.show(characters.Ai, characters.Ai.pose.neutral, ƒS.positionPercent(60, 120));
        await fS.update();
        await fS.Speech.tell(characters.Ai, "Text in einer Zeile");
        await fS.Speech.tell(characters.Ai, "Zweiter Text in einer Zeile");

        let pickedYes: boolean;
        let pickedNo: boolean;
        let pickedMaybe: boolean;
        let pickedOk: boolean;
        let readEverything: boolean = false;
        
        let dialogue = {
            iSayYes: "Ja",
            iSayOk: "Okay.",
            iSayNo: "Nein",
            iSayMaybe: "Vielleicht"
        };
        //Muss um eine do-while Schleife
        do {
            if (pickedMaybe) {
                //Möglichkeit zum löschen von Auswahlmöglichkeiten
                delete dialogue.iSayMaybe;
            } else if (pickedNo) {
                delete dialogue.iSayNo;
            } else if (pickedOk) {
                delete dialogue.iSayOk;
            } else if (pickedYes) {
                delete dialogue.iSayYes;
            } 

            let dialogueElement = await  fS.Menu.getInput(dialogue, "choicesCSSClass");
        
            switch (dialogueElement) {
                case dialogue.iSayYes:
                    //Continue path here
                    console.log("test");
                    await fS.Speech.tell(characters.Ai, "Ich sage JA!");
                    pickedYes = true;
                    break; 
                case dialogue.iSayOk:
                    //Continue path here
                    await fS.Speech.tell(characters.Ai, "Ich sage OK!");
                    pickedOk = true;
                    break; 
                case dialogue.iSayNo:
                    //Continue path here
                    await fS.Speech.tell(characters.Ai, "Ich sage Nein!");
                    pickedNo = true;
                    break; 
                case dialogue.iSayMaybe:
                    //Continue path here
                    await fS.Speech.tell(characters.Ai, "Ich sage Vielleicht!");
                    pickedMaybe = true;
                    break;
            }

            if (pickedMaybe && pickedOk && pickedNo && pickedYes) {
                    readEverything = true;
            } 
        } while (readEverything == false);      
        }
}
