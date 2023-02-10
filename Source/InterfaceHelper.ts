namespace Template {
    export class InterfaceHelper{
        //toggle css class hidden for the button with id ausleihbutton
        public static toggleAusleihButton(): void {
            let ausleihButton: HTMLElement = document.getElementById("ausleihbutton");
            ausleihButton.classList.toggle("hidden");
        }
    }
}