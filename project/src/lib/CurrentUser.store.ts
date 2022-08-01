import type { User } from "@supabase/gotrue-js";
import {readable} from "svelte/store";
import {supabase} from "$lib/db";

const initialValue = supabase.auth.user();

/**
 * Read-Only store that is up-to-date with the signed in user
 * When undefined, user is signed out
 */
export const CurrentUser = readable<User | null>(
    initialValue,
    (set) => {
        supabase.auth.onAuthStateChange((event, session) => {
            if (session?.user) {
                set(session.user)
            } else {
                set(null)
            }
        })
    }
)