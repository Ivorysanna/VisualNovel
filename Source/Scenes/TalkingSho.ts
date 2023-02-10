namespace Template {
    export class TalkingSho {
        public static async talkingWithSho(): Promise<void> {
            console.log("Talking with Sho");
            await fS.Speech.tell(Rika, "<i>Ich denke, ich versuche Sho zu überreden. Wenn ich das Buch richtig verstanden habe, dann muss ich nur die Zeit tot schlagen.</i>");

            await fS.Location.show(location.classroom);
            await fS.update();
            await fS.Character.show(Sho, ShoPose.neutral, fS.positions.bottomcenter);

            await fS.Speech.tell(Rika, "Hey Sho. Ich bin Rika.");
            await fS.Speech.tell(Sho, "Hey. Nett dich kennenzulernen. ");
            await fS.Speech.tell(Rika, "Willst du heute nach dem Unterricht hier bleiben? Wir können zusammen Hausaufgaben machen und ich kann dir etwas von der Schule zeigen.");
            await fS.Speech.tell(Sho, "Klar, das wäre echt cool.");
            await fS.Speech.tell(Rika, "<i>Okay, also wenn ich hier mit ihm bleibe, sollte alles gut sein. Ich muss mich nur erinnern, was wir das letzte Mal gemacht haben.</i>");

            //TODO: ADDING SOUND EFFECTS SCHOOLBELLS
            //fade out screen
            fS.Character.hideAll();
            fS.Speech.hide();
            fS.update();
            await fS.Location.show(location.darkBackground);
            await fS.update();

            //fade in screen
            await fS.Location.show(location.classroom);
            await fS.update();
            await fS.Character.show(Sho, ShoPose.neutral, fS.positions.bottomcenter);
            await fS.update();

            await fS.Speech.tell(Sho, "Also ich habe noch eine Aufgabe in Zeichnen. Hast du eine Schere?");
            await fS.Speech.tell(Rika, "<i>Eine Schere?!</i>");
            await fS.Speech.tell(Rika, "N-nein tut mir Leid. Sollen wir mit etwas anfangen, was wir zusammen machen können?");
            await fS.Speech.tell(Sho, "Mh, vielleicht gibt es hier welche im Klassenzimmer.");
            await fS.Speech.tell(Rika, "Halt warte. Wir sollten einfach warten, okay?");
            await fS.Speech.tell(Sho, "Warten? Worauf?");
            await fS.Speech.tell(Rika, "Setzt dich bitte, ich weiß nicht wie ich dir das erklären soll, ohne wie eine Verrückte zu klingen.");
            await fS.Speech.tell(Sho, "Okay, dann versuch es mal.");

            //if statement for loveometer enough
            //TODO: ADJUST LOVEOMETER VALUE
            if (StateManager.loveOMeter == 10) {
                console.log("Loveometer is high enough");
                await fS.Speech.tell(Rika, "Also ich habe zurzeit so ein Gefühl, dass ich immer wieder das Gleiche durchlebe. ");
                await fS.Speech.tell(Rika, "Und um eine bestimmte Zeit … stirbst du…");
                await fS.Speech.tell(Sho, "…");
                await fS.Speech.tell(Rika, "Und ich habe das Buch gelesen. Da steht etwas von einem Dämon…");
                await fS.Speech.tell(Rika, "Jedenfalls, sollten wir die Zeit einfach totschlagen.");
                await fS.Speech.tell(Sho, "O-okay, ich glaube dir mal…");
                await fS.Speech.tell(Rika, "Ich weiß es klingt total verrückt. Aber wir müssen einfach nur warten und nichts machen.");
                await fS.Speech.tell(Rika, "Morgen ist alles wieder normal.");
                // *** GOOD ENDING 1 ***
            } else {
                console.log("Loveometer is not high enough");
                await fS.Speech.tell(Rika, "Also ich habe zurzeit so ein Gefühl, dass ich immer wieder das Gleiche durchlebe. ");
                await fS.Speech.tell(Rika, "Und um eine bestimmte Zeit … stirbst du…");
                await fS.Speech.tell(Sho, "W-was redest du da?");
                await fS.Speech.tell(Rika, "Ich habe das in einem Buch gelesen. Es handelt sich um einen Zeitdämonen.");
                await fS.Speech.tell(Sho, "In einem Buch?");
                await fS.Speech.tell(Sho, "Ich weiß ja nicht was für Fantasy Bücher du liest, aber das ist nicht wahr.");
                await fS.Speech.tell(Sho, "Ich werde jetzt meine Zeichen Aufgabe machen und du solltest einfach gehen, wenn du keine Hausaufgaben erledigen willst.");
                await fS.Speech.tell(Rika, "Jetzt warte doch mal…");
                //TODO: ADDING SOUND EFFECTS OPENING CABINET
                await fS.Speech.tell(Sho, "Hier gibt es bestimmt eine Schere.");
                //TODO: ADDING SOUND EFFECTS FALLING OBJECTS
                // *** BAD ENDING 3 ***

            }
        }
    }
}
