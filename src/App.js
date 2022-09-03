export default class App {
    static main() {
        console.log("Ready to crumble!");
    }
    static init(config = {}) {
        for (const k in config) {
            if (Object.hasOwnProperty.call(config, k)) {
                this[k] = config[k];
            }
        }
        window.addEventListener("load", e => {
            this.main();
        });
    }
}