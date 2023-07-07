namespace YesterdayGame {
    export class InterfaceHelper{
        //toggle css class hidden for the button with id ausleihbutton
        public static toggleAusleihButton(): void {
            let ausleihButton: HTMLElement = document.getElementById("ausleihbutton");
            ausleihButton.classList.toggle("hidden");
        }
        public static showAusleihButton(): void {
            let ausleihButton: HTMLElement = document.getElementById("ausleihbutton");
            ausleihButton.classList.remove("hidden");
        }
        public static hideAusleihButton(): void {
            let ausleihButton: HTMLElement = document.getElementById("ausleihbutton");
            ausleihButton.classList.add("hidden");
        }
    }


}