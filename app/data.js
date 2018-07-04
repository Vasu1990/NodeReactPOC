export class Data {
    static getData = () => {
        let data = [];
        for (let i=0;i<=5;i++) {
            data.push("Radnom Data Chunked");
        }
        return data;
    }
    static getJunk = () => {
        let data = [];
        for (let i=0;i<=1025;i++) {
            data.push("Radnom Data Chunked");
        }
        return data;
    }
}