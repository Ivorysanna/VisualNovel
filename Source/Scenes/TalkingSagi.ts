namespace Template {
    export class TalkingSagi {
        public static async talkingWithSagi(): Promise<void> {
            console.log("Talking with Sagi");
            await fS.Location.show(location.classroom);
            await fS.update(transition.wipeLeft.duration, transition.wipeLeft.alpha, transition.wipeLeft.edge);
            await fS.update();

            await fS.Speech.tell(Rika, "<i>Wie konnte Sie mir das antun. Ich weiß nicht, wie oft ich diesen Tag jetzt immer und immer wieder erleben musste.</i>");
            await fS.Speech.tell(Rika, "<i>Ich werde mit ihr reden, wir sind beste Freundinnen, schon so lange.</i>");

            await fS.Character.show(Sagi, SagiPose.neutral, fS.positions.bottomcenter);
            await fS.update(0.5);

            await fS.Speech.tell(Rika, "Sagi?");
            await fS.Speech.tell(Sagi, "Ja, was gibts?");
            await fS.Speech.tell(Rika, "Ich weiß, wer du bist … warum tust du mir das an?");
            await fS.Speech.tell(Sagi, "Wovon redest du?");
            await fS.Speech.tell(Rika, "Bitte mach es nicht noch schwerer, ich weiß, dass du dafür verantwortlich bist, dass Sho stirbt.");
            await fS.Speech.tell(Sagi, "...");
            await fS.Speech.tell(Rika, "Ich dachte wir sind Freunde, wie lange geht das schon so?");
            await fS.Speech.tell(Rika, "Zum wievielten Mal erlebe ich den heutigen Tag schon?!");
            fS.Sound.fade(sound.intenseSound, 0.2, 1);
            await fS.Speech.tell(Sagi, "Ich habe wirklich gehofft, dass du es nicht herausfindest.");
            await fS.Speech.tell(Sagi, "Dann bleibt mir wohl nichts anderes übrig.");
            fS.Sound.play(sound.neckCracking, 0.5, false);

            fS.Character.hideAll();
            fS.Speech.hide();
            await fS.update(0.5);


            fS.Sound.fade(sound.intenseSound, 0, 1);

            //TODO: ADDING SOUND FIGHTING
            //*** BAD ENDING 4*** 
            await EndScene.badEndingSagi();            
        }
    }
}