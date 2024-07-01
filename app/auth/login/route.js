//route to call to signup the user

//@Cyphonvoid Edited
import {createClient}  from '@supabase/supabase-js';

//Specify all the keys here 
const SUPA_URL = 'https://hhcrpjkcliunjhyvrjna.supabase.co'   //Connects to Cyphonvoid's database you can add your own Database project url here
const SUPA_SERVICE_KEY = ''  
const SUPA_ANON_KEY = ''
export const supabaseClient = createClient(SUPA_URL, SUPA_ANON_KEY)
export const supabaseAdminClient = createClient(SUPA_URL, SUPA_SERVICE_KEY)
//@Cyphonvoid Ends

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GetAccessToken(user_email, user_pass){

    let {data, error} = await supabaseClient.auth.signInWithPassword({email:user_email, password:user_pass})
    console.log(data, error, " Response recieved");

    try{
        console.log(data.user.user_metadata.access_token, " access token")
    }
    catch(error){}
}

export async function POST(req){

    const url=new URL(req.url);//url builder function

    const cookieStore=cookies();

    const formData=await req.formData();
    const email= String(formData.get('email'));
    const password= String(formData.get('password'));

    /*if (!email || !password) {
        return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }*/

    //@Cyphonvoid starts
    let {data, error} = await supabaseClient.auth.signInWithPassword({email:email, password:password})
    console.log(data, error)
    //data contains the access_token at data.user.user_metadata.acess_token
    //@cyphonvoid ends
    //create supabase client and initiate supabase instance

    const supabase= createRouteHandlerClient({

        cookies:() => cookieStore
    });

    /* const { error } =*/

  const {data, error} = await supabase
    .auth
    .signInWithPassword({
        email,
        password
        /*options:{
            //callback point
            emailRedirectTo: `${url.origin}/auth/callback`
        }*/
    });
    if(data) console.log(data);
    if(error) console.log(error);

    /*
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
        */

    return NextResponse.redirect(url.origin, {
        status:301
    });
}


//@Cyphinvoided Edit   Example1
GetAccessToken("random@gmail.com", "random123")
