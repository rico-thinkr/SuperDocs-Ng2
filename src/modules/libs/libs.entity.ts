export class Lib_Create{
    name:string;
}

export class Lib_Log{
    ID:string;
    TimeString:string;
    Time:Date;
    Duration:string;
    Operation:string;
    Message:string;
}



export class Lib_Detail {
    id: string;

    name: string;

    status: string;

    creator: string;

    createTime: string;

    lastUpdate: string;

    description: string;

    fileCount: number;

    // files: Array<File_Info> = [];

    logs: Array<Lib_Log> = [];

}
