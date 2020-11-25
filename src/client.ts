/** some options used  */
export interface ClientOpts {
   token?: string;
}
/** the main client/entrypoint */
export class Client {
   private _token?: string;
   public set token(token: string | undefined) {
      this._token = token;
   }
   public get token(): string | undefined {
      return this._token;
   }
   public constructor(opts: object) {
      // h
   }
}
