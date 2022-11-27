namespace Template {
    export async function wakingUp(): fS.SceneReturn {
        console.log("Waking Up starting");

        fS.Speech.hide();
        await fS.Location.show(location.bedroom);

        //TODO *** WECKER KLINGELN ***
        await fS.update();
        await fS.Speech.tell(RikaMother, "Rika wach auf, sonst kommst du zu spät!");
        await fS.Speech.tell(Rika, "Ja, ich bin schon wach.");
        await fS.Speech.tell(Rika, "<i>Ich sollte mich schnell anziehen, nicht dass Sagi wieder auf mich warten muss …</i>");

        //TODO *** AUSFADEN EINFADEN***
        await fS.Character.show(Rika, RikaPose.neutral, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
        await fS.Speech.tell(RikaMother, "Okay, viel Erfolg!");
    }
}
