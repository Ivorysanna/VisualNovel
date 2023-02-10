namespace Template {
    export class SavingSho {
        public static async savingSho(): Promise<void> {
            console.log("Saving Sho");
            
            await fS.Location.show(location.uni);
            await fS.update();

            await fS.Character.show(Sho, ShoPose.neutral, fS.positions.bottomcenter);
            await fS.update();

            //sho tell
            await fS.Speech.tell(Sho, "Okay, dir nach.");
            await fS.Speech.tell(Rika, "...");
            await fS.Speech.tell(Rika, "<i>Ich muss den gleichen Weg nehmen wie beim ersten Mal.</i>");
            await fS.Speech.tell(Rika, "Lass uns den etwas längeren Weg nehmen, er ist nicht arg länger, aber dafür viel schöner.");
            await fS.Speech.tell(Sho, "Klar, gerne, dann sehe ich auch mal neue Orte in dieser Stadt.");
            
            //fade out screen
            fS.Character.hideAll();
            fS.Speech.hide();
            await fS.update();
            await fS.Location.show(location.darkBackground);
            await fS.update();
            await fS.Progress.delay(3);

            //TODO: *** ADDING SOUND STREET***
            await fS.Location.show(location.streetCity);
            await fS.update();

            await fS.Character.show(Sho, ShoPose.neutral, fS.positions.bottomcenter);
            await fS.update();

            await fS.Speech.tell(Rika, "<i>Hier müsste es gleich sein, gleich kommt das Auto.</i>");
            await fS.Speech.tell(Rika, "So, hier um die Ecke ist auch schon das Einkaufszentrum. Wenn du möchtest, können wir uns hier am Wochenende auf einen Bubble Tea treffen und vielleicht…");

            //TODO: *** ADDING SOUND CAR***
            // *** Auswahlmöglichkeit***
            await EndingChoices.firstBadEndingAgain();


        }
    }
}