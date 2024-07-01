import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
//import { RouteMatcher } from "next/dist/server/future/route-matchers/route-matcher";

import { NextRequest, NextResponse } from "next/server";
export async function middlewear(req){

    const res=NextResponse.next();
    const supabase= createMiddlewareClient({req,res})
    const {data:{
        session
    },error}=await supabase
    .auth.getSession()

    if(!session){
        return NextResponse.rewrite(new URL('/login',req.url));
    }

    if(data) console.log(data);
    if(error ) console.log(error);

    return res;
    

}
export const config={
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ]
}