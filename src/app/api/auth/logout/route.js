import {cookies} from "next/headers";
import { NextResponse} from "next/server";



// Removed 'request: NextRequest' as it's not used in this function
async function handleLogout(){
    try {
        const cookiesStore = cookies();

        // Replace 'sessionToken' with the actual name of your authentication cookie
        // If you have multiple cookies, you'd delete them individually.
        if (cookiesStore.has('access_token')) {
            cookiesStore.delete('access_token');
            if (cookiesStore.has('refresh_token')) {
                cookiesStore.delete('refresh_token');
            }
        } else {
            // Optionally, handle cases where the session token might already be missing
            // For a logout, it's often fine if it's already gone.
            console.warn("Session token not found during logout attempt.");
        }

        // You might also want to invalidate the token on the server-side if you're using a database for sessions.
        // This example focuses on client-side cookie removal.

        return NextResponse.json({message: 'Logout successful'}, {status: 200});
    } catch (error) { // Changed 'any' to 'unknown'
        console.error("Logout failed:", error);
        let errorMessage = 'An unknown error occurred during logout.';
        if (error instanceof Error) { // Type narrowing to access 'message'
            errorMessage = error.message;
        }
        return NextResponse.json({errorMessage}, {status: 500});
    }
}

export async function POST() {
    // We still receive 'request' in POST, but handleLogout no longer needs it.
    return handleLogout();
}