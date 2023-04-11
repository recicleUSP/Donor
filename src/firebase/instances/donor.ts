import {Address} from "./address";
import {Statistic} from "./statistic";

interface Donor {
    email:      string,
    name:       string,    
    phone:      string,
    photoUrl:   string,
    prize:      number,
    donations:  Array<string>,
    address:    Array<Address>,
    statistic:  Statistic
};

interface SignData {
    donor: Donor,
    senha: string
}

export {SignData};