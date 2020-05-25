class VoteCounter extends HTMLElement {
    static name = 'vote-counter';
    static options = { extends: 'div' };
    alternatives = [];
    current = 0;
    event = `zmarta`;

    redrawDisplay() {
        this.content.innerHTML = `
            <style>
                .result-box {
                    text-align: center;
                    border-radius: 4px;
                    padding: 8px;
                    width: 80px;
                    color: #000;
                    font-size: 1.2em;
                    background: #fff!important;
                    margin: 10px auto;
                    margin-right: 20px;
                    border: 1px solid rgba(0, 0, 0, .3);
                    box-shadow: 0 0 20px rgba(0, 0, 0, .2);
                    outline: none;
                }
            </style>
            ${this.alternatives.map((e, index) => `
                <div>
                    <div class="result-box" style="display: inline-block">
                        ${this.votes ? Object.values(this.votes)
                            .filter(x => x === index)
                            .length : 0}
                    </div>
                    <div style="display: inline-block; text-align: left; width: 600px;">
                        ${e}
                    </div>
                </div>
            `).join('')}
        `;
    }

    init() {
        this.shadow = this.attachShadow({mode: 'open'});
        this.content = document.createElement('div');
        this.content.classList.add('result-boxes');
        this.shadow.appendChild(this.content);

        this.provider = new firebase.auth.FacebookAuthProvider();
        this.provider.addScope('email');
        firebase.auth().useDeviceLanguage();
    }

    constructor() {
        super();
        this.init();
        this.getCurrentQuestion();
    }

    getCurrentQuestion() {
        firebase
            .database()
            .ref(`events/${this.event}/current_question`)
            .on('value', i => {
                this.current = i.val();
                this.getAlternatives();
            });
    }

    getAlternatives() {
        firebase
            .database()
            .ref(`questions/${this.event}/${this.current}/alternatives`)
            .on('value', i => {
                this.alternatives = i.val();
                this.getVotes();
            });
    }

    getVotes() {
        firebase
            .database()
            .ref(`votes/${this.event}`)
            .on('value', i => {
                this.votes = i.val()[this.current];
                this.redrawDisplay();
            });
    }
}

customElements
    .define(
        VoteCounter.name,
        VoteCounter
    );