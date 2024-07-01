//call everytime to set the session. when user confirms or verifies their email, they need to be redirected to a page.
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { supabase } from "@/app/lib/supabase";


export async function GET(NextRequest){

    const url= new URL(NextRequest.url);
     //we will again use cookiestore and exchange the code we get
     //to catch code first
     const code=url.searchParams.get('code');

     if(code){
        const cookieStore=cookies();
        const supabase=createRouteHandlerClient({
            cookies:() => cookieStore
        });
    
     await supabase
     .auth
     .exchangeCodeForSession(code)
    }
    


    return NextResponse.redirect(url.origin);
}