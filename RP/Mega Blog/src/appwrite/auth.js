import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService{
    client = new Client();
    account;


    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
/*
this code is currently using appwrite for auth, if in future we have to change the service we can do it easily,
that's why we have used this class based approach, in this an account is only then created when the construction of an object takes place,
the specific code of appwrite is only in the constructor and the create account function or other functions,
that means if we have to change our service we only need to change those and other parts of the app will not be affected by is as the fields email, password, name are the same after the change of the service
*/

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //call another method
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }

}

const authService = new AuthService();



export default authService