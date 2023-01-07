namespace Template {
    export async function WakingUp(): fS.SceneReturn {
        console.log("Waking Up starting");
        //TODO: *** DONT FORGET DELAYS ***
        switch (StateManager.storyState) {
            case StoryState.FirstRun:
                //TODO:fS.Sound.play(sound.alarmClock, 0.5, false);
                //TODO: await fS.Progress.delay(4);
                await fS.Location.show(location.bedroom);
                await fS.update(transition.swirl.duration, transition.swirl.alpha, transition.swirl.edge);

                await fS.update();
                //await fS.Progress.delay(3);
                await fS.Speech.tell(RikaMother, "Rika wach auf, sonst kommst du zu spät!");
                await fS.Speech.tell(Rika, "Ja, ich bin schon wach.");
                await fS.Speech.tell(Rika, "Ich sollte mich schnell fertig machen, nicht dass Sagi wieder auf mich warten muss …");
                //TODO: await fS.Progress.delay(3);

                await TransitionManager.blendInOut();

                await fS.Progress.delay(5);

                await fS.Location.show(location.bedroom);
                await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(40, 100));
                await fS.update(0.5);
                await fS.Speech.tell(Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await fS.Speech.tell(RikaMother, "Okay, viel Erfolg!");
                await fS.Character.animate(Rika, RikaPose.neutral, leavingLeft());
                break;
            case StoryState.CarCrashHappend:
                //*** After Car Accident***
                fS.Sound.play(sound.alarmClock, 0.5, false);
                //TODO: await fS.Progress.delay(4);
                await fS.Location.show(location.bedroom);
                await fS.update(transition.swirl.duration, transition.swirl.alpha, transition.swirl.edge);
                await fS.Speech.tell(RikaMother, "Rika wach auf, sonst kommst du zu spät!");
                await fS.Speech.tell(Rika, "Was… Was war das für ein Traum…");
                await fS.Speech.tell(Rika, "Ja ich bin schon wach.");
                await fS.Speech.tell(Rika, "Ich sollte mich schnell anziehen, nicht, dass Sagi auf mich warten muss.");

                await fS.Location.show(location.darkBackground);
                fS.Speech.hide();
                fS.Character.hideAll();
                await fS.update();

                await fS.Location.show(location.bedroom);
                await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(40, 100));
                await fS.update(0.5);
                await fS.Speech.tell(Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await fS.Speech.tell(RikaMother, "Okay, viel Erfolg!");
                break;

            case StoryState.ConstructionSiteAccidentHappend:
                // *** AFTER CONSTRUCTION SITE ACCIDENT ***
                //TODO: await fS.Progress.delay(4);
                await fS.Location.show(location.bedroom);
                await fS.update(transition.swirl.duration, transition.swirl.alpha, transition.swirl.edge);
                await fS.Speech.tell(RikaMother, "Rika… Dein Wecker hat nicht geklingelt… Bist du schon wach?");
                await fS.Speech.tell(RikaMother, "<i>Was ist hier los… Habe ich von Sho geträumt? Ich erinnere mich kaum an etwas.</i>");
                await fS.Speech.tell(Rika, "Ja, ich bin wach…");
                await fS.Speech.tell(Rika, "<i>Ich sollte mich schnell anziehen, Sagi wartet bestimmt schon…</i>");

                await fS.Location.show(location.darkBackground);
                fS.Speech.hide();
                fS.Character.hideAll();
                await fS.update();

                await fS.Progress.delay(5);

                await fS.Location.show(location.bedroom);
                await fS.update();
                await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(40, 100));
                await fS.update(0.5);
                await fS.Speech.tell(Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await fS.Speech.tell(RikaMother, "Geht es dir gut? Du klingst heute etwas krank.");
                await fS.Speech.tell(Rika, "Ja, ich denke schon.");
                await fS.Speech.tell(RikaMother, "Okay… Dann bis heute Abend.");
                fS.Speech.hide();
                fS.Character.hideAll();
                break;
        }
    }
}
