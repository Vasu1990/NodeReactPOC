export class Data {
    static getData = () => {
        const data = [];
        for (let i=0;i<=5;i++) {
            data.push('Radnom Data Chunked');
        }
        return data;
    }
    static getJunk = () => {
        const data = [];
        for (let i=0;i<=1025;i++) {
            data.push('Radnom Data Chunked');
        }
        return data;
    }
}