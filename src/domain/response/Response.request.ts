export class Response<T> {
    private status: number;
    private systemData: string = new Date().toISOString();
    private message: string;
    private data: T | null | undefined;

    public setStatus(status: number): void{
        this.status = status;
    }

    public setData(data: T | null | undefined) {
        if(data !== null && data !== undefined){
            this.data = data;
        }
    }

    public setMessage(message: string) {
        this.message = message;
    }

    public getStatus(): number{
       return this.status;
    }

    public getSystemData(): string {
        return  this.systemData;
    }

    public getMessage(): string {
		return this.message;
	}

    public getData(): T | null | undefined {
        return this.data;
    }

    public toString(): string {
        return "Response [systemData=" + this.systemData + ", status=" + this.status + ", message="
				+ this.message  + ", data=" + this.data + "]";
    }

}