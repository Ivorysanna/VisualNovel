namespace Template {
    export async function wakingUp(): fS.SceneReturn {
        console.log("Waking Up starting");
        let firstWakingUp: boolean = false;
        //TODO *** DONT FORGET DELAYS ***
        fS.Speech.hide();

        if (!firstWakingUp) {
            fS.Speech.hide();
            await fS.Sound.play(sound.alarmClock, 0.5, false);
            //await fS.Progress.delay(4);
            await fS.Location.show(location.bedroom);
            await fS.update(transition.swirl.duration, transition.swirl.alpha, transition.swirl.edge);

            // *** WECKER KLINGELN ***
            await fS.update();
            //await fS.Progress.delay(3);
            await fS.Speech.tell(RikaMother, "Rika wach auf, sonst kommst du zu spät!");
            await fS.Speech.tell(Rika, "Ja, ich bin schon wach.");
            await fS.Speech.tell(Rika, "<i>Ich sollte mich schnell fertig machen, nicht dass Sagi wieder auf mich warten muss …</i>");
            //await fS.Progress.delay(3);

            //TODO *** AUSFADEN EINFADEN***
            await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(40, 100));
            await fS.update(0.5);
            await fS.Speech.tell(Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
            fS.Speech.tell(RikaMother, "Okay, viel Erfolg!");
            await fS.Character.animate(Rika, RikaPose.neutral, leavingLeft());
            firstWakingUp = true;
            //await fS.Progress.delay(1);
        } else {
            //*** After Car Accident***

        }
    }
}
