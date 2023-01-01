namespace Template {
    export async function WakingUp(): fS.SceneReturn {
        console.log("Waking Up starting");
        //TODO: *** DONT FORGET DELAYS ***
        switch (storyState) {
            case "":
                //TODO:fS.Sound.play(sound.alarmClock, 0.5, false);
                //TODO: await fS.Progress.delay(4);
                await fS.Location.show(location.bedroom);
                await fS.update(transition.swirl.duration, transition.swirl.alpha, transition.swirl.edge);

                await fS.update();
                //await fS.Progress.delay(3);
                await fS.Speech.tell(RikaMother, "Rika wach auf, sonst kommst du zu spät!");
                await fS.Speech.tell(Rika, "Ja, ich bin schon wach.");
                await fS.Speech.tell(Rika, "<i>Ich sollte mich schnell fertig machen, nicht dass Sagi wieder auf mich warten muss …</i>");
                //TODO: await fS.Progress.delay(3);

                await fS.Location.show(location.darkBackground);
                fS.Speech.hide();
                fS.Character.hideAll();
                await fS.update();

                await fS.Progress.delay(5);

                await fS.Location.show(location.bedroom);
                await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(40, 100));
                await fS.update(0.5);
                await fS.Speech.tell(Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await fS.Speech.tell(RikaMother, "Okay, viel Erfolg!");
                await fS.Character.animate(Rika, RikaPose.neutral, leavingLeft());
                break;

            case "carCrashHappend":
                //TODO: AFTER ACCIDENT SCENE BAUEN
                //*** After Car Accident***
                fS.Sound.play(sound.alarmClock, 0.5, false);
                //TODO: await fS.Progress.delay(4);
                await fS.Location.show(location.bedroom);
                await fS.update(transition.swirl.duration, transition.swirl.alpha, transition.swirl.edge);
                await fS.Speech.tell(RikaMother, "Rika wach auf, sonst kommst du zu spät!");
                await fS.Speech.tell(Rika, "<i>Was… Was war das für ein Traum…</i>");
                await fS.Speech.tell(Rika, "Ja ich bin schon wach.");
                await fS.Speech.tell(Rika, "<i>Ich sollte mich schnell anziehen, nicht, dass Sagi auf mich warten muss.</i>");

                await fS.Location.show(location.darkBackground);
                fS.Speech.hide();
                fS.Character.hideAll();
                await fS.update();

                await fS.Location.show(location.bedroom);
                await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(40, 100));
                await fS.update(0.5);
                await fS.Speech.tell(Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await fS.Speech.tell(RikaMother, "Okay, viel Erfolg!");
        }
    }
}
