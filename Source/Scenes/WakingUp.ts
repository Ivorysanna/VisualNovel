namespace YesterdayGame {
    export async function WakingUp(): fS.SceneReturn {
        console.log("Waking Up starting");
        //TODO: *** DONT FORGET DELAYS ***
        switch (YesterdayGame.dataForSave.storyState) {
            case StoryState.FirstRun:
                fS.Sound.play(sound.alarmClock, 0.5, false);
                await fS.Progress.delay(2);
                await fS.Location.show(location.bedroom);
                await fS.update(transition.wipeLeft.duration, transition.wipeLeft.alpha, transition.wipeLeft.edge);

                await fS.Progress.delay(3);
                await fS.Speech.tell(RikaMother, "Rika wach auf, sonst kommst du zu spät!");
                await fS.Speech.tell(Rika, "Ja, ich bin schon wach.");
                await fS.Speech.tell(Rika, "<i>Ich sollte mich schnell fertig machen, nicht dass Sagi wieder auf mich warten muss …</i>");
                await fS.Progress.delay(1);

                await fS.Location.show(location.darkBackground);
                fS.Speech.hide();
                fS.Character.hideAll();
                await fS.update(0.5);
                fS.Sound.play(sound.cloth, 0.8, false);

                await fS.Progress.delay(8);

                await fS.Location.show(location.bedroom);
                await fS.update();
                await fS.Speech.tell(Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await fS.Speech.tell(RikaMother, "Okay, viel Erfolg!");
                // await fS.update(transition.wipeLeft.duration, transition.wipeLeft.alpha, transition.wipeLeft.edge);
                await TransitionManager.blendInOut();
                // await fS.update(transition.wipeRight.duration, transition.wipeRight.alpha, transition.wipeRight.edge);
                break;
            case StoryState.CarCrashHappend:
                //*** After Car Accident***
                await fS.Progress.delay(4);
                await fS.Location.show(location.bedroom);
                fS.Sound.play(sound.alarmClock, 0.5, false);
                await fS.update(transition.wipeLeft.duration, transition.wipeLeft.alpha, transition.wipeLeft.edge);
                await fS.Speech.tell(RikaMother, "Rika wach auf, sonst kommst du zu spät!");
                await fS.Speech.tell(Rika, "<i>Was… Was war das für ein Traum…</i>");
                await fS.Speech.tell(Rika, "Ja ich bin schon wach.");
                await fS.Speech.tell(Rika, "<i>Ich sollte mich schnell anziehen, nicht, dass Sagi auf mich warten muss.</i>");

                await fS.Location.show(location.darkBackground);
                fS.Speech.hide();
                fS.Character.hideAll();
                await fS.update(0.5);
                fS.Sound.play(sound.cloth, 0.8, false);

                await fS.Progress.delay(8);

                await fS.Location.show(location.bedroom);
                await fS.update();
                await fS.Speech.tell(Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await fS.Speech.tell(RikaMother, "Okay, viel Erfolg!");
                fS.Character.hideAll();
                // await TransitionManager.blendInOut();
                break;

            case StoryState.ConstructionSiteAccidentHappend:
                // *** AFTER CONSTRUCTION SITE ACCIDENT ***
                await fS.Progress.delay(4);
                await fS.Location.show(location.bedroom);
                await fS.update(transition.wipeLeft.duration, transition.wipeLeft.alpha, transition.wipeLeft.edge);
                await fS.Progress.delay(2);
                await fS.Speech.tell(RikaMother, "Rika… Dein Wecker hat nicht geklingelt… Bist du schon wach?");
                await fS.Speech.tell(RikaMother, "<i>Was ist hier los… Habe ich von Sho geträumt? Ich erinnere mich kaum an etwas.</i>");
                await fS.Speech.tell(Rika, "Ja, ich bin wach…");
                await fS.Speech.tell(Rika, "<i>Ich sollte mich schnell anziehen, Sagi wartet bestimmt schon…</i>");

                await fS.Location.show(location.darkBackground);
                fS.Speech.hide();
                fS.Character.hideAll();
                await fS.update(0.5);
                fS.Sound.play(sound.cloth, 0.8, false);

                await fS.Progress.delay(8);

                await fS.Progress.delay(2);

                await fS.Location.show(location.bedroom);
                await fS.update(0.5);
                
                await fS.Speech.tell(Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await fS.Speech.tell(RikaMother, "Geht es dir gut? Du klingst heute etwas krank.");
                await fS.Speech.tell(Rika, "Ja, mir gehts gut.");
                await fS.Speech.tell(RikaMother, "Okay… Dann bis heute Abend.");
                fS.Character.hideAll();
                // await TransitionManager.blendInOut();
                break;

            case StoryState.SchoolAccidentHappend:
                // *** AFTER SCHOOL ACCIDENT ***
                
                await fS.Location.show(location.bedroom);
                await fS.update(transition.wipeLeft.duration, transition.wipeLeft.alpha, transition.wipeLeft.edge);
                await fS.Speech.tell(Rika, "<i>Ich verstehe nicht, was hier passiert. Wie viele Tage habe ich das schon durchgemacht.</i>");

                await fS.Speech.tell(Rika, "<i>Ob Sho sich auch erinnert … Es können keine Träume sein. Ich sollte Sho noch gar nicht kennen.</i>");

                await fS.Location.show(location.darkBackground);
                fS.Speech.hide();
                fS.Character.hideAll();
                await fS.update(0.5);
                fS.Sound.play(sound.cloth, 0.8, false);

                await fS.Progress.delay(8);
                await fS.Location.show(location.bedroom);
                await fS.update(0.5);
                await fS.Speech.tell(Rika, "<i>Ich sollte mit Sagi reden, ihr muss doch auch was aufgefallen sein.");
                break;
        }
    }
}
