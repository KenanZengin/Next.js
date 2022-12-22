import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider  from "next-auth/providers/credentials";
import connectMongo from "../../../database/conn"
import Users from '../../../model/Schema'
import { compare } from "bcryptjs";

export default NextAuth({
    providers : [
        // google providers
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET
           
        }),
        GithubProvider({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name:"Credentials",
            async authorize(credentials,req){
                connectMongo().catch(error=>{error:"connection failed"})
                
                //check user existance
                const result = await Users.findOne({email:credentials.email})
                if(!result){
                    throw new Error("no user found with email please sing up")
                }

                // compore()
                const checkPassword = await compare(credentials.password, result.password)

                //incorrect password

                if(!checkPassword || result.email!==credentials.email){
                    throw new Error("Username or Password does't match")
                }

                return result
            }
        })
    ],
    secret:"CnalNQ0ErlZwiY7VIuqP/m4suS3n7X6zbI96q/hj0/g=" // openssl rand -base64 32


})