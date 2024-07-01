//route to call to signup the user


import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req){

    const url=new URL(req.url);//url builder function

    const cookieStore=cookies();

    const formData=await req.formData();
    const email= String(formData.get('email'));
    const password= String(formData.get('password'));

    /*if (!email || !password) {
        return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }*/

    

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