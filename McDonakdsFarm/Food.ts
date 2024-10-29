namespace OldMacDonaldsFarm {
    export class Food {
        public type: string;
        public count: number;

        constructor(_type: string, _count: number) {
            this.type = _type;
            this.count = _count;
        }
    }
}