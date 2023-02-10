namespace Template {
    export class TalkingSagi {
        public static async talkingWithSagi(): Promise<void> {
            console.log("Talking with Sagi");
            await fS.Location.show(location.classroom);
            await fS.update();

            await fS.Speech.tell(Rika, "<i>Wie konnte Sie mir das antun. Ich weiß nicht, wie oft ich diesen Tag jetzt immer und immer wieder erleben musste.</i>");
            await fS.Speech.tell(Rika, "<i>Ich werde mit ihr reden, wir sind beste Freundinnen, schon so lange.</i>");

            await fS.Character.show(Sagi, SagiPose.neutral, fS.positions.bottomcenter);
            await fS.update();

            await fS.Speech.tell(Rika, "Sagi?");
            await fS.Speech.tell(Sagi, "Ja, was gibts?");
            await fS.Speech.tell(Rika, "Ich weiß, wer du bist … warum tust du mir das an?");
            await fS.Speech.tell(Sagi, "Wovon redest du?");
            await fS.Speech.tell(Rika, "Bitte mach es nicht noch schwerer, ich weiß, dass du dafür verantwortlich bist, dass Sho stirbt.");
            await fS.Speech.tell(Sagi, "...");
            await fS.Speech.tell(Rika, "Ich dachte wir sind Freunde, wie lange geht das schon so?");
            await fS.Speech.tell(Rika, "Zum wievielten Mal erlebe ich den heutigen Tag schon?!");
            await fS.Speech.tell(Sagi, "Ich habe wirklich gehofft, dass du es nicht herausfindest.");
            await fS.Speech.tell(Sagi, "Dann bleibt mir wohl nichts anderes übrig.");

            //TODO: ADDING SOUND FIGHTING
            //*** BAD ENDING 4***             
        }
    }
}