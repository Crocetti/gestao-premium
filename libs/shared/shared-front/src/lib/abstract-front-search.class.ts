import { BasicAll } from "@gpremium/shared-all";

export abstract class AbstractFrontSearch<T> extends BasicAll{

    constructor(){
        super()
    }

    public abstract onBlurCode(event);
    public abstract onClick(event);
    public abstract onInputdescription(event);


}
