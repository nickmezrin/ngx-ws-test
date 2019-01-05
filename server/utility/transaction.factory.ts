export class TransactionFactory {

    private _state: {
        value: number
    }[] = [];

    constructor(amount: number, interval: number = 3000) {
        this._state = new Array(amount).fill({ value: 0 });

        setInterval(() => {
            this._state = this.state.map((x) => { return { value: this.generateNewValue(x.value)  } });
        }, interval)
    };

    public get state(): { value: number}[] {
        return this._state;
    }

    private generateNewValue(oldValue: number): number {
        const d = Math.random();
        const sgn = Math.random() > 0.5;
        return sgn ? oldValue - d : oldValue + d;
    }
}